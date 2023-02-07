import fs from "fs";
class ProductManager{
    constructor (path){
        this.products = [];
        this.path = path;
    }
    
    addProduct(title, description, price, thumbnail, code, stock){
        if(fs.existsSync(this.path)){
            this.products = JSON.parse(fs.readFileSync(this.path))
        }
        const productoRepetido = this.products.some(product => product.code === code);
        let idProduct = this.products.length + 1;
        if(productoRepetido === false && title && description && price && thumbnail && stock){
            this.products.push({title : title, description: description, price: price, thumbnail: thumbnail, code: code, stock: stock, id : idProduct});
            fs.writeFileSync(this.path, JSON.stringify(this.products))
        }else console.log("ERROR AL AGREGAR PRODUCTO: PRODUCTO YA AGREGADO o FALTAN CARACTERÍSTICAS")
        
    }
    getProducts(){
        if(fs.existsSync(this.path)){
            this.products = JSON.parse(fs.readFileSync(this.path))
            console.log(this.products)
        }else console.log(this.products)
    }
    getProductById(id){
        if(fs.existsSync(this.path)){
            this.products = JSON.parse(fs.readFileSync(this.path))
            const productoBuscado = this.products.find(product => product.id === id)
            if(productoBuscado){
                console.log("El producto encontrado es:")
                console.log(productoBuscado)
            }else console.log("Producto no encontrado")
        }else console.log("No hay registro de productos")
    }
    updateProduct(id, title, description, price, thumbnail, code, stock){
        if(fs.existsSync(this.path)){
            this.products = JSON.parse(fs.readFileSync(this.path))
            const indiceProductoAActualizar = this.products.findIndex(product => product.id === id);
            if(indiceProductoAActualizar >= 0){
                this.products[indiceProductoAActualizar]={id: id, title : title, description: description, price: price, thumbnail: thumbnail, code: code, stock: stock};
                fs.writeFileSync(this.path, JSON.stringify(this.products));
                console.log("Producto actualizado")
            }else console.log("Producto a actualizar no encontrado")
        }else console.log("No hay registro de productos para actualizar")
    }
    deleteProduct(id){
        if(fs.existsSync(this.path)){
            this.products = JSON.parse(fs.readFileSync(this.path))
            const indiceProductoAEliminar= this.products.findIndex(product => product.id === id)
            if(indiceProductoAEliminar >= 0){
                this.products.splice(indiceProductoAEliminar,indiceProductoAEliminar+1)
                fs.writeFileSync(this.path, JSON.stringify(this.products))
                console.log("Producto Eliminado")
            }else{
                console.log("Producto a Eliminar No Encontrado")
                }
        }else console.log("No hay registro de productos para eliminar")
    }
}
let products = new ProductManager("./products.json");
products.getProducts();
products.addProduct("Product1", "Este es el producto prueba 1", 200, "Sin imagen", "abc1", 25);
products.addProduct("Product2", "Este es el producto prueba 2", 200, "Sin imagen", "abc2", 25);
products.addProduct("Product3", "Este es el producto prueba 3", 200, "Sin imagen", "abc3", 25);
products.addProduct("Product4", "Este es el producto prueba 4", 200, "Sin imagen", "abc4", 25);
products.addProduct("Product5", "Este es el producto prueba 5", 200, "Sin imagen", "abc5", 25);
products.addProduct("Product6", "Este es el producto prueba 6", 200, "Sin imagen", "abc6", 25);
products.addProduct("Product7", "Este es el producto prueba 7", 200, "Sin imagen", "abc7", 25);
products.addProduct("Product8", "Este es el producto prueba 8", 200, "Sin imagen", "abc8", 25);
products.addProduct("Product9", "Este es el producto prueba 9", 200, "Sin imagen", "abc9", 25);
products.addProduct("Product10", "Este es el producto prueba 10", 200, "Sin imagen", "abc10", 25);
products.getProducts();

