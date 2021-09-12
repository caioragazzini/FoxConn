using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd_FoxConn.Models
{
    [Table("Rules")]
    public class Rules
    {
        public Rules()
        {
            Employees = new Collection<Employees>();
        }

        [Key]
        public int RuleId { get; set; }
       
        [MaxLength(54)]
        public string NameRule { get; set; }
       
        public string Active { get; set; }
        [Required]
        public DateTime Created_at { get; set; }
        [Required]
        public DateTime Modified_at { get; set; }
        
        public ICollection<Employees> Employees { get; set; }

    }
}
