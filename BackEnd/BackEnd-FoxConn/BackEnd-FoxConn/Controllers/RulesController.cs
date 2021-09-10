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
    public class RulesController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public RulesController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _uow = unitOfWork;
            _mapper = mapper;
        }

        // GET: api/<RulesController>
        [HttpGet]
        public ActionResult<IEnumerable<RulesDTO>> Get()
        {
            var rules = _uow.RulesBll.Get().ToList();
            var rulesDto = _mapper.Map<List<RulesDTO>>(rules);
            return rulesDto;
        }

        // GET api/<RulesController>/5
        [HttpGet("{id}", Name = "ObterRules")]
        public ActionResult<RulesDTO> Get(int id)
        {
            var rules = _uow.RulesBll.GetById(x => x.RuleId == id);
            if (rules == null)
            {
                return NotFound();
            }
            var rulesDto = _mapper.Map<RulesDTO>(rules);
            return rulesDto;

        }

        // POST api/<RulesController>
        [HttpPost]
        public ActionResult Post([FromBody] RulesDTO rulesDto)
        {
            var rules = _mapper.Map<Rules>(rulesDto);

            _uow.RulesBll.Add(rules);
            _uow.Commit();

            var rulesDTO = _mapper.Map<RulesDTO>(rules);

            return new CreatedAtRouteResult("ObterRules",
                new { id = rules.RuleId}, rulesDTO);
        }

        // PUT api/<RulesController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] RulesDTO rulesDto)
        {
            if (id != rulesDto.RuleId)
            {
                return BadRequest();
            }
            var rules = _mapper.Map<Rules>(rulesDto);
            _uow.RulesBll.Update(rules);
            _uow.Commit();
            return Ok();

        }

        // DELETE api/<RulesController>/5
        [HttpDelete("{id}")]
        public ActionResult<RulesDTO> Delete(int id)
        {
            var rules = _uow.RulesBll.GetById(p => p.RuleId == id);

            if (rules == null)
            {
                return NotFound();
            }
            _uow.RulesBll.Delete(rules);
            _uow.Commit();

            var rulesDto = _mapper.Map<RulesDTO>(rules);

            return rulesDto;
        }
    }
}