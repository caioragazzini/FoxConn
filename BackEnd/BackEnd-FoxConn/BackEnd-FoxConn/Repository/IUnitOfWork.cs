
using BackEnd_FoxConn.Repository.EmployeeRepository;
using BackEnd_FoxConn.Repository.RulesRepository;

namespace BackEnd_FoxConn.Repository{
    public interface IUnitOfWork
    {
        IEmployeeBll EmployeeBll { get; }
        IRulesBll RulesBll { get; }
        void Commit();
        void Dispose();
    }
}
