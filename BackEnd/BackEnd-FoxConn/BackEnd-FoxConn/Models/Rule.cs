using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd_FoxConn.Models
{
    [Table("Rule")]
    public class Rule
    {
        public Rule()
        {
            Employee = new Collection<Employee>();
        }

        [Column("ruleId")]
        public int RuleId { get; set; }

        [Column("name")]
        [MaxLength(54)]
        public string Name { get; set; }
        [Column("active")]
        public string Active { get; set; }
        [Column("created_at")]
        public DateTime Created_at { get; set; }
        [Column("modified_at")]
        public DateTime Modified_at { get; set; }
        [Column("employee")]
        public ICollection<Employee> Employee { get; set; }

    }
}
