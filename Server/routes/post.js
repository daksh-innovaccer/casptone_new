const express = require ('express')
const router = express.Router();
const postController = require('../controller/PostController');


router.post('/create', postController.createPost);
router.post('/interact/:postID', postController.interact);
router.delete('/deletet/:postID', postController.deletePost);
router.get('/fetch', postController.fetchPosts);
router.post('/comment/:postID', postController.comment);

module.exports = router;