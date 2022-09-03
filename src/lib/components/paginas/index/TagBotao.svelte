<script lang="ts">
  import { ingredientes, adicionarIngrediente, removerIngrediente } from '$lib/store/ingredientes';

  import { Tag } from '$components/compartilhados/index';

  export let ingrediente: string;

  $: selecionado = $ingredientes.includes(ingrediente);

  const handleSelect = () => {
    if (!selecionado) {
      adicionarIngrediente(ingrediente);
    } else {
      removerIngrediente(ingrediente);
    }
  };
</script>

<button on:click={handleSelect}>
  <Tag ativa={selecionado}>{ingrediente}</Tag>
</button>

<style>
  button {
    cursor: pointer;
  }
</style>
