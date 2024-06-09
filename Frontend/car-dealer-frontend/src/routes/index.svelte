<script lang="ts">
    import { onMount } from 'svelte';
    import { getCars } from '$lib/utils/api';
    import type { Car } from '$lib/utils/api';
    let cars: Car[] = [];
    let filter: string = '';
  
    onMount(async () => {
      cars = await getCars();
    });
  </script>
  
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-4">Available Cars</h1>
    <input class="mb-4 p-2 border rounded w-full" type="text" placeholder="Filter by name" bind:value={filter} />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each cars.filter(car => car.name.includes(filter)) as car}
        <div class="bg-white p-4 rounded shadow">
          <h2 class="text-xl font-bold">{car.name} {car.model}</h2>
          <p class="text-gray-700">{car.type}</p>
          <p class="text-gray-700">{car.car_info}</p>
          <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Buy</button>
        </div>
      {/each}
    </div>
  </div>
  