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

        public long InsertTour(Tour tour)
        {
            string commandText = "INSERT INTO TOURS (TITLE, TYPE, DESCRIPTION, CAPTION, COST, ADDITIONALINFO, DURATION, SUMMARY, WILLSEE, IMAGES, MODALITY) VALUES (@TITLE, @TYPE, @DESCRIPTION, @CAPTION, @COST, @ADDITIONALINFO, @DURATION, @SUMMARY, @WILLSEE, @IMAGES, @MODALITY)";
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(commandText, conn);
                cmd.Parameters.Add("@TITLE", MySqlDbType.VarChar);
                cmd.Parameters.Add("@TYPE", MySqlDbType.Int32);
                cmd.Parameters.Add("@MODALITY", MySqlDbType.Int32);
                cmd.Parameters.Add("@DESCRIPTION", MySqlDbType.MediumText);
                cmd.Parameters.Add("@CAPTION", MySqlDbType.VarChar);
                cmd.Parameters.Add("@COST", MySqlDbType.Float);
                cmd.Parameters.Add("@ADDITIONALINFO", MySqlDbType.VarChar);
                cmd.Parameters.Add("@DURATION", MySqlDbType.Float);
                cmd.Parameters.Add("@SUMMARY", MySqlDbType.MediumText);
                cmd.Parameters.Add("@WILLSEE", MySqlDbType.MediumText);
                cmd.Parameters.Add("@IMAGES", MySqlDbType.MediumText);
                cmd.Parameters.Add("@DATE", MySqlDbType.DateTime);
                cmd.Parameters["@TITLE"].Value = tour.Title;
                cmd.Parameters["@TYPE"].Value = tour.Type;
                cmd.Parameters["@MODALITY"].Value = tour.Modality;
                cmd.Parameters["@DESCRIPTION"].Value = tour.Description;
                cmd.Parameters["@CAPTION"].Value = tour.Caption;
                cmd.Parameters["@COST"].Value = tour.Cost;
                cmd.Parameters["@ADDITIONALINFO"].Value = tour.AdditionalInfo;
                cmd.Parameters["@DURATION"].Value = tour.Duration;
                cmd.Parameters["@SUMMARY"].Value = tour.Summary;
                cmd.Parameters["@WILLSEE"].Value = tour.WillSee;
                cmd.Parameters["@IMAGES"].Value = string.Join("|", tour.Images);
                cmd.Parameters["@MODALITY"].Value = tour.Modality;

                cmd.ExecuteNonQuery();
                return cmd.LastInsertedId;
            }
        }
        public long UpdateTour(Tour tour)
        {
            string commandText = "UPDATE TOURS SET TITLE=@TITLE, TYPE=@TYPE, DESCRIPTION=@DESCRIPTION, CAPTION=@CAPTION, COST=@COST, ADDITIONALINFO=@ADDITIONALINFO, DURATION=@DURATION, SUMMARY=@SUMMARY, WILLSEE=@WILLSEE, IMAGES=@IMAGES, MODALITY=@MODALITY WHERE TOUR_ID=@TOUR_ID";
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(commandText, conn);
                cmd.Parameters.Add("@TOUR_ID", MySqlDbType.Int32);
                cmd.Parameters.Add("@TITLE", MySqlDbType.VarChar);
                cmd.Parameters.Add("@TYPE", MySqlDbType.Int32);
                cmd.Parameters.Add("@MODALITY", MySqlDbType.Int32);
                cmd.Parameters.Add("@DESCRIPTION", MySqlDbType.MediumText);
                cmd.Parameters.Add("@CAPTION", MySqlDbType.VarChar);
                cmd.Parameters.Add("@COST", MySqlDbType.Float);
                cmd.Parameters.Add("@ADDITIONALINFO", MySqlDbType.VarChar);
                cmd.Parameters.Add("@DURATION", MySqlDbType.Float);
                cmd.Parameters.Add("@SUMMARY", MySqlDbType.MediumText);
                cmd.Parameters.Add("@WILLSEE", MySqlDbType.MediumText);
                cmd.Parameters.Add("@IMAGES", MySqlDbType.MediumText);
                cmd.Parameters.Add("@DATE", MySqlDbType.DateTime);
                cmd.Parameters["@TOUR_ID"].Value = tour.Id;
                cmd.Parameters["@TITLE"].Value = tour.Title;
                cmd.Parameters["@TYPE"].Value = tour.Type;
                cmd.Parameters["@MODALITY"].Value = tour.Modality;
                cmd.Parameters["@DESCRIPTION"].Value = tour.Description;
                cmd.Parameters["@CAPTION"].Value = tour.Caption;
                cmd.Parameters["@COST"].Value = tour.Cost;
                cmd.Parameters["@ADDITIONALINFO"].Value = tour.AdditionalInfo;
                cmd.Parameters["@DURATION"].Value = tour.Duration;
                cmd.Parameters["@SUMMARY"].Value = tour.Summary;
                cmd.Parameters["@WILLSEE"].Value = tour.WillSee;
                cmd.Parameters["@IMAGES"].Value = string.Join("|", tour.Images);
                cmd.Parameters["@MODALITY"].Value = tour.Modality;

                cmd.ExecuteNonQuery();
                return cmd.LastInsertedId;
            }
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
                Cost = reader["COST"].ToString(),
                AdditionalInfo = reader["ADDITIONALINFO"].ToString(),
                Duration = reader["DURATION"].ToString(),
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
