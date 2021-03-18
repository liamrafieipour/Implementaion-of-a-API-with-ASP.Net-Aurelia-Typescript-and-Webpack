using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.February2021.Data
{
    public class CountryRepository
    {
        private const string _BaseAddress = "https://restcountries.eu/rest/v2/";

        public async Task<string> GetCountryName(string country)
        {
            if (string.IsNullOrWhiteSpace(country))
                throw new Exception("Country name cannot be empty");

            var url = $"name/{country}?fullText=true";
            var result = await Get(url);

            return result[0]["name"].Value<string>();
        }

        private static async Task<JArray> Get(string url)
        {
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls;

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(_BaseAddress);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var response = await client.GetAsync(url);
                if (response.StatusCode == HttpStatusCode.NotFound)
                    throw new Exception("Invalid country name");

                var content = await response.Content.ReadAsStringAsync();
                return JArray.Parse(content);
            }
        }
    }
}
