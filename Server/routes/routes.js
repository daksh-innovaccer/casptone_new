const express = require ('express')
const router = express.Router();
const postController = require('../controller/PostController');


router.use("/auth", require("./auth"))

router.get("/", (req, res)=>{
    res.send("<h1>Welcome to the portal</h1>")
})

router.post('/create-post', postController);


module.exports = router