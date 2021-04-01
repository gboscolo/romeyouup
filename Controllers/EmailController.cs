using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using romeyouup.DataLayer.Models;

namespace romeyouup.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class EmailController : ControllerBase
	{
		private readonly ILogger<EmailController> _logger;
		private IConfiguration _configuration;

		public EmailController(ILogger<EmailController> logger, IConfiguration configuration)
		{
			_logger = logger;
			_configuration = configuration;
		}

		[HttpPost()]
		public ActionResult SendEmail([FromBody]Email email)
		{
			//this.GetSmtpClient().Send("noreply@romeyouup.it", "gian.boscolo@hotmail.it", "CIAO BIBI", "body");
			try
			{
				List<string> infoRequestsRecipients = this._configuration["Smtp:InfoRequestsRecipients"].Split("|").ToList();
				SmtpClient client = this.GetSmtpClient();

				if (infoRequestsRecipients.Count > 0)
				{
					var mailMessage = new MailMessage
					{
						From = new MailAddress(this._configuration["Smtp:Username"], this._configuration["Smtp:Userlabel"]),
						Subject = this._configuration["Smtp:InfoEmailSubject"],
						Body = "Ciao! É arrivata una nuova richiesta di informazioni su romeyouup da " + email.Name + " (" + email.Sender + "): " + email.Message,
						IsBodyHtml = true,
					};
					infoRequestsRecipients.ForEach(r => mailMessage.To.Add(r));
					client.Send(mailMessage);
				}

				client.Send(this._configuration["Smtp:Username"], email.Sender, this._configuration["Smtp:InfoEmailSubject"], "Ciao! Abbiamo ricevuto la tua richiesta di informazioni, sarai ricontattato al più presto!");

				return StatusCode(200);
			}
			catch (Exception exception)
			{
				this._logger.LogError("Error in Email/SendEmail" + exception.Message, exception);
				return StatusCode(500);
			}
		}

		private SmtpClient GetSmtpClient()
		{ 

			return new SmtpClient(this._configuration["Smtp:Host"])
			{
				Port = Convert.ToInt32(this._configuration["Smtp:Port"]),
				Credentials = new NetworkCredential(this._configuration["Smtp:Username"], this._configuration["Smtp:Password"]),
				EnableSsl = true
			};
		}
	}
}