const express = require("express");
const feedController = require("../controllers/feedControllers");

const router = express.Router();


router.get("/", feedController.feed_index);
router.post("/", feedController.feed_create_post);
router.get("/", feedController.feed_create_get);
router.get("/:id", feedController.feed_details);
router.delete("/:id", feedController.feed_delete);
router.get("/edit/:id", feedController.feed_edit_get)
router.post("/edit/:id", feedController.feed_edit_post)


module.exports = router;