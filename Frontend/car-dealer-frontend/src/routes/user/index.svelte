<script>
    import { onMount } from 'svelte';
    import { isAuthenticated } from '$lib/utils/auth';
    
  
    let vehicles = [];
  
    onMount(async () => {
      if (!$isAuthenticated) {
        window.location.href = '/login';
      }
  
      // Fetch user's vehicles
      const response = await fetch('/api/user/vehicles');
      vehicles = await response.json();
    });
  </script>
  
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">My Vehicles</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each vehicles as vehicle}
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <div class="p-4">
            <h2 class="text-xl font-bold">{vehicle.name}</h2>
            <p>Model: {vehicle.model}</p>
            <p>Type: {vehicle.type}</p>
            <p>{vehicle.vehicle_info}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
  