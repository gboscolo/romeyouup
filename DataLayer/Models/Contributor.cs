using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace romeyouup.DataLayer.Models
{
	public class Contributor
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Image { get; set; }
		public string Description { get; set; }

		public string Youtube { get; set; }
		public string Facebook { get; set; }
		public string Instagram { get; set; }
		public string Telegram { get; set; }
		public string Twitter { get; set; }

	}
}
