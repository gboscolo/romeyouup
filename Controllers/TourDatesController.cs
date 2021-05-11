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
	public class TourDatesController : ControllerBase
	{
		private readonly ILogger<TourDatesController> _logger;

		public TourDatesController(ILogger<TourDatesController> logger)
		{
			_logger = logger;
		}

		[HttpGet("{id:long}")]
		public List<TourDate> GetTourDates(long? id)
		{
			try
			{
				this._logger.LogDebug("Entering in TourDatesController/GetTourDates");
				TourContext context = HttpContext.RequestServices.GetService(typeof(TourContext)) as TourContext;
				List<TourDate> tourdates = context.GetTourDates(id);

				return tourdates;				
			}
			catch (Exception exception)
			{
				this._logger.LogError("Error in TourDatesController/GetTourDates", exception);
				return null;
			}
		}
	}
}
