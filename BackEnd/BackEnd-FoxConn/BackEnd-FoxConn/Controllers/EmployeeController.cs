using AutoMapper;
using BackEnd_FoxConn.DTOs;
using BackEnd_FoxConn.Models;
using BackEnd_FoxConn.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackEnd_FoxConn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public EmployeeController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _uow = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet("salarioDepartamento")]
        public ActionResult<IEnumerable<EmployeeRulesDTO>> GetC()
        {
            var employee = _uow.EmployeeBll.GetSalaryDepartament().ToList();           

            return employee;
        }

        [HttpGet("funcionarioDepartamento")]
        public ActionResult<IEnumerable<EmployeeDTO>> GetFuncDpto( int id)
        {
            var employees = _uow.EmployeeBll.GetFuncionarioDepartamento().ToList();
            var employeesDto = _mapper.Map<List<EmployeeDTO>>(employees);

            return employeesDto;
        }

        // GET: api/<EmployeeController>
        [HttpGet]
        public ActionResult<IEnumerable<EmployeeDTO>> Get()
        {
            var employee = _uow.EmployeeBll.Get().ToList();
            var employeeDto = _mapper.Map<List<EmployeeDTO>>(employee);
            return employeeDto;
        }

        // GET api/<EmployeeController>/5
        [HttpGet("{id}", Name = "ObterEmployee")]
        public ActionResult<EmployeeDTO> Get(int id)
        {
            var employee = _uow.EmployeeBll.GetById(x => x.EmployeeId == id);
            if (employee == null)
            {
                return NotFound();
            }
            var employeeDto = _mapper.Map<EmployeeDTO>(employee);
            return employeeDto;

        }

        // POST api/<EmployeeController>
        [HttpPost]
        public ActionResult Post([FromBody] EmployeeDTO employeeDto)
        {
            var employee = _mapper.Map<Employees>(employeeDto);

            _uow.EmployeeBll.Add(employee);
            _uow.Commit();

            var employeeDTO = _mapper.Map<EmployeeDTO>(employee);

            return new CreatedAtRouteResult("ObterEmployee",
                new { id = employee.EmployeeId }, employeeDTO);
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] EmployeeDTO employeeDto)
        {
            employeeDto.employeeId = id;
            if (id != employeeDto.employeeId)
            {
                return BadRequest();
            }

            var employee = _mapper.Map<Employees>(employeeDto);

            _uow.EmployeeBll.Update(employee);
            _uow.Commit();
            return Ok();

        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public ActionResult<EmployeeDTO> Delete(int id)
        {
            var employee = _uow.EmployeeBll.GetById(p => p.EmployeeId == id);

            if (employee == null)
            {
                return NotFound();
            }
            _uow.EmployeeBll.Delete(employee);
            _uow.Commit();

            var employeeDto = _mapper.Map<EmployeeDTO>(employee);

            return employeeDto;
        }
    }
}