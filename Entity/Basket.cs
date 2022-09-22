using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entity
{
    public class Basket
    {
        public int Id { get; set; }
        public string ClientId { get; set; }
        public List<BasketItem> Items { get; set; } = new List<BasketItem>();

        public void AddCourseItem(Course course)
        {
            if(Items.All(item => item.CourseId != course.Id))
            {
                Items.Add(new BasketItem{Course = course});
            }
        }
        public void RemoveCourseItem(Guid courseId)
        {
            var course = Items.FirstOrDefault(item => item.CourseId == courseId);
            Items.Remove(course);
        }
    }
}