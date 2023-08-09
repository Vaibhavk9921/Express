const express=require('express')
const app=express()
const students=[
    {id:100,name:"abc1",phone:98644},
    {id:101,name:"abc2",phone:98644},
    {id:102,name:"abc3",phone:98644},
]
app.get('/students',(request,response)=>{
    response.json(students)
})
app.get('/student/:id',(request,response)=>{
const sid=Number(request.params.id)
const st=students.find((n)=>sid===n.id)
response.json(st)
})
app.listen(3010,()=>{
    console.log("Server Started At 3010")
})
