<script lang="ts">
  import { onMount } from 'svelte'
  import { getAutoSetting } from './stores/theme'
  import { activeTheme } from './stores/theme'
  import ToggleThemeButton from './ToggleThemeButton.svelte'

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
    // Ensure theme now matches document value
    $activeTheme = attributeName
  })
</script>

<main>
  <ToggleThemeButton hideToggleButton={hideToggleButton} toggleTheme={toggleTheme} />
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
</style>
