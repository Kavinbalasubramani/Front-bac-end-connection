import express from "express";
import cors from "cors";
import data from "./data.js";

const app=express();        
app.use(cors());

// app.get('/getData',(req,res)=>{
//     res.send("jsdgkfgdjg");
// });

app.get("/api/data",(req,res)=>[
    res.send(data)
])


 const port=process.env.PORT || 3000 

app.listen(port,()=>
{
    console.log(`localhost:${port}`)
})