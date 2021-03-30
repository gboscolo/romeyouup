using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace romeyouup.DataLayer.Models
{
	public class Image
	{
		private DataContext context;

		public int Id { get; set; }
		public string Content { get; set; }

		public string Caption { get; set; }
	}
}
