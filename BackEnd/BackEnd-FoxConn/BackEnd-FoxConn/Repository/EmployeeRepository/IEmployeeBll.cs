﻿using BackEnd_FoxConn.DTOs;
using BackEnd_FoxConn.Models;
using System.Collections.Generic;

namespace BackEnd_FoxConn.Repository.EmployeeRepository
{
    public  interface IEmployeeBll : IRepository<Employee>
    {
        List<EmployeeRulesDTO> GetSalaryDepartament();

    }
}
