import knex from "knex";
import patch from "path";

const conection = knex({
  client: "sqlite3",
  connection: {
    filename: patch.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true,
});
export default conection;
