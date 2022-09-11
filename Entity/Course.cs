using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entity
{
    public class Course
    {
        public Guid Id {get; set;}

        public string Title { get; set; }

        public float Price { get; set; }

        public string Instructor { get; set; }

        public decimal Rating { get; set; }

    }
}