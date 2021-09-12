using AutoMapper;
using BackEnd_FoxConn.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd_FoxConn.DTOs.Mappings
{
    public class MappingProfile : Profile
    {

        public MappingProfile()
        {
            CreateMap<Employees, EmployeeDTO>().ReverseMap();
            CreateMap<Rules, RulesDTO>().ReverseMap();

        }
    }
}
