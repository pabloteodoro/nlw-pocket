import fastify from "fastify";

const app = fastify()

app.listen({
    port: 3334,
}).then(() => {
    console.log('Server is running on port 3334')
})