<script lang="ts">
  import { fade } from 'svelte/transition';
  import { removerIngrediente } from '$store/ingredientes';
  import Tag from '$components/compartilhados/Tag.svelte';
  export let ingrediente: string;
  export let ativa: boolean;

  const handleRemoverIngrediente = () => {
    removerIngrediente(ingrediente);
  };
</script>

<div class="meu-ingrediente" transition:fade={{ duration: 200 }}>
  <Tag {ativa}>
    {ingrediente}
    <button class="meu-ingrediente__close" type="button" on:click={handleRemoverIngrediente} />
  </Tag>

  <span class="meu-ingrediente__remover" on:click={handleRemoverIngrediente}> Remover </span>
</div>

<style>
  .meu-ingrediente {
    position: relative;
  }
  .meu-ingrediente__close {
    background-image: url('/icones/close.svg');
    position: absolute;
    top: 4px;
    right: 4px;
    height: 10px;
    width: 10px;
    cursor: pointer;
  }

  .meu-ingrediente__remover {
    line-height: 24px;
    font-size: 0.875rem;
    color: var(--laranja);
    cursor: pointer;
  }
</style>
