const Post = require('../models/post');
const User = require('../models/user');


const createPost = async (req, res) => {
    const { _id: authUserID } = req.body.user;
    //const authUserID = '6269074bf896e444037bf52b';
    const text = req.body.text;

    const post = await Post.create({ author: authUserID, text: text });
    res.status(201).json({ success: true, post });
}

module.exports = createPost;