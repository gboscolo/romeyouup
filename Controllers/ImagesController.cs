using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MySql.Data.MySqlClient;
using romeyouup.DataLayer.Models;

namespace romeyouup.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class ImagesController : ControllerBase
	{
		private readonly ILogger<ImagesController> _logger;

		public ImagesController(ILogger<ImagesController> logger)
		{
			_logger = logger;
		}

		[HttpGet("{id:long}")]
		public ActionResult GetImage(long id)
		{
			try
			{
				this._logger.LogDebug("Entering in Images/GetImage");
				PostContext context = HttpContext.RequestServices.GetService(typeof(PostContext)) as PostContext;
				Image image = context.GetImage(id);
				if (!string.IsNullOrEmpty(image.Content))
				{
					Response.Headers["Cache-Control"] = "public, max-age=604800, immutable";
					return File(new MemoryStream(Convert.FromBase64String(image.Content)) ?? null, "image/jpg");
				}

				return StatusCode(404);				
			}
			catch (Exception exception)
			{
				this._logger.LogError("Error in Images/GetImage", exception);
				return StatusCode(500);
			}
		}
	}
}
