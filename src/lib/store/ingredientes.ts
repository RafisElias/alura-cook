import { writable } from 'svelte/store';

export const ingredientes = writable<string[]>([]);

/**
 * @function adicionarIngrediente
 * @param {string} ingrediente - Novo ingrediente.
 * @return {void} Não tem retorno
 * @description Adiciona um ingrediente a lista.
 */
export const adicionarIngrediente = (ingrediente: string): void =>
  ingredientes.update((cur) => [...cur, ingrediente]);

/**
 * @function removerIngrediente
 * @param {string} ingrediente - Ingrediente a ser removido.
 * @return {void} Não tem retorno
 * @description Remove um ingrediente da lista.
 */
export const removerIngrediente = (ingrediente: string): void =>
  ingredientes.update((cur) => cur.filter((item) => item !== ingrediente));
