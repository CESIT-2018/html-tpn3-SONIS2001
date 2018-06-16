const express = require ('express');
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");
app.get("/productos",(req,res,next)=>{

    const prodsArray =[{ nombre : "Manzanas", cant : 150},
                    {nombre : "Ananaes", cant : 5}]
    res.render (`productos`,{prods: prodsArray});


})
app.get("/",(req,res)=>{

    
    res.render(`index`,{nombre :"Sonia", materias : ["Algebra","Programacion 3"]});

})
app.use(express.static("public"));

app.listen (PORT,()=>console.info("INICIANDO EN "+PORT+"YES"));