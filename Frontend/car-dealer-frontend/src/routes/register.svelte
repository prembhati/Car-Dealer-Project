<script>
    import { goto } from '$app/navigation';
    import { register } from '../utils/api';
    let username = '';
    let password = '';
    let userType = 'user';
  
    const handleRegister = async () => {
      try {
        await register(username, password, userType);
        goto('/login');
      } catch (error) {
        alert('Registration failed');
      }
    };
  </script>
  
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-6 bg-white rounded shadow-md">
      <h1 class="mb-4 text-2xl font-bold">Register</h1>
      <input class="mb-2 p-2 border rounded w-full" type="text" placeholder="Username" bind:value={username} />
      <input class="mb-4 p-2 border rounded w-full" type="password" placeholder="Password" bind:value={password} />
      <select class="mb-4 p-2 border rounded w-full" bind:value={userType}>
        <option value="user">User</option>
        <option value="dealer">Dealer</option>
      </select>
      <button class="px-4 py-2 text-white bg-blue-500 rounded" on:click={handleRegister}>Register</button>
    </div>
  </div>
  