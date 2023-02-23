<script lang="ts">
</script>

<main>
  <h1>draw-n</h1>
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

  h1 {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    font-weight: 100;
    text-transform: uppercase;
    line-height: 1;
    font-size: 2rem;
    font-weight: 100;
  }
</style>
