﻿using System.Collections.Generic;

namespace romeyouup.DataLayer.Models
{
	public class Tour
	{
		public int Id { get; set; }
		public string Title { get; set; }
		public string Caption { get; set; }
		public long Duration { get; set; }
		public int Cost { get; set; }
		public string Summary { get; set; }
		public string Description { get; set; }
		public string AdditionalInfo { get; set; }
		public string WillSee { get; set; }
		public int Type { get; set; }
		public List<string> Images { get; set; }
		public int Modality { get; set; }
	}
}