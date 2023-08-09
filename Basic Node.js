const http=require('http')
const app=http.createServer((request,response)=>{
    response.end("Hello World Demo Nodejs")
})
app.listen(3009)
console.log("Server Is Running On Port 3009")
