<script>
  import { onMount } from 'svelte';
  import { isAuthenticated, checkAuth } from '$lib/utils/auth';

  onMount(() => {
    checkAuth();
  });
</script>

{#if $isAuthenticated}
  <p>User is authenticated</p>
{:else}
  <p>User is not authenticated</p>
{/if}

