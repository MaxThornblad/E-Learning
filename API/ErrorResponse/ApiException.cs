using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.ErrorResponse
{
    public class ApiException : ApiResponse
    {
        public ApiException(int statusCode, string erroressage = null, string details = null) : base(statusCode, erroressage)
        {
            Details = details;
        }

        public string Details { get; set; }
    }
}