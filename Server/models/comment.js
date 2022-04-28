const mongoose = require("mongoose");
const {Schema} = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');

const CommentSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    writer:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },   
        
},
{timestamps: true},
);