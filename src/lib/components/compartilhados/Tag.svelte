<script lang="ts">
  export let ativa = false;
  export let desabilitado = false;
</script>

<span class="tag {$$restProps.class || ''}" data-ativa={ativa} data-desabilitado={desabilitado}>
  <slot />
</span>

<style>
  .tag {
    --font-size: 1rem;
    --padding: 0.75rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    font-size: var(--font-size);
    text-align: center;
    color: var(--cor-texto-principal);
    background-color: var(--cinza);
    position: relative;
    transition: background-color 200ms ease-in-out, color 150ms ease-in-out;
  }

  .tag:hover,
  .tag:focus,
  .tag:focus-visible,
  .tag[data-ativa='true'] {
    color: var(--branco);
    background-color: var(--laranja);
  }

  .tag[data-desabilitado='true'] {
    background-color: var(--cinza);
    color: var(--cor-texto-principal);
    cursor: default;
  }

  .tag--lg {
    --font-size: 1.125rem;
    --padding: 1rem 1.5rem;
  }
</style>
