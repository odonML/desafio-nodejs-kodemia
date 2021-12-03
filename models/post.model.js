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
        required: false,
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
postSchema.method('toJSON', function(){ //cambiar el _id a id
    const {__v, ...object} = this.toObject();
    return object;
})

const Posts = model("Post", postSchema);

module.exports = Posts;
 