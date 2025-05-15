const mongodb = require("../database");
const { ObjectId } = require("mongodb");

async function loadAll() {
  try {
    const result = await mongodb.getDatabase().collection("contacts").find();
    return result.toArray();
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

async function loadById(id) {
  try {
    const result = await mongodb
      .getDatabase()
      .collection("contacts")
      .findOne({ _id: new ObjectId(`${id}`) });
    return result;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

async function addContact(contact) {
  try {
    const result = await mongodb.getDatabase().collection("contacts").insertOne(contact);
    return result;
  } catch (error) {
    console.error(`Error creating contact ${error}`);
  }
}

async function updateContact(id, contact) {
  try {
    const result = await mongodb
      .getDatabase()
      .collection("contacts")
      .replaceOne({ _id: new ObjectId(`${id}`) }, contact);
    return result;
  } catch (error) {
    console.error(`Error updating contact ${error}`);
  }
}

async function deleteContact(id) {
  try {
    const result = await mongodb
      .getDatabase()
      .collection("contacts")
      .deleteOne({ _id: new ObjectId(`${id}`) });
    return result;
  } catch (error) {
    console.error(`Error removing contact ${error}`);
  }
}

module.exports = {
  loadAll,
  loadById,
  addContact,
  updateContact,
  deleteContact
};
