const router = require('express').Router();
const categoryControllers = require("../controllers/category.controllers");
const isWriter = require('../utils/isWriter');
const verifyToken = require('../utils/verifyToken')
router.get('/',categoryControllers.getCategories);
router.get("/:categoryslug", categoryControllers.getCategoryBySlug);
router.post("/create", verifyToken, isWriter, categoryControllers.createCategory);
router.put("/:categoryslug/update",verifyToken, isWriter, categoryControllers.updateCategory);
router.delete("/:categoryslug/delete",verifyToken, isWriter, categoryControllers.deletCategory);
module.exports = router;
