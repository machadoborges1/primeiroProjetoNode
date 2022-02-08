import express from 'express';
import routes from './routes';

const app = express();

app.use(routes); // use se torana um midware  // adicionando todas essas rotas dentro do meu app

// app.get('/', (request, response) => response.json({message: 'Hello'}));

app.listen(3330, () => {
  console.log('started port 3330');
});
