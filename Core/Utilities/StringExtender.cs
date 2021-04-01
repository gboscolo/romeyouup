using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace romeyouup.Core.Utilities
{
	public static class StringExtender
	{
		/// <summary>
		/// Perform salt to encrypted
		/// </summary>
		private static readonly byte[] SALT = new byte[] { 0x26, 0xdc, 0xff, 0x00, 0xad, 0xed, 0x7a, 0xee, 0xc5, 0xfe, 0x07, 0xaf, 0x4d, 0x08, 0x22, 0x3c };

		/// <summary>
		/// It allows you to encrypt a string.
		/// </summary>
		/// <param name="value">Element to be encrypted</param>
		/// <param name="password">Password to hide element</param>
		/// <returns>Encrypted value</returns>
		public static string EncryptRijndael(this string value, string password)
		{
			string result = string.Empty;
			byte[] plain = Encoding.Unicode.GetBytes(value);

			using (MemoryStream ms = new MemoryStream())
			{
				Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(password, SALT);

				Rijndael rijndael = Rijndael.Create();
				rijndael.Key = pdb.GetBytes(32);
				rijndael.IV = pdb.GetBytes(16);

				CryptoStream cryptoStream = new CryptoStream(ms, rijndael.CreateEncryptor(), CryptoStreamMode.Write);
				cryptoStream.Write(plain, 0, plain.Length);
				cryptoStream.Close();

				result = Convert.ToBase64String(ms.ToArray());
			}

			return result;
		}

		/// <summary>
		/// It allows you to decrypt a string.
		/// </summary>
		/// <param name="value">Element to be decrypted.</param>
		/// <param name="password">Password to show element</param>
		/// <returns>Decrypted value</returns>
		public static string DecryptRijndael(this string value, string password)
		{
			string result = string.Empty;
			byte[] cipher = Convert.FromBase64String(value);

			using (MemoryStream ms = new MemoryStream(cipher))
			{
				Rijndael rijndael = Rijndael.Create();

				Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(password, SALT);
				rijndael.Key = pdb.GetBytes(32);
				rijndael.IV = pdb.GetBytes(16);

				CryptoStream cryptoStream = new CryptoStream(ms, rijndael.CreateDecryptor(), CryptoStreamMode.Read);

				byte[] plain = new byte[cipher.Length];

				int decryptedCount = cryptoStream.Read(plain, 0, plain.Length);

				cryptoStream.Close();

				result = Encoding.Unicode.GetString(plain, 0, decryptedCount);
			}

			return result;
		}
	}
}
