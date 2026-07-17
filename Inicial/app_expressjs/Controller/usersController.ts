import type { Request, Response, NextFunction } from "express";
import type { Iclients } from "../Model/clients.js";
import usersmodel from "../Model/usersmodel.js";
import type { Iuser } from "../Model/users.js";
// LISTAR TODOS
function login(req: Request, res: Response, next: NextFunction) {
    res.render ('login')
}

async function checkLogin(req: Request, res: Response, next: NextFunction) {
    const login = req.body as Iuser;

    try{
        let logado = await usersmodel.findOne({
        where: {
            user: login.user,
            password: login.password
        }
    });
        if( logado!= null){
       res.redirect("/clients")
    }
    else {
        //console.log ("senha invalida")
        throw new Error("Senha Invalida!!!")
    }
}    catch(erro){
    console.log(erro);
    res.status(500).end();
    }

}


export default { login, checkLogin}