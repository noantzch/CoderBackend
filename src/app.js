import express from "express";
import fs from "fs";

const app = express();
let products = {};
//Leo el archivo de productos
if(fs.existsSync('./products.json')){
    products = JSON.parse(fs.readFileSync('./products.json'))
}

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));


app.get('/products', (req, res) => {
    let limit = req.query.limit;
    if(limit <1 || limit > 10) return res.send({products});
    let productLimited = products.slice(0, limit);
    res.send({products:productLimited});
})

app.get('/products/:pid', (req, res) =>{
    let productId = req.params.pid;
    let product = products.find(p => p.id === parseInt(productId));
    if(!product) return res.send({error: "Producto no encontrado con id: " + productId});
    res.send({product});

})

// Servidor
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Servidor ejecutandose en el puerto: ', PORT)
})
server.on('error', error => console.log('Error en el servidor: ', error))