using System.Text.Json.Serialization;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace romeyouup.Entities
{
    public class User //: IdentityUser
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }

        [JsonIgnore]
        public string Password { get; set; }

        public UserType UserType { get; set; }

        [JsonIgnore]
        public List<RefreshToken> RefreshTokens { get; set; }
    }
}