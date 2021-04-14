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
	public class ToursController : ControllerBase
	{
		private readonly ILogger<ToursController> _logger;

		public ToursController(ILogger<ToursController> logger)
		{
			_logger = logger;
		}

		[HttpGet]
		public IEnumerable<Tour> GetAll()
		{
			try
			{
				this._logger.LogDebug("Entering in Tours/Get");
				TourContext context = HttpContext.RequestServices.GetService(typeof(TourContext)) as TourContext;
				return context.GetTours();
			}
			catch (Exception ex)
			{
				this._logger.LogError("Error in Tours/Get " + ex.Message + ex.StackTrace, ex.Message + ex.StackTrace);
				return null;
			}
		}

		[HttpGet("{id:long}")]
		public Tour GetTour(long id)
		{
			try
			{
				this._logger.LogDebug("Entering in Tours/GetPost");
				TourContext context = HttpContext.RequestServices.GetService(typeof(TourContext)) as TourContext;
				return context.GetTour(id);
			}
			catch (Exception exception)
			{
				this._logger.LogError("Error in Tours/Get", exception + exception.Message);
				return null;
			}
		}

		[HttpPost]
		public long InsertOrUpdate([FromBody] Tour tour)
		{
			TourContext context = HttpContext.RequestServices.GetService(typeof(TourContext)) as TourContext;
			PostContext postcontext = HttpContext.RequestServices.GetService(typeof(PostContext)) as PostContext;
			List<string> insertedImages = new List<string>();
			if (tour.RawImages != null && tour.RawImages.Count > 0)
			{
				tour.RawImages.ForEach(img => {
					insertedImages.Add(postcontext.InsertImage(img) + string.Empty);
				});

				tour.RawImages = null;
				tour.Images = insertedImages;
			}

			long tourId = -1;
			try
			{
				if (tour.Id > 0)
				{
					tourId = context.UpdateTour(tour);
				}
				else
				{
					tourId = context.InsertTour(tour);
				}
			}
			catch (Exception ex)
			{
				this._logger.LogError("Error in Tours/INsertOrUpdate " + ex.Message, ex.Message);
			}

			return tourId;
		}
	}
}
