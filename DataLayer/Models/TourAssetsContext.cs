using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace romeyouup.DataLayer.Models
{
	public class TourAssetsContext
    {
        public string ConnectionString { get; set; }

        public TourAssetsContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        public TourAssets GetTourAssets(long id)
        {
            TourAssets assets = new TourAssets();
			string commandText = "SELECT TOURASSETS.TOUR_ASSETS_ID, TOURASSETS.IMAGES, TOURASSETS.VIDEOS, TOURS.TITLE, TOURS.TOUR_ID " +
				"FROM TOURASSETS " +
				"INNER JOIN TOURS ON TOURASSETS.TOUR_ID = TOURS.TOUR_ID " +
                "WHERE TOUR_ASSETS_ID = @ID;";

            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(commandText, conn);
                cmd.Parameters.Add("@ID", MySqlDbType.Int64);
                cmd.Parameters["@ID"].Value = id;

                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.Read()) 
                    {
                        assets = this.ParseTourAssetsFromReader(reader);
                    }                    
                }
                return assets;
            }
        }

        private TourAssets ParseTourAssetsFromReader(MySqlDataReader reader)
        {
            TourAssets assets = new TourAssets
            {
                Id = Convert.ToInt32(reader["TOUR_ASSETS_ID"]),
                Images = reader["IMAGES"].ToString(),
                Videos = reader["VIDEOS"].ToString(),
                Tour = new Tour
                { 
                    Id = Convert.ToInt32(reader["TOUR_ID"]),
                    Title = reader["TITLE"].ToString()
                }
            };

            return assets;
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }
    }
}
