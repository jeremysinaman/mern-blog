const router = require("express").Router();
const categoriesController = require ('../controllers/categories.controller')

//GET ONE CATEGORY
router.post("/", categoriesController.getOneCategory);


//GET ALL CATEGORIES
router.get("/", categoriesController.getAllCategory);

module.exports = router;