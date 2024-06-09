<script>
    import { onMount } from 'svelte';
    import { isAuthenticated } from '$lib/utils/auth';
  
    let cars = [];
  
    onMount(async () => {
      if (!$isAuthenticated) {
        window.location.href = '/login';
      }
  
      // Fetch dealer's cars
      const response = await fetch('/api/dealer/cars');
      cars = await response.json();
    });
  </script>
  
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Dealer Inventory</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each cars as car}
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <div class="p-4">
            <h2 class="text-xl font-bold">{car.name}</h2>
            <p>Model: {car.model}</p>
            <p>Type: {car.type}</p>
            <p>{car.car_info}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
  