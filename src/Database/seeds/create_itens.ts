import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("itens").insert([
    { titulo: "Lampadas", image: "lampadas.svg" },
    { titulo: "Pilhas e Baterias", image: "baterias.svg" },
    { titulo: "Papeis e Papelão", image: "papeis-papelao.svg" },
    { titulo: "Residos Eletronicos", image: "eletronicos.svg" },
    { titulo: "Residos Organicos", image: "organicos.svg" },
    { titulo: "Oleo de Cozinha", image: "oleo.svg" },
  ]);
}
