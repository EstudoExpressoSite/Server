import express from 'express';

const app = express();
const port = 3000;

app.listen(
    process.env.PORT || port,
    () => console.log(`starting server on port ${port}`)
);

app.get('/', (req, res) => {
    res.status(200).send({
        message: "Hello from the Server!"
    })
});