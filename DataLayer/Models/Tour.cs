using System.Collections.Generic;

namespace romeyouup.DataLayer.Models
{
	public class Tour
	{
		public int Id { get; set; }
		public string Title { get; set; }
		public string Caption { get; set; }
		public string Duration { get; set; }
		public string Cost { get; set; }
		public string Summary { get; set; }
		public string Description { get; set; }
		public string AdditionalInfo { get; set; }
		public string WillSee { get; set; }
		public int Type { get; set; }
		public List<string> Images { get; set; }
		public int Modality { get; set; }
		public List<string> RawImages { get; set; }
		public string Positions { get; set; }
	}
}
