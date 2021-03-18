using FluentValidation;
using Hahn.ApplicatonProcess.February2021.Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.February2021.Domain.Models
{
    public class Asset
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public Department Department { get; set; }
        public string CountryOfDepartment { get; set; }
        public string EMailAdressOfDepartment { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public bool Broken { get; set; }

    }

    public class AssetValidator : AbstractValidator<Asset>
    {
        public AssetValidator()
        {
            RuleFor(x => x.Id).NotNull();
            RuleFor(x => x.Name).NotNull().MinimumLength(5);
            RuleFor(x => x.EMailAdressOfDepartment).EmailAddress();
            RuleFor(x => x.CountryOfDepartment).NotNull(); 
            RuleFor(x => x.PurchaseDate).Must(x => x.HasValue && x.Value > DateTime.Now.AddYears(-1));
        }
    }
}
