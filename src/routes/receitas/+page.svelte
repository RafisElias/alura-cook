<script>
  import Titulo from '$components/compartilhados/Titulo.svelte';
  import Receitas from '$components/paginas/receitas/Receitas.svelte';

  import { ingredientes } from '$store/ingredientes';
  import receitas from '$lib/json/receitas.json';
  import TagLink from '$components/compartilhados/TagLink.svelte';

  $: receitasFiltradas = receitas.filter((receita) =>
    receita.ingredientes.every((ingrediente) => $ingredientes.includes(ingrediente))
  );
</script>

<svelte:head>
  <title>Alura Cook | Receitas</title>
</svelte:head>

<main>
  <Titulo componente="h1">Receitas</Titulo>

  <section class="info">
    <p class="verde">Resultados encontrados: {receitasFiltradas.length}</p>
    {#if receitasFiltradas.length > 0}
      <p>Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!</p>
    {:else}
      <p>Não encontramos nenhuma receita com os seus ingredientes :(</p>
    {/if}
  </section>

  {#if receitasFiltradas.length > 0}
    <Receitas receitas={receitasFiltradas} />
  {/if}
  <div class="editar-lista">
    <TagLink href="/" ativa>Editar Lista!</TagLink>
  </div>
</main>

<style>
  .info {
    margin-bottom: 3.375rem;
  }

  .info > p {
    line-height: 2rem;
  }

  .info > p.verde {
    color: var(--verde);
  }

  .editar-lista {
    width: fit-content;
    margin-inline: auto;
  }
</style>
