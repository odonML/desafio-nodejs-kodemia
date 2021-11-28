const Post = require("../models/post.model");

const getAllPosts = async (req, res) =>{
    const allPosts = await Post.find({});
    res.json(allPosts)
}

const addPost = async (req, res) =>{
    console.log("hola")
    const {title, content} = req.body;
    try{
        const existPost = await Post.findOne({title, content});
        if(existPost){
            return res.status(400).json({
                ok: false,
                msj: "post exist",
            })
        }
        const postDevTo = new Post(req.body);
        await postDevTo.save();
        res.json({
            ok: true,
            postDevTo,
        })
    }catch(err){
        consele.log(err)
        res.status(500).json({
            ok: false,
            msj: "error in post save"
        })
    }
}

// const getById = async (req, res) =>{
//     const id = req.params.id;
// }
// const editPost = async (req, res) =>{

// } 
// const deletePost = async (req, res) =>{

// }

module.exports = {
    getAllPosts,
    addPost,
    // getById, 
    // editPost, 
    // deletePost,
}