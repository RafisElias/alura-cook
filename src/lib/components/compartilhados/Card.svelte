<div class="card">
  <slot />
</div>

<style>
  .card {
    width: var(--card-width, 300px);
    min-height: 100%;
    background: var(--branco);
    box-shadow: 4px 4px 10px 1px hsla(0, 0%, 0%, 0.1);
  }
</style>
