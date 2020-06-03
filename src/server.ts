import express from "express";
import routes from "./routes";
import patch from "path";

const app = express();

app.use(routes);

app.use("/uploads", express.static(patch.resolve(__dirname, "..", "uploads")));

app.listen(3333);

/**app.use(express.json());
//Aray de Usuario
const users = [
  "Vitaliy",
  "Samia",
  "Betto",
  "Daniel",
  "maisena",
  "milena",
  "pedro",
];

//Metodo GET para listar todos Usuarios
app.get("/users", (request, response) => {
  response.json(users);
});


//Metodo GET com Parametro (REQUEST PARAM)
app.get("/users/:id", (request, response) => {
  const id = Number(request.params.id);
  const user = users[id];
  return response.json(user);
});

//Metodo GET com Parametro (QUERY PARAM)
app.get("/users", (request, response) => {
  const search = String(request.query.search);
  const filterUsers = search
    ? users.filter((user) => user.includes(search))
    : users;
  return response.json(filterUsers);
});

// Metodo POST para adicionar novo usuario (REQUEST BODY)
app.post("/users", (request, response) => {
  const data = request.body;
  const user = {
    nome: data.nome,
    email: data.email,
  };
  return response.json(user);
});
 */
