using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace romeyouup.DataLayer.Models
{
	public class ContributorContext
    {
        public string ConnectionString { get; set; }

        public ContributorContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        public Contributor GetContributor(long id)
        {
            Contributor contributor = new Contributor();
            string commandText = "SELECT * FROM CONTRIBUTORS WHERE CONTRIBUTOR_ID = @CONTRIBUTOR_ID ";
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(commandText, conn);
                cmd.Parameters.Add("@CONTRIBUTOR_ID", MySqlDbType.Int64);
                cmd.Parameters["@CONTRIBUTOR_ID"].Value = id;

                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.Read()) 
                    {
                        contributor = this.ParseContributorFromReader(reader);
                    }                    
                }

                return contributor;
            }
        }

        public List<Contributor> GetContributors()
        {
            List<Contributor> list = new List<Contributor>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM CONTRIBUTORS", conn);

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(this.ParseContributorFromReader(reader));
                    }
                }

                return list;
            }
        }

        private Contributor ParseContributorFromReader(MySqlDataReader reader)
        {
            return new Contributor
            {
                Id = Convert.ToInt32(reader["CONTRIBUTOR_ID"]),
                Name = reader["NAME"].ToString(),
                Image = reader["IMAGE"].ToString(),
                Description = reader["DESCRIPTION"].ToString()
            };
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }
    }
}
