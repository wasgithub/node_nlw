import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('clicado na rota');
  response
    .status(200)
    .json({ name: 'washington', idade: 32, sexo: 'masculino' });
});

app.listen(3333);
