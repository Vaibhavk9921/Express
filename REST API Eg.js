const express = require('express')
const app = express()
app.get('/', (request, response) => {
    response.send("Hello World")
})
app.get('/hello', (request, response) => {
    response.send("Hello From Server")
})
app.post('/hello', (request, response) => {
    response.send("Post Method Called")
})
app.put('/hello', (request, response) => {
    response.send("Put Method Called")
})
app.patch('/hello', (request, response) => {
    response.send("Patch Method Called")
})
app.delete('/hello', (request, response) => {
    response.send("Delete Method Called")
})
app.listen(3010, () => {
    console.log("Server Started at 3010")
})
