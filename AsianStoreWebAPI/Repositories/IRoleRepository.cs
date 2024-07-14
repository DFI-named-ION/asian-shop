using AsianStoreWebAPI.EF.Models;

namespace AsianStoreWebAPI.Repositories
{
    public interface IRoleRepository
    {
        Task<Role> GetRoleByNameAsync(string roleName);
        Task AddRoleAsync(Role role);
        Task AddUserRoleAsync(UserRole userRole);
        Task<Role> GetRoleByIdAsync(string roleId);
    }
}
