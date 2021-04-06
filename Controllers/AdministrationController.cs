using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using romeyouup.Core.Utilities;
using romeyouup.DataLayer.Models;

namespace romeyouup.Controllers
{
	[Authorize]
	[ApiController]
	[Route("[controller]")]
	public class AdministrationController : ControllerBase
	{
		private readonly ILogger<AdministrationController> _logger;
		private IConfiguration _configuration;

		public AdministrationController(ILogger<AdministrationController> logger, IConfiguration configuration)
		{
			_logger = logger;
			_configuration = configuration;
		}
	}
}