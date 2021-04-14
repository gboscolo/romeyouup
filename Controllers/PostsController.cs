using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
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

		[HttpDelete("{id}")]
		public IActionResult DeletePost([FromRoute] long id)
		{
			try
			{
				PostContext context = HttpContext.RequestServices.GetService(typeof(PostContext)) as PostContext;
				context.DeletePost(id);
				return NoContent();
			}
			catch (Exception ex)
			{
				this._logger.LogError("Error in Posts/DeletePost " + ex.Message + ex.StackTrace, ex.Message + ex.StackTrace);
				return NoContent();
			}
		}

		[HttpPost]
		public long InsertOrUpdate([FromBody] Post post)
		{
			PostContext context = HttpContext.RequestServices.GetService(typeof(PostContext)) as PostContext;
			List<string> insertedImages = new List<string>();
			if (post.RawImages != null && post.RawImages.Count > 0)
			{
				post.RawImages.ForEach(img => { 					
					insertedImages.Add(context.InsertImage(img) + string.Empty); 
				});

				post.RawImages = null;
				post.Images = insertedImages;
			}

			long postId = -1;
			try
			{
				if (post.Id > 0)
				{
					postId = context.UpdatePost(post);
				}
				else
				{
					postId = context.InsertPost(post);
				}
			}
			catch (Exception ex)
			{
				this._logger.LogError("Error in Posts/INsertOrUpdate " + ex.Message, ex.Message);
			}			

			return postId;
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
