// app.js
import Fastify from 'fastify';
const app = Fastify();

app.get('/health', async () => ({ status: 'ok' }));
app.get('/hello', async () => ({ hello: 'world' }));

const port = process.env.PORT || 8080;
app.listen({ port, host: '0.0.0.0' }).then(() => {
  console.log('server listening on', port);
});
