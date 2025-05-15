const router = require("express").Router();
const baseController = require("../controllers/baseController");

router.get("/", baseController.loadAll);

router.get("/:id", baseController.loadById);

router.post("/", baseController.addContact);

router.put("/:id", baseController.updateContact);

router.delete("/:id", baseController.deleteContact);

module.exports = router;
