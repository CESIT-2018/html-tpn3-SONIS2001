//api-rest antes se usaba SOAP. 
const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const listaproductos = [{ id: 1, nombre: "Stella Artois" },
{ id: 2, nombre: "Corona" },
{ id: 3, nombre: "Miller" }]

const getproducto = (id) => {
    return listaproductos.find((p) => p.id == id);
    //for (let i in listaproductos){ if(listaproductos[i].id==id){ return listaproductos[i];}}

}
const agregarProducto =(prod)=>{

    if (typeof prod == 'object' && prod.nombre){
        prod.id= listaproductos.length + 1;
        listaproductos.push(prod);
        return prod;
    }
    return null;
}
app.get('/productos/:id', (req, res) => {

    console.info("Hola"); //TODO: Sera Borrado cuando implementemos middlewares

    const producto = agregarProducto(req.body);

   // const producto = getproducto(req.params.id);

    if (producto) {
        res.status(200).send(producto);
    } else {
        res.status(404).send({ mensaje: `no encuentro producto por id= ${req.params.id}` });
    }

    // res.send(listaproductos);

});
app.get('/productos/:id', (req, res) => {

    res.send({ "mensaje": "GET" });
});
app.post('/productos', (req, res) => {
    console.info("Hola"); //TODO: Sera Borrado cuando implementemos middlewares
    const producto = agregarProducto(req.body);
    if (producto){
        res.status(201).send(producto);
    }else{
        res.status(400).send({mensaje:`el producto no pudo ser agregado`});
    }

  //  res.send({ "mensaje": "POST" });
});
app.put('/productos/:id', (req, res) => {
    res.send({ "mensaje": "PUT" });

});
app.delete('/productos:id', (req, res) => {

    res.send({ "mensaje": "DELETE" });
});



app.listen(PORT, () => { console.info("Abriendo en port " + PORT) });