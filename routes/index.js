const express = require("express");
const router = express.Router();

const controller = require("../controller");

router.get("/opportunities", controller.listAllByCollection);
router.get("/opportunities/:key", controller.getOneByCollecionAndKey);
router.post("/opportunities/:key", controller.saveCollectionByKey);
router.delete("/opportunities/:key", controller.deleteByCollectinoAndKey);

router.get("/users", controller.listAllByCollection);
router.get("/users/:key", controller.getOneByCollecionAndKey);
router.post("/users/:key", controller.saveCollectionByKey);
router.delete("/users/:key", controller.deleteByCollectinoAndKey);

module.exports = router;
