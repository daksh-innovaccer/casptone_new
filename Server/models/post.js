const mongoose = require("mongoose");
const {Schema} = mongoose;

const PostSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        ref: 'User',
        //required: true,
    },
    likesCount: {
        type: Number,
        default: 0,
    },
    likedBy: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
},
{timestamps: true},
);


/*  Adding the user id when someone likes the post */

PostSchema.methods.like = async function (userID) {
    if (!this.likedBy.some((id) => id.equalsTo(userID))){
        this.likedBy.push(userID);
        return this.save();
    }
    return Promise.resolve(this);
};

// Removing the user id when someone unlike the post

PostSchema.methods.unlike = async function (userID) {
    if (this.likedBy.some((id) => id.equalsTo(userID))){
        this.likedBy.remove(userID);
        return this.save();
    }
    return Promise.resolve(this);
};

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;


