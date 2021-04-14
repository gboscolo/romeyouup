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

        public void DeletePost(long id)
        {
            string commandText = "DELETE FROM POSTS WHERE POST_ID = @POST_ID ";
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(commandText, conn);
                cmd.Parameters.Add("@POST_ID", MySqlDbType.Int64);
                cmd.Parameters["@POST_ID"].Value = id;
                cmd.ExecuteNonQuery();
            }
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
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM POSTS ORDER BY POST_ID DESC", conn);

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

        public long InsertImage(string content)
        {            
            string commandText = "INSERT INTO IMAGES (CONTENT) VALUES (@CONTENT)";
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(commandText, conn);
                cmd.Parameters.Add("@CONTENT", MySqlDbType.LongText);
                cmd.Parameters["@CONTENT"].Value = content;
                cmd.ExecuteNonQuery();
                return cmd.LastInsertedId;
            }
        }

        public long UpdatePost(Post post)
        {
            string commandText = "UPDATE POSTS SET AUTHOR = @AUTHOR, TITLE = @TITLE, CONTENT = @CONTENT, TYPE = @TYPE WHERE POST_ID = @ID";
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(commandText, conn);
                cmd.Parameters.Add("@AUTHOR", MySqlDbType.VarChar);
                cmd.Parameters.Add("@TITLE", MySqlDbType.VarChar);
                cmd.Parameters.Add("@CONTENT", MySqlDbType.VarChar);
                cmd.Parameters.Add("@TYPE", MySqlDbType.Int32);
                cmd.Parameters.Add("@ID", MySqlDbType.Int32);
                cmd.Parameters["@AUTHOR"].Value = post.Author;
                cmd.Parameters["@TITLE"].Value = post.Title;
                cmd.Parameters["@CONTENT"].Value = post.Content;
                cmd.Parameters["@TYPE"].Value = post.Type;
                cmd.Parameters["@ID"].Value = post.Id;
                cmd.ExecuteNonQuery();
                return cmd.LastInsertedId;
            }
        }

        public long InsertPost(Post post)
        {
            string commandText = "INSERT INTO POSTS (AUTHOR, TITLE, CONTENT, TYPE, IMAGES, DATE) VALUES (@AUTHOR, @TITLE, @CONTENT, @TYPE, @IMAGES, @DATE)";
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(commandText, conn);
                cmd.Parameters.Add("@AUTHOR", MySqlDbType.VarChar);
                cmd.Parameters.Add("@TITLE", MySqlDbType.VarChar);
                cmd.Parameters.Add("@CONTENT", MySqlDbType.VarChar);
                cmd.Parameters.Add("@TYPE", MySqlDbType.Int32);
                cmd.Parameters.Add("@IMAGES", MySqlDbType.MediumText);
                cmd.Parameters.Add("@DATE", MySqlDbType.DateTime);
                cmd.Parameters["@AUTHOR"].Value = post.Author;
                cmd.Parameters["@TITLE"].Value = post.Title;
                cmd.Parameters["@CONTENT"].Value = post.Content;
                cmd.Parameters["@TYPE"].Value = post.Type;
                cmd.Parameters["@IMAGES"].Value = string.Join("|", post.Images);
                cmd.Parameters["@DATE"].Value = post.Date;
                cmd.ExecuteNonQuery();
                return cmd.LastInsertedId;
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
