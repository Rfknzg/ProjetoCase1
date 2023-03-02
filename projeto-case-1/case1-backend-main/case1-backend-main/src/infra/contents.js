/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import db from "./db.js";

const CONTENTS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "kins" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" text,
    "midia" text,
    "titulo" text,
    "identificacao" INTEGER

  );`;

function createTableContents() {
    db.run(CONTENTS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de conteúdos");
    });
}

db.serialize( ()=> {
    createTableContents();
});