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
    },
    // created: {
    //     type: Date,
    //     default: Date.now
    // },
    likedBy: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    comments: [
        {
        
            text: String,
            writer: {
                type: Schema.Types.ObjectId,
                ref: "User",
            }
        },
        
    ],
},
{timestamps:true},
);

PostSchema.plugin(mongoosePaginate)
/*  Adding and removing the user id when someone likes the post */

PostSchema.methods.interact = async function (userID) {
    const liked = await this.likedBy.includes(userID);
    if (!liked){
        await this.likedBy.push(userID);
        this.likesCount = this.likesCount + 1;
        return this.save();
    }
    else if (liked){
        await this.likedBy.remove(userID);
        this.likesCount = this.likesCount - 1;
        return this.save();
    }
    return Promise.resolve(this);
};  

PostSchema.methods.comment = async function (userID, text){
    if (userID && text){
    await this.comments.push({writer: userID, text: text});
    return this.save();
    }
    return Promise.resolve(this);
}

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;


