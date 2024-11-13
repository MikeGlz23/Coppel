import { modeloCliente } from "../Models/Clientes.model.js";

modeloCliente.create({
    name: "Miguel de Jesus",

    apepat:"Gonzalez",

    Edad: 28,

    Correo:"utm21040106@utma.edu.mx"
})

export const TestCliente = ()=>{
    console.log("funciona el controlador de clientes")
}