using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd_FoxConn.Models
{
    [Table("Employee")]
    public class Employees
    {
        [Key]
        public int EmployeeId { get; set; }

        [MaxLength(104)]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.Currency)]
        [Column(TypeName = "decimal(8, 2)")]
        public decimal Salary { get; set; }
      
        public string Gender { get; set; }
       
        public string Active { get; set; }
        [Required]
        public DateTime Created_at { get; set; }
        [Required]
        public DateTime Modified_at { get; set; }

        public Rules Rules { get; set; }
        public int RuleId { get; set; }
       
       

    }
}
