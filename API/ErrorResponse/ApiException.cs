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