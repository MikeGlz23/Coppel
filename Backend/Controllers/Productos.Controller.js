import { modeloProductos } from "../Models/Productos.model.js"

modeloProductos.create({
    name: "Crema",

    price:30,

   
    category :"lacteos"
})

export const TestProducto = ()=>{
    console.log("funciona el controlador de productos")
}