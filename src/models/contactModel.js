const mongodb = require("../database");
const { ObjectId } = require("mongodb")

const loadAll = async () => {
    try {
        const result = await mongodb.getDatabase().collection("contacts").find();
        return result.toArray();
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
};

const loadById = async (id) => {
    try {
        const result = await mongodb.getDatabase().collection("contacts").findOne({ _id: new ObjectId(`${id}`) });
        return result
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
};

module.exports = { loadAll, loadById };