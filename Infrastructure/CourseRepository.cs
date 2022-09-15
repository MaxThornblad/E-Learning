using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Entity.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure
{
    public class CourseRepository : ICourseRepository
    {
        private readonly StoreContext _context;
        public CourseRepository(StoreContext context)
        {
            this._context = context;

        }

        public async Task<Course> GetCourseByIdAsync(Guid id)
        {
            return await _context.Courses
            .Include(c => c.Category)
            .Include(c => c.Learnings)
            .Include(c => c.Requirements)
            .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IReadOnlyList<Course>> GetCoursesAsync()
        {
            return await _context.Courses
            .Include(c => c.Category)
            .ToListAsync();
        }
    }
}