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
postSchema.method('toJSON',function(){
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
})

const Posts = model("Post", postSchema);

module.exports = Posts;
 