using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace romeyouup.DataLayer.Models
{
	public class PostContext
	{
        public string ConnectionString { get; set; }

        public PostContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        public Post GetPost(long id)
        {
            Post post = new Post();
            string commandText = "SELECT * FROM POSTS WHERE POST_ID = @POST_ID ";
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(commandText, conn);
                cmd.Parameters.Add("@POST_ID", MySqlDbType.Int64);
                cmd.Parameters["@POST_ID"].Value = id;

                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.Read()) 
                    {
                        post = new Post
                        {
                            Id = Convert.ToInt32(reader["POST_ID"]),
                            Author = reader["AUTHOR"].ToString(),
                            Title = reader["TITLE"].ToString(),
                            Content = reader["CONTENT"].ToString(),
                            Date = Convert.ToDateTime(reader["DATE"].ToString()),
                            Type = Convert.ToInt32(reader["TYPE"]),
                            Images = reader["IMAGES"]?.ToString().Split('|').ToList() ?? new List<string>()
                        };
                    }                    
                }

                return post;
            }
        }

        public List<Post> GetAll()
        {
            List<Post> list = new List<Post>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM POSTS", conn);

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new Post
                        { 
                            Id = Convert.ToInt32(reader["POST_ID"]),
                            Author = reader["AUTHOR"].ToString(),
                            Title = reader["TITLE"].ToString(),
                            Content = reader["CONTENT"].ToString(),
                            Date = Convert.ToDateTime(reader["DATE"].ToString()),
                            Type = Convert.ToInt32(reader["TYPE"]),
                            Images = reader["IMAGES"]?.ToString().Split('|').ToList() ?? new List<string>()
                        });
                    }
                }

                return list;
            }
        }

        public Image GetImage(long id)
        {
            Image image = new Image();
            string commandText = "SELECT * FROM IMAGES WHERE IMAGE_ID = @IMAGE_ID ";
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(commandText, conn);
                cmd.Parameters.Add("@IMAGE_ID", MySqlDbType.Int64);
                cmd.Parameters["@IMAGE_ID"].Value = id;

                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.Read())
                    {
                        image = new Image
                        {
                            Id = Convert.ToInt32(reader["IMAGE_ID"]),
                            Content = reader["CONTENT"].ToString(),
                            Caption = reader["CAPTION"].ToString()
                        };
                    }
                }

                return image;
            }
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }
    }
}
