import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lâmpada', image: 'lampada.svg' },
    { title: 'Pilhas e Baterias', image: 'baterias.svg' },
    { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
    { title: 'Residuos Eletrônicos', image: 'eletrîonicos.svg' },
    { title: 'Residuos Orgânicos', image: 'organicos.svg' },
    { title: 'Óleo de Cozinha', image: 'lampada.svg' },
  ]);
}