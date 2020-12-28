const User = require(".../models/user.controllers.js")

const getUsers = async (req,res)=>{
  try {
    const users = await User.find();
    return res.status(200).json({users : users})
  } catch (err) {
    return res.status(500).json(err)
  }
}
const deleteUser = async(req,res)=>{
  const id = req.params.userId;
  try {
    const deletedUser = await User.fineOneAndDelete(id);
    return res.status(200).json({deletedUser : deletedUser})
  } catch (err) {
    return res.status(500).json(err);
  }
}
const updateUser = async (req,res)=>{
  const id = req.params.userId;
  try {
    const updatedUser = await User.findOneAndUpdate(id);
    return res.status(200).json({updatedUser: updatedUser})
  } catch (err) {
    return res.status(200).json(err)
  }
}
module.exports.getUsers = getUsers
module.exports.deleteUser = deleteUser
module.exports.updateUser= updateUser

