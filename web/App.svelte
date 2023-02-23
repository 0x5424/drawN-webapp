<script lang="ts">
  // FIXME: (probably esbuild...) imported writable stores are undefined
  import * as svelteTransition from 'svelte/transition'
  import * as themeUtils from './stores/theme'
  const { activeTheme, getAutoSetting } = themeUtils
  const { fade } = svelteTransition

  import { onMount } from 'svelte'

  let hideToggleButton = false

  const toggleTheme = () => {
    $activeTheme = $activeTheme == 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', $activeTheme)
    hideToggleButton = true
  }

  onMount(() => {
    // Ensure the right attribute is available for CSS selectors
    const attributeName = $activeTheme == 'auto' ? getAutoSetting() : $activeTheme
    document.documentElement.setAttribute('data-theme', attributeName)
  })
</script>

<main>
  {#if !hideToggleButton}
    <button class="bl" on:click={toggleTheme}><h1 out:fade>draw-n</h1></button>
  {:else}
    <button class="bl" on:click={toggleTheme}><h6>hi there!</h6></button>
  {/if}
</main>

<style>
  :global(body) {
    max-width: 100vw;
    max-height: 100vh;
    height: 100%;
    width: 100%;
    padding: 0.75rem;
    box-shadow: inset 0 0 1.5px rgb(var(--accent));
  }

  main {
    height: 100%;
    box-shadow: inset 0 0 1.5px rgb(var(--accent));
    display: grid;

    /* Default view: 2 vertical panes; L=controls, R=canvas  */
    grid-template-columns: 0.5fr 3fr;
    grid-template-rows: 1fr;
    column-gap: 2.25em;
    row-gap: normal;
  }

  /* Use until 640px */
  @media (max-width: 640px) {
    main {
      /* Mobile view: 2 horizontal rows; U=controls, D=canvas */
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr;
      column-gap: normal;
      row-gap: 2.25em;
    }
  }

  .bl {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    padding: 0;
  }

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
