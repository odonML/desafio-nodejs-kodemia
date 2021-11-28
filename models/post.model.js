const {Schema, model} = require('mongoose');

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        "default": [],
    },
    content: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    reactions: {
        likes: {
            type: Number
        },
        unicorn: {
            type: Number
        },
        save: {
            type: Number
        }
    }
})

const Posts = model("Post", postSchema);

module.exports = Posts;
 