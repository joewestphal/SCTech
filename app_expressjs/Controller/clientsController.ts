import type { Request, Response, NextFunction } from "express";
import type { Iclients } from "../Model/clients.js";
import clientModel from "../Model/clientModel.js";

// LISTAR TODOS
async function index(req: Request, res: Response, next: NextFunction) {
    try {
        const clients = await clientModel.findAll();
        res.json(clients);
    } catch (error) {
        next(error);
    }
}

// MOSTRAR UM
async function show(
    req: Request<{ id: string }>, 
    res: Response, 
    next: NextFunction
) {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ message: "ID inválido" });
        }

        const client = await clientModel.findByPk(id);

        if (!client) {
            return res.status(404).json({ message: "Cliente não encontrado" });
        }

        res.json(client);
    } catch (error) {
        next(error);
    }
}

// FORMULÁRIO
function create(req: Request, res: Response, next: NextFunction) {
    res.render("create");
}

// SALVAR
async function store(req: Request, res: Response, next: NextFunction) {
    try {
        const clients = req.body as Iclients;
        console.log(clients)

        await clientModel.create({ ...clients });

        res.redirect('/');
    } catch (error) {
        next(error);
    }
}

async function edit(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
) {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ message: "ID inválido" });
        }

        const client = await clientModel.findByPk(id);

        if (!client) {
            return res.status(404).json({ message: "Cliente não encontrado" });
        }

        res.render("edit", { client });
    } catch (error) {
        next(error);
    }
}

async function update( req:Request, res: Response, next: NextFunction){
    await clientModel.update(
        req.body as Iclients, {
            where: {
                id: req.params.id
            }
        }
    )

    res.redirect('/')
}

async function del(req: Request, res: Response, next: NextFunction) {
    try {
        await clientModel.destroy({
            where: {
                id: req.params.id
            }
        });

        res.redirect('/');
    } catch (error) {
        next(error);
    }
}

export default { index, create, store, show , edit, update, del };