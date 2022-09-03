<script lang="ts">
  import { ingredientes } from '$lib/store/ingredientes';

  import MeuIngrediente from './MeuIngrediente.svelte';
</script>

<section class="lista">
  <h2 class="lista__titulo">Sua Lista:</h2>
  <ul class="lista__ingredientes">
    {#each $ingredientes as ingrediente (ingrediente)}
      <l1 class="lista__ingredientes__item">
        <MeuIngrediente ativa {ingrediente} />
      </l1>
    {/each}
  </ul>
</section>

<style>
  .lista {
    padding-bottom: 1.625rem;
  }

  .lista__titulo {
    font-size: 1.5rem;
    color: var(--laranja);
    margin-bottom: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }

  .lista__ingredientes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem 1.875rem;
  }
</style>
