using AsianStoreWebAPI.EF.Models;
using AsianStoreWebAPI.Services;
using Google.Cloud.Firestore.V1;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace AsianStoreWebAPI.Repositories
{
    public class RoleRepository : IRoleRepository
    {
        private readonly FirebaseAuthService _firebaseAuthService;
        private readonly FirestoreService _firestoreService;

        public RoleRepository(FirebaseAuthService fas, FirestoreService fs)
        { _firebaseAuthService = fas; _firestoreService = fs; }



        public async Task<Role> GetRoleByNameAsync(string roleName)
        {
            var roles = await _firestoreService.GetRecordsByFieldAsync<Role>("roles", "Name", roleName);
            return roles.FirstOrDefault()!;
        }

        public async Task<Role> GetRoleByIdAsync(string roleId)
        {
            var role = await _firestoreService.GetRecordAsync<Role>("roles", roleId);
            return role;
        }

        public async Task AddRoleAsync(Role role)
        {
            await _firestoreService.AddRecordAsync("roles", role);
        }

        public async Task AddUserRoleAsync(UserRole userRole)
        {
            await _firestoreService.AddRecordAsync("users_roles", userRole);
        }
    }
}
