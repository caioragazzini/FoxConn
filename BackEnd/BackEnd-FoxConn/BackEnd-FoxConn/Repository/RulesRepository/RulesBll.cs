using BackEnd_FoxConn.Context;
using BackEnd_FoxConn.Models;

namespace BackEnd_FoxConn.Repository.RulesRepository
{
    public class RulesBll :Repository<Rules>, IRulesBll
    {
        public RulesBll(AppDbContext context) : base(context)
        {

        }
                
    }
}
