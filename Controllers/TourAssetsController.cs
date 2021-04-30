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
	public class TourAssetsController : ControllerBase
	{
		private readonly ILogger<TourAssetsController> _logger;

		public TourAssetsController(ILogger<TourAssetsController> logger)
		{
			_logger = logger;
		}

		[HttpGet("{id:long}")]
		public TourAssets GetTourAssets(long id)
		{
			try
			{
				this._logger.LogDebug("Entering in TourAssets/GetImage");
				TourAssetsContext context = HttpContext.RequestServices.GetService(typeof(TourAssetsContext)) as TourAssetsContext;
				TourAssets tourAssets = context.GetTourAssets(id);

				return tourAssets;				
			}
			catch (Exception exception)
			{
				this._logger.LogError("Error in TourAssets/GetTourAssets", exception);
				return null;
			}
		}
	}
}
