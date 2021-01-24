const router = require("express").Router();
const User = require('../models/user.models');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken = require("../utils/verifyToken");

router.get('/authcheck', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.verifiedUser._id)
    return res.status(200).json(user)
  } catch (err) {
    return res.status(500).json(err)
  }
})
router.post("/register", async(req,res)=>{

    const emailExist = await User.findOne({email: req.body.email})
    if (emailExist) return res.statusCode(422).json("email already exist")

    const salt = await bcrypt.genSalt(16)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword
    })

   try {
    const savedUser = await newUser.save()
    return res.status(200).json(savedUser)
   } catch (err) {
     return res.status(500).json(err)
   }

});

router.post('/login', async (req, res)=>{
  const user = await User.findOne({ email: req.body.email })
  if(!user) return res.status(400).json("email/password wrong")

  const validPass = await bcrypt.compare(req.body.password, user.password)
  if(!validPass) return res.status(404).json("email/password wrong")
  const token = jwt.sign({_id: user._id, isWriter: user.isWriter}, "sdhfqjkhsdkj", {expiresIn: "2 days"})
  return res.status(200).header({access_token : token}).json({token: token, user: user})
})
module.exports = router