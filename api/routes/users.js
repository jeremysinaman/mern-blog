const router = require("express").Router(); 
const usersController = require("../controllers/users.controller");

// UPDATE USER
router.put("/:id", usersController.updateUser);

// DELETE USER
router.delete("/:id", usersController.deleteUser);

// GET USER
router.get("/:id", usersController.getUser);


module.exports = router