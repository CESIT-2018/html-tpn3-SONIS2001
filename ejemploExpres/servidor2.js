const express = require ('express');
const app = express();
app.get("/usuarios",(req,res)=>{

let html = "<h1> Buen Dia!!</h1>";
if (req.query && req.query.nombre){

    html +=`Usted es ${req.query.nombre}`;
    
}
res.send (html);

});


app.listen (3000,()=>console.info("Iniciando en  puerto 3000"));