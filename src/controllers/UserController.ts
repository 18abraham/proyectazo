import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";

export const registerUsers = async (req:Request,res:Response):Promise <any>=>{
    try {
        //administradores no puede crear clientes 
        if (req.user?.rol === "client"){
            return res.status(400).json({msg:"los adminitradores no pueden crear clientes"})
        }
        //primero se valida que los datos que necesitamos existen 
        const name = req.body.lastName
        const email = req.body.email
        const lastName = req.body.lastName
        const password = req.body.password
        const rol = req.body.rol

        //administradores no puede crear clientes 
        if (req.user?.rol === "administrator" && rol === "cliente"){
            return res.status(400).json({msg:"los adminitradores no pueden crear clientes"})
        }
        if(!name || !email || !lastName || !password || !rol){
            return res.status(400).json({
                msg:"faltan datos para crear un usuario"
            })
        }
        //validar que el usuario sea administrador si el usuario a crear es administrador
        if(rol === "administrator" && req.user?.rol !="administrator"){
            return res.status(400).json({
                msg:"no puedes crear un nuevo administrador si no eres uno"
            }) 
        }

        await UserModel.create({
            name,
            lastName,
            email,
            password,
            rol
        })
        return res.status(200).json({msg:"usuario registrado con exito"})

    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"hubo un error al crear el usuario"})
    }

}