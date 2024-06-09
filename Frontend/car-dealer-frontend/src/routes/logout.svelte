<script>
    import { logout } from '$lib/utils/auth';
  
    function handleLogout() {
      logout();
      // Optionally, redirect the user to the login page
      window.location.href = '/login';
    }
  </script>
  
  <button on:click={handleLogout}>Logout</button>
  