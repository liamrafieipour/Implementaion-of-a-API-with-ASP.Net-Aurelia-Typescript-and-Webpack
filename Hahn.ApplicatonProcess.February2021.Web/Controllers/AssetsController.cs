using Hahn.ApplicatonProcess.February2021.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hahn.ApplicatonProcess.February2021.Domain;
using Hahn.ApplicatonProcess.February2021.Data;
using FluentValidation.Results;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Hahn.ApplicatonProcess.February2021.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssetsController : ControllerBase
    {
        private AssetRepository _Repository = new AssetRepository();
        private CountryRepository _CountryRepository = new CountryRepository();

        [HttpGet]
        public IEnumerable<Asset> Get()
        {
            return _Repository.GetAssets();
        }

        // GET api/<AssetsController>/5
        [HttpGet("{id}")]
        public Asset Get(int id)
        {
            return _Repository.GetAssetByID(id);
        }

        // POST api/<AssetsController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Asset model)
        {
            var validator = new AssetValidator();
            var validatrionResult = validator.Validate(model);

            if (validatrionResult.IsValid)
            {
                try
                {
                    model.CountryOfDepartment = await _CountryRepository.GetCountryName(model.CountryOfDepartment);
                }
                catch(Exception ex)
                {
                    var errors = new List<ValidationFailure>()
                    {
                        new ValidationFailure("CountryOfDepartment", ex.Message)
                    };
                    return new BadRequestObjectResult(errors);
                }

                _Repository.InsertAsset(model);
                _Repository.Save();
                return Ok();
            }
            else
            {
                return new BadRequestObjectResult(validatrionResult.Errors);
            }

        }

        // PUT api/<AssetsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Asset model)
        {
            _Repository.UpdateAsset(id, model);
            _Repository.Save();
        }

        // DELETE api/<AssetsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _Repository.DeleteAsset(id);
            _Repository.Save();
        }
    }
}
