using BackEnd_FoxConn.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd_FoxConn.DTOs
{
    public class RulesDTO
    {
      
        public int RuleId { get; set; }

        
        public string Name { get; set; }

        public string Active { get; set; }

        public DateTime Created_at { get; set; }

        public DateTime Modified_at { get; set; }

        public ICollection<Employee> Employee { get; set; }

    }
}
