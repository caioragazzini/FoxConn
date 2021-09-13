using BackEnd_FoxConn.Context;
using BackEnd_FoxConn.DTOs;
using BackEnd_FoxConn.Models;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd_FoxConn.Repository.EmployeeRepository
{
    public class EmployeeBll : Repository<Employees>, IEmployeeBll
    {
        public EmployeeBll(AppDbContext context) : base(context)
        {

        }

        public List<EmployeeRulesDTO> GetSalaryDepartament()
        {
            var sql = from e in _context.Employees                     
                      join r in _context.Ruless on e.RuleId equals r.RuleId
                      group e by new {r.NameRule} into g
                      select new
                      {
                          Salary = g.Sum(x=>x.Salary),
                          Nome = g.Key.NameRule,
                      };

            List<EmployeeRulesDTO> sqlLista = new List<EmployeeRulesDTO>();
           
            foreach (var lista in sql)
            {
                EmployeeRulesDTO employeeRulesDTO = new EmployeeRulesDTO();
                employeeRulesDTO.arg = lista.Nome;
                employeeRulesDTO.val = lista.Salary.ToString();
                sqlLista.Add(employeeRulesDTO);
            }

            return sqlLista;
        }

        public IEnumerable<Employees> GetFuncionarioDepartamento()
        {
            var employees = Get().Select(x => new Employees
            {
                Rules = x.Rules,
                Active = x.Active,
                Created_at = x.Created_at,
                EmployeeId = x.EmployeeId,
                Gender = x.Gender,
                RuleId = x.RuleId,
                Modified_at = x.Modified_at,
                Name = x.Name,

                Salary = x.Salary

            });

            return employees;
        }



    }
}
