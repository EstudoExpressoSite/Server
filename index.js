import express from 'express'
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Hello, world from the server!')
})
app.listen(process.env.PORT || 3000)