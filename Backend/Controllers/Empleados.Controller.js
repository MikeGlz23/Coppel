import { modeloEmpleado } from "../Models/Empleados.model.js";

modeloEmpleado.create({

    name:"Salma",

    apepat:"Esparza",

    edad: 30,

    correo:"Salma.esp@coppel.com"
})

export const TestEmpleados = ()=>{

    console.log("funciona la conexion del controlador empleados")
}