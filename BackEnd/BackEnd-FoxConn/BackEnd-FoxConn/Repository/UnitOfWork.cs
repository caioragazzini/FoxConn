using BackEnd_FoxConn.Context;
using BackEnd_FoxConn.Repository.EmployeeRepository;
using BackEnd_FoxConn.Repository.RulesRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd_FoxConn.Repository
{
    public class UnitOfWork: IUnitOfWork
    {
        private RulesBll  _rulesBll;
        private EmployeeBll _employeeBll;
        public AppDbContext _appDbContext;

        public UnitOfWork(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public IEmployeeBll EmployeeBll { get { return _employeeBll = _employeeBll ?? new EmployeeBll(_appDbContext); } }

        public IRulesBll RulesBll { get { return _rulesBll = _rulesBll ?? new RulesBll(_appDbContext); } }

        public void Commit()
        {
            _appDbContext.SaveChanges();
        }

        public void Dispose()
        {

            _appDbContext.Dispose();
        }
    }
}
