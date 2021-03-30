using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace romeyouup.DataLayer.Models
{
	public class TourContext
    {
        public string ConnectionString { get; set; }

        public TourContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        public Tour GetTour(long id)
        {
            Tour tour = new Tour();
            string commandText = "SELECT * FROM TOURS WHERE TOUR_ID = @TOUR_ID ";
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(commandText, conn);
                cmd.Parameters.Add("@TOUR_ID", MySqlDbType.Int64);
                cmd.Parameters["@TOUR_ID"].Value = id;

                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.Read()) 
                    {
                        tour = this.ParseTourFromReader(reader);
                    }                    
                }

                return tour;
            }
        }

        public List<Tour> GetTours()
        {
            List<Tour> list = new List<Tour>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM TOURS", conn);

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(this.ParseTourFromReader(reader));
                    }
                }

                return list;
            }
        }

        private Tour ParseTourFromReader(MySqlDataReader reader)
        {
            return new Tour
            {
                Id = Convert.ToInt32(reader["TOUR_ID"]),
                Title = reader["TITLE"].ToString(),
                Type = Convert.ToInt32(reader["TYPE"]),
                Description = reader["DESCRIPTION"].ToString(),
                Caption = reader["CAPTION"].ToString(),
                Cost = Convert.ToInt32(reader["COST"]),
                AdditionalInfo = reader["ADDITIONALINFO"].ToString(),
                Duration = Convert.ToInt32(reader["DURATION"]),
                Summary = reader["SUMMARY"].ToString(),
                WillSee = reader["WILLSEE"].ToString(),
                Images = reader["IMAGES"]?.ToString().Split('|').ToList() ?? new List<string>(),
                Modality = Convert.ToInt32(reader["MODALITY"])
            };
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }
    }
}
