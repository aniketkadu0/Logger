const router = require("express").Router();
const controller = require("./controller");

router.post("/addlog", controller.addlog);

module.exports = router;
