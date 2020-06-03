import patch from "path";
module.exports = {
  client: "sqlite3",
  connection: {
    filename: patch.resolve(__dirname, "src", "Database", "database.sqlite"),
  },

  migrations: {
    directory: patch.resolve(__dirname, "src", "Database", "migrations"),
  },
  seeds: {
    directory: patch.resolve(__dirname, "src", "Database", "seeds"),
  },
  useNullAsDefault: true,
};
