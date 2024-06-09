<script lang="ts">
  import { onMount } from 'svelte';
  import { getUserVehicles } from '$lib/utils/api';
  import type { Car } from '$lib/utils/api';
  let vehicles: Car[] = [];

  onMount(async () => {
    vehicles = await getUserVehicles();
  });
</script>

<div class="p-6 bg-gray-100 min-h-screen">
  <h1 class="text-3xl font-bold mb-4">My Vehicles</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each vehicles as vehicle}
      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-xl font-bold">{vehicle.name} {vehicle.model}</h2>
        <p class="text-gray-700">{vehicle.type}</p>
        <p class="text-gray-700">{vehicle.vehicle_info}</p>
      </div>
    {/each}
  </div>
</div>
