using BackEnd_FoxConn.Context;
using BackEnd_FoxConn.DTOs;
using BackEnd_FoxConn.Models;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd_FoxConn.Repository.EmployeeRepository
{
    public class EmployeeBll : Repository<Employee>, IEmployeeBll
    {
        public EmployeeBll(AppDbContext context) : base(context)
        {

        }

        public List<EmployeeRulesDTO> GetSalaryDepartament()
        {
            var sql = from e in _context.Employees                     
                      join r in _context.Rules on e.Id_rule equals r.RuleId
                      group e by new {r.Name} into g
                      select new
                      {
                          Salary = g.Sum(x=>x.Salary),
                          Nome = g.Key.Name,
                      };

            List<EmployeeRulesDTO> sqlLista = new List<EmployeeRulesDTO>();
           
            foreach (var lista in sql)
            {
                EmployeeRulesDTO employeeRulesDTO = new EmployeeRulesDTO();
                employeeRulesDTO.Nome = lista.Nome;
                employeeRulesDTO.Salary = lista.Salary.ToString();
                sqlLista.Add(employeeRulesDTO);
            }

            return sqlLista;
        }

      

    }
}
