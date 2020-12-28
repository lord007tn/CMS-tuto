const router = require("express").Router();
const articleControllers = require("../controllers/article.controllers");
const isWriter = require("../utils/isWriter");
const verifyToken = require('../utils/verifyToken')
router.get("/", articleControllers.getArticles);
router.get("/:articleslug", articleControllers.getArticleBySlug);
router.post("/create", verifyToken, isWriter, articleControllers.createArticle);
router.put("/:articleslug/update", verifyToken, isWriter, articleControllers.updateArticle);
router.delete("/:articleslug/delete",verifyToken, isWriter, articleControllers.deleteArticle);
module.exports = router;
