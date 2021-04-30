using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace romeyouup.DataLayer.Models
{
	public class TourAssets
	{
		public int Id { get; set; }
		public string Images { get; set; }
		public string Videos { get; set; }
		public Tour Tour { get; set; }
	}
}
