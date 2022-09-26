using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.ErrorResponse
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string erroressage = null)
        {
            StatusCode = statusCode;
            Erroressage = erroressage ?? DefaultErrorMessage(statusCode);
        }

        public int StatusCode { get; set; }
        public string Erroressage { get; set; }

        private string DefaultErrorMessage(int statusCode){
            return statusCode switch
            {
                400 => "You have made a bad request",
                401 => "You are not authorized",
                404 => "Resource not found",
                500 => "Internal server error",
                _ => "An error has occured"
            };
        }
    }
}