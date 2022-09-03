<script lang="ts">
  export let componente: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
</script>

<svelte:element this={componente} class="titulo titulo--{componente} ">
  <slot />
</svelte:element>

<style>
  .titulo {
    color: var(--verde);
    text-transform: uppercase;
  }

  .titulo--h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
    margin-bottom: 1rem;
  }
</style>
