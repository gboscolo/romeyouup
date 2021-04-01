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
	public class ContributorsController : ControllerBase
	{
		private readonly ILogger<ImagesController> _logger;

		public ContributorsController(ILogger<ImagesController> logger)
		{
			_logger = logger;
		}

		[HttpGet]
		public List<Contributor> GetContributors()
		{
			try
			{
				this._logger.LogDebug("Entering in GetContributor/GetContributors");
				ContributorContext context = HttpContext.RequestServices.GetService(typeof(ContributorContext)) as ContributorContext;
				return context.GetContributors();
			}
			catch (Exception exception)
			{
				this._logger.LogError("Error in GetContributor/GetContributors", exception);
				return null;
			}
		}

		[HttpGet("{id:long}")]
		public Contributor GetContributor(long id)
		{
			try
			{
				this._logger.LogDebug("Entering in GetContributor/GetContributor");
				ContributorContext context = HttpContext.RequestServices.GetService(typeof(ContributorContext)) as ContributorContext;
				return context.GetContributor(id);		
			}
			catch (Exception exception)
			{
				this._logger.LogError("Error in GetContributor/GetContributor", exception);
				return null;
			}
		}
	}
}
