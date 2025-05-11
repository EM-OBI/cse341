const router = require("express").Router();
const baseController = require("../controllers/baseController")


router.get("/", baseController.loadAll);

router.get("/:id", baseController.loadById)

module.exports = router;