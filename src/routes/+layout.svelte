<script lang="ts">
  import '../app.css';
  import Cabecalho from '$components/paginas/layout/Cabecalho.svelte';
  import ListaIngredientes from '$components/paginas/layout/ListaIngredientes.svelte';
  import Rodape from '$components/paginas/layout/Rodape.svelte';

  import { ingredientes } from '$lib/store/ingredientes';
</script>

<svelte:head>
  <title>Alura Cook</title>
</svelte:head>

<div class="container-principal">
  <Cabecalho />
  <div class="estilo-principal">
    {#if $ingredientes.length > 0}
      <div class="minha-lista-container">
        <ListaIngredientes />
        <hr class="divisoria" />
      </div>
    {/if}
    <slot />
  </div>
  <Rodape />
</div>

<style>
  .container-principal {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .estilo-principal {
    flex: 1;
    text-align: center;
    padding: 0 5vw 3.375rem;
  }

  .minha-lista-container {
    margin-bottom: 2rem;
  }

  .divisoria {
    width: 40vw;
    height: 2px;
    background-color: var(--verde);
    margin-inline: auto;
  }
</style>
