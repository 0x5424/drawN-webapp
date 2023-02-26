<script lang="ts">
  import { fade } from 'svelte/transition'

  export let hideToggleButton = false
  export let toggleTheme: () => void
</script>

{#if !hideToggleButton}
  <button class="bl" on:click={toggleTheme}><h1 out:fade>draw-n</h1></button>
{:else}
  <button class="bl" on:click={toggleTheme}><h6>hi there!</h6></button>
{/if}

<style>
  h1, h6 { font-weight: 100; }

  h1 {
    font-weight: 100;
    text-transform: uppercase;
    line-height: 1;
    font-size: 2rem;
  }

  button {
    background-color: rgba(var(--bg),0);
    outline: none;
    border: none;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    padding: 0;
  }

  h6 {
    font-family: var(--font-mono);
    opacity: 0;
  }

  h6:hover {
    transition: opacity 0.3s;
    opacity: 1;
  }
</style>
