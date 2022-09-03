<script lang="ts">
  import { beforeNavigate } from '$app/navigation';
  import TagLink from '$components/compartilhados/TagLink.svelte';
  import Titulo from '$components/compartilhados/Titulo.svelte';
  import Categorias from '$components/paginas/index/Categorias.svelte';
  import { ingredientes } from '$store/ingredientes';

  $: listaVazia = $ingredientes.length < 1;

  beforeNavigate((navigation) => {
    if (listaVazia && navigation.to?.pathname === '/receitas') {
      navigation.cancel();
    }
  });
</script>

<svelte:head>
  <title>Alura Cook</title>
</svelte:head>

<main>
  <Titulo componente="h1">Ingredientes</Titulo>
  <div class="info">
    <p>Selecione abaixo os ingredientes que você deseja usar nesta refeição:</p>
    <p>*Atenção: consideramos que você tenha em casa sal, pimenta e água.</p>
  </div>

  <Categorias />

  <div class="buscar-receitas">
    <TagLink href="/receitas" ativa desabilitado={listaVazia}>Buscar Receitas!</TagLink>
  </div>
</main>

<style>
  .info {
    margin-bottom: 3.375rem;
  }

  .info > p {
    line-height: 2rem;
  }
  .buscar-receitas {
    width: fit-content;
    margin-inline: auto;
  }
</style>
