const mongoose = require("mongoose");
const {Schema} = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');

const PostSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
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
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CommentSchema'
        }
    ],
},
{timestamps: true},
);

PostSchema.plugin(mongoosePaginate)
/*  Adding and removing the user id when someone likes the post */

PostSchema.methods.interact = async function (userID) {
    const liked = await this.likedBy.includes(userID);
    if (!liked){
        await this.likedBy.push(userID);
        return this.save();
    }
    else if (liked){
        await this.likedBy.remove(userID);
        return this.save();
    }
    return Promise.resolve(this);
};



const Post = mongoose.model("Post", PostSchema);

module.exports = Post;


