<script>
    import { isAuthenticated, logout } from '$lib/utils/auth';
  
    function handleLogout() {
      logout();
      window.location.href = '/login';
    }
  </script>
  
  <nav class="bg-gray-800 p-4 text-white">
    <div class="container mx-auto flex justify-between">
      <div class="flex items-center space-x-4">
        <a href="/" class="text-lg font-bold">Car Dealer</a>
        {#if $isAuthenticated}
          <a href="/dealer" class="hover:underline">Dealer</a>
          <a href="/user" class="hover:underline">User</a>
        {/if}
      </div>
      <div>
        {#if $isAuthenticated}
          <button on:click={handleLogout} class="bg-red-500 hover:bg-red-700 px-4 py-2 rounded">
            Logout
          </button>
        {:else}
          <a href="/login" class="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">Login</a>
        {/if}
      </div>
    </div>
  </nav>
  