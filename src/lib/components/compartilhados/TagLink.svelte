<script lang="ts">
  import Tag from './Tag.svelte';

  export let href: string;
  export let desabilitado = false;
  export let ativa = false;
</script>

<a {href} class="link">
  <Tag {ativa} {desabilitado} class="tag--lg"><slot /></Tag>
</a>
