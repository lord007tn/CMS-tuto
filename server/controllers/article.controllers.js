const Article = require("../models/article.models");

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    return res.status(200).json({ articles: articles });
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getArticleBySlug = async (req, res) => {
  const slug = req.params.articleslug;
  try {
    const article = await Article.findOne({ slug: slug });
    return res.status(200).json({ article: article });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const createArticle = async (req, res) => {
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content,
    writer: req.verifiedUser._id,
    category: req.body.category,
  });
  try {
    const savedArticle = await newArticle.save();
    return res.status(201).json({ savedArticle: savedArticle });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteArticle = async (req, res) => {
  const slug = req.params.articleslug;

  try {
    const deletedArticle = await Article.findOneAndDelete({ slug: slug });
    return res
      .status(200)
      .json(`${deletedArticle._id} is deleted successfully`);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateArticle = async (req, res) => {
  const slug = req.params.articleslug;
  const { ...dataToUpdate } = req.body;
  console.log(slug, dataToUpdate)
  try {
    const updatedArticle = await Article.findOneAndUpdate(
      { slug: slug },
      dataToUpdate,
      { new: true }
    );
    if(dataToUpdate.title){
      await updatedArticle.slugify()
      await updatedArticle.save()
    }
    return res.status(200).json({ updatedArticle: updatedArticle });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.getArticles = getArticles;
module.exports.getArticleBySlug = getArticleBySlug;
module.exports.deleteArticle = deleteArticle;
module.exports.updateArticle = updateArticle;
module.exports.createArticle = createArticle;
