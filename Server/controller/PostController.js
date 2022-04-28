const Post = require('../models/post');
const User = require('../models/user');
const { options } = require('../routes/auth');


// create post after user enter the text

const createPost = async (req, res) => {
    const authUserID= req.body.authUserID;
    //const authUserID = '6269074bf896e444037bf52b';
    const text = req.body.text;

    const post = await Post.create({ author: authUserID, text: text });
    
    res.status(201).json({ user: req.user, post });
}

// delete post, router -> '/:postID'

const deletePost = async (req, res) => {
    const { postID } = req.params;
    const authUserID= req.body.authUserID;

    const post = await Post.findById(postID);

    if (!post){
        throw "Post not found";
    }
    if (!post.author.equals(authUserID)){
        throw "Don't try to be  oversmart as you cant delete someone else's post";
    }

    await post.remove();

    res.status(201).json({deleted : true, post});

}

const interact = async (req, res) => {
    const {postID} = req.params;
    const authUserID =  req.body.authUserID;

    const post = await Post.findById(postID);

    if (!post){
        //throw "Post not found";
        res.status(400).send("Bad Request");
    }
    
    await post.interact(authUserID);

    res.status(201).json({success: true, post})
}


/* posts display on feed operations*/

const fetchPosts = async (req, res) => {
    const options = req.query;
    options.populate = {
        path: 'author',
        select: ['username', 'photo']
    };
    options.sortBy = 'createdAt:desc';
    const posts = await Post.paginate({}, options);
    res.status(200).json(posts);
}

const comment = async (req, res) => {
    const {postID} = req.params;
    const authUserID = await req.body.authUserID;
    const text = await req.body.text;

    const post = await Post.findById(postID);   

    if (!post){
        //throw "Post not found";
        res.status(400).send("Bad Request");
    }

    await post.comment(authUserID, text);
    res.status(201).json({commentAdded: true, post, comment})
}

module.exports = {createPost, interact, deletePost, fetchPosts, comment};

