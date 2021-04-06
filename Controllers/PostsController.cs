using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MySql.Data.MySqlClient;
using romeyouup.DataLayer.Models;

namespace romeyouup.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class PostsController : ControllerBase
	{
		private readonly ILogger<PostsController> _logger;

		public PostsController(ILogger<PostsController> logger)
		{
			_logger = logger;
		}

		[HttpGet]
		public IEnumerable<Post> GetAll()
		{
			try
			{
				this._logger.LogDebug("Entering in Posts/Get");
				PostContext context = HttpContext.RequestServices.GetService(typeof(PostContext)) as PostContext;
				return context.GetAll();
			}
			catch (Exception ex)
			{
				this._logger.LogError("Error in Posts/Get " + ex.Message + ex.StackTrace, ex.Message + ex.StackTrace);
				return null;
			}
		}

		[HttpGet("{id:long}")]
		public Post GetPost(long id)
		{
			try
			{
				this._logger.LogDebug("Entering in Posts/GetPost");
				PostContext context = HttpContext.RequestServices.GetService(typeof(PostContext)) as PostContext;
				return context.GetPost(id);
			}
			catch (Exception exception)
			{
				this._logger.LogError("Error in Posts/Get", exception + exception.Message);
				return null;
			}
		}
	}
}
