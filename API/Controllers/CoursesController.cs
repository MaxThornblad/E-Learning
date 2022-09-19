using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dto;
using AutoMapper;
using Entity;
using Entity.Interfaces;
using Entity.Specifications;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CoursesController : BaseController
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<Course> _repository;
        public CoursesController(IGenericRepository<Course> repository, IMapper mapper)
        {
            this._repository = repository;
            this._mapper = mapper;
        }

        [HttpGet]

        public async Task<ActionResult<List<CourseDto>>> GetCourses([FromQuery]CourseParams courseParams)
        {
            var spec = new CoursesWithCategoriesSpecification(courseParams);
            var courses = await _repository.ListWithSpec(spec);
            return Ok(_mapper.Map<IReadOnlyList<Course>, IReadOnlyList<CourseDto>>(courses));
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<CourseDto>> GetCourse(Guid id)
        {
            var spec = new CoursesWithCategoriesSpecification(id);
            var course = await _repository.GetEntityWithSpec(spec);

            return _mapper.Map<Course, CourseDto>(course);
        }
        
    }
}