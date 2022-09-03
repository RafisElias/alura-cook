<script lang="ts">
  import { Card } from '$components/compartilhados';
  import type IReceitas from '$lib/json/receitas.json';

  export let receitas: typeof IReceitas = [];
</script>

<ul class="receitas">
  {#each receitas as receita (receita.nome)}
    <li class="receita">
      <Card --card-width="280px">
        <img src="/imagens/receitas/{receita.imagem}" alt="Alho assado" class="receita__img" />
        <div class="receita__info">
          <h3 class="receita__nome">{receita.nome}</h3>
        </div>
      </Card>
    </li>
  {/each}
</ul>

<style>
  .receitas {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    text-align: start;
    margin-bottom: 3.75rem;
  }

  .receita__img {
    width: 100%;
    height: 150px;
  }

  .receita__nome {
    font-size: 1.125rem;
  }

  .receita__info {
    padding: 0.75rem 0.875rem;
  }
</style>
