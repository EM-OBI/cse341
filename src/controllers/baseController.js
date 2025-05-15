const contactModel = require("../models/contactModel");

async function loadAll(req, res, next) {
  console.log("Loading all contacts");

  const contacts = await contactModel.loadAll();

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(contacts);
}

async function loadById(req, res, next) {
  console.log("Loading by ID");

  const id = req.params.id;
  const contact = await contactModel.loadById(id);

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(contact);
}

async function addContact(req, res, next) {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const response = await contactModel.addContact(contact);

  if (response.acknowledged > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Error while creating contact");
  }
}

async function updateContact(req, res, next) {
  const id = req.params.id;

  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const response = await contactModel.updateContact(id, contact);

  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Error while updating contact");
  }
}

async function deleteContact(req, res, next) {
  const id = req.params.id;

  const response = await contactModel.deleteContact(id);

  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Error while deleting contact");
  }
}

module.exports = { loadAll, loadById, addContact, updateContact, deleteContact };
