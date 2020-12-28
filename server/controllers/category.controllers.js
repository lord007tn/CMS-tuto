const Category = require("../models/category.models");


const getCategories= async(req,res)=>{
  try {
    const categories = await Category.find();
    return res.status(200).json({categories : categories});
  } catch (error) {
    res.status(500).json(error);
  }

};
const getCategoryBySlug = async(req,res)=>{
  const slug = req.params.categoryslug
  try {
    const category = await Category.findOne({categorySlug: slug})
    return res.status(200).json({category: category})
  } catch (error) {
   return res.status(500).json(error)
  }
}
const createCategory =async (req,res)=>{
       const newCategory = new Category({
         categoryName : req.body.categoryName,
         description : req.body.description, 
         writer : req.verifiedUser._id
       });
       try {
         const savedCategory = await newCategory.save();
         return res.status(200).json({savedCategory : savedCategory})
       } catch (err) {
         return res.status(500).json(err);
       }
};
const deletCategory = async(req,res)=>{
  const slug = req.params.categoryslug;
  try {
    const deletedCategory = await Category.findOneAndUpdate({categorySlug: slug});
    return res.status(200).json(`${deletedCategory._id} is deleted succefully`)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const updateCategory = async (req, res)=>{
  const slug = req.params.categoryslug;
  const {...dataToUpdate} = req.body;

  try{
const updatedCategory = await Category.findOneAndUpdate( { categorySlug: slug },dataToUpdate, { new: true });
if(dataToUpdate.categoryName){
  await updatedCategory.slugify()
  await updatedCategory.save()
}
return res.status(200).json({ updatedCategory: updatedCategory})
  }catch(err){
       return res.status(500).json(err)
  }
}

module.exports.updateCategory = updateCategory
module.exports.createCategory = createCategory
module.exports.deletCategory = deletCategory
module.exports.getCategoryBySlug= getCategoryBySlug
module.exports.getCategories =getCategories
