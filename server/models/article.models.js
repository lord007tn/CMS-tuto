const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const slug = require("slug");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
  {
    title: { type: String, minlength: 6, maxlength: 512 },
    slug: {
      type: String,
      maxlength: 1024,
      unique: true,
      index: true,
      lowercase: true,
    },
    content: { type: String },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    writer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

ArticleSchema.plugin(uniqueValidator, { message: "Article not unique" });
ArticleSchema.pre("validate", function (next) {
  if (!this.slug) {
    this.slugify();
  }
  next();
});
ArticleSchema.methods.slugify = function () {
  this.slug =
    slug(this.title) +
    "-" +
    ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
};
module.exports = mongoose.model("Article", ArticleSchema);
