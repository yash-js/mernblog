const express = require("express");
const { signup, signin, signout, getUser, editUser, post,posts } = require("../controllers/auth");
const authenticate = require("../middlewares/auth");
const router = express.Router();


router.post('/signup', signup)
router.post('/signin', signin)
router.get('/signout', authenticate, signout)

router.post('/edit', authenticate, editUser)
router.get("/getuser", authenticate, getUser)
router.post('/post', authenticate, post)
router.get("/posts", posts)

module.exports = router