using BackEnd_FoxConn.Context;
using BackEnd_FoxConn.Models;


namespace BackEnd_FoxConn.Repository.EmployeeRepository
{
    public class EmployeeBll : Repository<Employee>, IEmployeeBll
    {
        public EmployeeBll(AppDbContext context) : base(context)
        {

        }
    }
}
