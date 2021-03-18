using Hahn.ApplicatonProcess.February2021.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.February2021.Domain.Interfaces
{
    public interface IAsset
    {
        IEnumerable<Asset> GetAssets();
        Asset GetAssetByID(int Id);
        void InsertAsset(Asset Asset);
        void DeleteAsset(int Id);
        void UpdateAsset(int Id, Asset Asset);
        void Save();
    }
}
