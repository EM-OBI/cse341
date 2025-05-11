import contactModel from "../models/contactModel.js";

export async function loadAll(req, res, next) {
    console.log("Loading all contacts");

    const contacts = await contactModel.loadAll();

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(contacts);
}


export async function loadById(req, res, next) {
    console.log("Loading by ID");

    const id = req.params.id;
    const contact = await contactModel.loadById(id);

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(contact);
}