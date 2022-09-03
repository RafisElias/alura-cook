<script lang="ts">
  import Card from '$components/compartilhados/Card.svelte';

  import categorias from '$lib/json/categorias.json';
  import TagBotao from './TagBotao.svelte';
</script>

<ul class="categorias">
  {#each categorias as categoria (categoria.nome)}
    <li>
      <Card --card-width="280px">
        <div class="categoria">
          <img
            src="/icones/categorias_ingredientes/{categoria.imagem}"
            class="categoria__imagem"
            alt=""
          />
          <h2 class="categoria__nome">
            {categoria.nome}
          </h2>

          <ul class="ingredientes">
            {#each categoria.ingredientes as ingrediente (ingrediente)}
              <li>
                <TagBotao {ingrediente} />
              </li>
            {/each}
          </ul>
        </div>
      </Card>
    </li>
  {/each}
</ul>

<style>
  .categorias {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 4.6875rem;
  }

  .categoria {
    padding: 0.75rem 0.5rem;
  }

  .categoria__imagem {
    margin-bottom: 0.5rem;
  }

  .categoria__nome {
    color: var(--verde);
    font-size: 1.125rem;
    margin-bottom: 0.875rem;
  }

  .ingredientes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem 1rem;
  }
</style>
