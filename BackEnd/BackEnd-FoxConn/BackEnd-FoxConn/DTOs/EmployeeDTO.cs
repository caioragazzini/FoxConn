using BackEnd_FoxConn.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd_FoxConn.DTOs
{
    public class EmployeeDTO
    {
      
        public int employeeId { get; set; }
       
        public string Name { get; set; }
       
        public decimal Salary { get; set; }

        public string Gender { get; set; }

        public string Active { get; set; }

        public DateTime Created_at { get; set; }

        public DateTime Modified_at { get; set; }

        public int Id_rule { get; set; }

        public Rules Rules { get; set; }



    }
}
