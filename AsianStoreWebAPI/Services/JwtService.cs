using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace AsianStoreWebAPI.Services
{
    public class JwtService
    {
        private readonly string _secretKey = "NbQxrhwr4inZBegM1cjiFO8DUarXnKwC"; // lenght 32
        private readonly string _issuer = "https://localhost:44365"; // https://asian-webapi.somee.com
        private readonly string _audience = "localhost:3000"; // https://asian-shop-dev.vercel.app
        private readonly IConfiguration _config;

        public bool IsJwtValid(JwtSecurityToken decodedToken)
        {
            return decodedToken.ValidTo > DateTime.UtcNow;
        }


        public JwtSecurityToken DecodeJwt(string token)
        {
            var handler = new JwtSecurityTokenHandler();
            var jsonToken = handler.ReadToken(token) as JwtSecurityToken;
            return jsonToken!;
        }


        public Claim GetJwtClaim(JwtSecurityToken decodedToken, string claim)
        {
            return decodedToken.Claims.FirstOrDefault(x => x.Type == claim)!;
        }


        public Claim GetJwtClaim(string token, string claim)
        {
            var jsonToken = DecodeJwt(token);
            return GetJwtClaim(jsonToken, claim);
        }

        public string GenerateJwtToken(Dictionary<string, object> claimsDict)
        {
            var encryptedClaims = claimsDict
                .Select(kvp => new Claim(kvp.Key, EncryptString(kvp.Value.ToString(), _secretKey)))
                .ToList();

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_secretKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _issuer,
                audience: _audience,
                claims: encryptedClaims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private string EncryptString(string text, string keyString)
        {
            var key = Encoding.UTF8.GetBytes(keyString);
            using (var aesAlg = Aes.Create())
            {
                aesAlg.Key = key;
                aesAlg.GenerateIV();
                using (var encryptor = aesAlg.CreateEncryptor(aesAlg.Key, aesAlg.IV))
                {
                    using (var msEncrypt = new MemoryStream())
                    {
                        msEncrypt.Write(aesAlg.IV, 0, aesAlg.IV.Length);
                        using (var csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
                        {
                            using (var swEncrypt = new StreamWriter(csEncrypt))
                            {
                                swEncrypt.Write(text);
                            }
                        }
                        return Convert.ToBase64String(msEncrypt.ToArray());
                    }
                }
            }
        }

        public Dictionary<string, object> DecryptJwtToken(string token, IEnumerable<string> claimTypes)
        {
            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadToken(token) as JwtSecurityToken;

            var decryptedClaims = new Dictionary<string, object>();

            foreach (var claimType in claimTypes)
            {
                var encryptedValue = jwtToken.Claims.FirstOrDefault(claim => claim.Type == claimType)?.Value;
                if (encryptedValue != null)
                {
                    var decryptedValue = DecryptString(encryptedValue, _secretKey);
                    decryptedClaims.Add(claimType, decryptedValue);
                }
            }

            return decryptedClaims;
        }

        private string DecryptString(string cipherText, string keyString)
        {
            var fullCipher = Convert.FromBase64String(cipherText);
            var iv = new byte[16];
            var cipher = new byte[fullCipher.Length - iv.Length];

            Array.Copy(fullCipher, 0, iv, 0, iv.Length);
            Array.Copy(fullCipher, iv.Length, cipher, 0, cipher.Length);

            var key = Encoding.UTF8.GetBytes(keyString);

            using (var aesAlg = Aes.Create())
            {
                aesAlg.Key = key;
                aesAlg.IV = iv;
                var decryptor = aesAlg.CreateDecryptor(aesAlg.Key, aesAlg.IV);

                using (var msDecrypt = new MemoryStream(cipher))
                {
                    using (var csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
                    {
                        using (var srDecrypt = new StreamReader(csDecrypt))
                        {
                            return srDecrypt.ReadToEnd();
                        }
                    }
                }
            }
        }

    }
}
