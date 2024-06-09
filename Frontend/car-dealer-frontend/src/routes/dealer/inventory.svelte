<script lang="ts">
    import { onMount } from 'svelte';
    import { getDealerInventory, addCar } from '$lib/utils/api';
    import type { Car } from '$lib/utils/api';
  
    let inventory: Car[] = [];
    let name: string = '';
    let model: string = '';
    let type: string = '';
    let carInfo: string = '';
  
    onMount(async () => {
      inventory = await getDealerInventory();
    });
  
    const handleAddCar = async () => {
      await addCar({ name, model, type, car_info: carInfo });
      inventory = await getDealerInventory();
    };
  </script>
  
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-4">Dealership Inventory</h1>
    <div class="mb-4">
      <input class="mb-2 p-2 border rounded w-full" type="text" placeholder="Car Name" bind:value={name} />
      <input class="mb-2 p-2 border rounded w-full" type="text" placeholder="Car Model" bind:value={model} />
      <input class="mb-2 p-2 border rounded w-full" type="text" placeholder="Car Type" bind:value={type} />
      <textarea class="mb-2 p-2 border rounded w-full" placeholder="Car Info" bind:value={carInfo}></textarea>
      <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={handleAddCar}>Add Car</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each inventory as car}
        <div class="bg-white p-4 rounded shadow">
          <h2 class="text-xl font-bold">{car.name} {car.model}</h2>
          <p class="text-gray-700">{car.type}</p>
          <p class="text-gray-700">{car.car_info}</p>
        </div>
      {/each}
    </div>
  </div>
  