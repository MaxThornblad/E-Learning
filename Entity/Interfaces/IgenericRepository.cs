using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entity.Interfaces
{
    public interface IgenericRepository<T>
    {
        Task<IReadOnlyList<T>> ListAllAsync();

        Task<T> GetByIdAsync(dynamic id);
    }
}