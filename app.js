// app.js
import Fastify from 'fastify';
const app = Fastify();

app.get('/health', async (request, reply) => {
  reply.code(200).send({ status: 'ok' });
});
app.get('/hello', async () => ({ hello: 'world' }));

const port = 8081;
app.listen({ port, host: '0.0.0.0' }).then(() => {
  console.log('server listening on', port);
});
