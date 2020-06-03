import express, { response, json } from 'express';

const app = express();

app.use(express.json());

const users = ['Washington', 'Camila', 'welder', 'will', 'suelen', 'terezinha'];

app.get('/users', (request, response) => {
  const { search } = request.query;
  console.log(search);

  const usuariosFiltrados = search
    ? users.filter((user) => user.includes(String(search)))
    : users;

  return response.status(200).json(usuariosFiltrados);
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);
  return response.status(200).json(users[id]);
});

app.post('/users', (request, response) => {
  const { nome, empresa } = request.body;
  const user = { nome, empresa };
  return response.status(200).json(user);
});

app.listen(3333);
