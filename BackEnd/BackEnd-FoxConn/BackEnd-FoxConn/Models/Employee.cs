using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd_FoxConn.Models
{
    [Table("Employee")]
    public class Employee
    {
        [Key]
        public int employeeId { get; set; }
        [MaxLength(104)]
        public string Name { get; set; }
        [Required]
        [DataType(DataType.Currency)]
        [Column(TypeName = "decimal(8, 2)")]
        public decimal Salary { get; set; }
      
        public string Gender { get; set; }
       
        public string Active { get; set; }
       
        public DateTime Created_at { get; set; }
       
        public DateTime Modified_at { get; set; }
      
        public int Id_rule { get; set; }
       
        public Rules Rules { get; set; }

    }
}
