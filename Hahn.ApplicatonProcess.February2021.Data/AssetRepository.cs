using Hahn.ApplicatonProcess.February2021.Domain.Interfaces;
using Hahn.ApplicatonProcess.February2021.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.February2021.Data
{
    public class AssetRepository : IAsset
    {
        private static DbContextOptions<MyDbContext> _Options = new DbContextOptionsBuilder<MyDbContext>()
            .UseInMemoryDatabase(databaseName: "Test")
            .Options;

        private MyDbContext _db = new MyDbContext(_Options);

        public void DeleteAsset(int Id)
        {
            _db.Remove(Id);
        }

        public Asset GetAssetByID(int Id)
        {
            return _db.Assets.FirstOrDefault(x => x.Id == Id);
        }

        public IEnumerable<Asset> GetAssets()
        {
            return _db.Assets;
        }

        public void InsertAsset(Asset Asset)
        {
            _db.Assets.Add(Asset);
        }

        public void Save()
        {
            _db.SaveChanges();
        }

        public void UpdateAsset(int Id, Asset model)
        {
            var asset = _db.Assets.FirstOrDefault(x => x.Id == Id);
            if (asset == null)
                throw new Exception("Not found");

            asset.Broken = model.Broken;
            asset.CountryOfDepartment = model.CountryOfDepartment;
            asset.Department = model.Department;
            asset.EMailAdressOfDepartment = model.EMailAdressOfDepartment;
            asset.Name = model.Name;
            asset.PurchaseDate = model.PurchaseDate;
        }
    }
}
