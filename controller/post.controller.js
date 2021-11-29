const Post = require("../models/post.model");

const getAllPosts = async (req, res) =>{
    const allPosts = await Post.find({});
    res.json(allPosts);
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

const getById = async (req, res) =>{
    const id = req.params.id;
    try{
        const postID = await Post.findById(id);//Verificamos que exista un usuario con ese ID
        if(!postID){
            return res.status(400).json({
                ok: false,
                msj: "post no exist",
            })
        }
        res.json(postID)
    }catch(err){
        console.log(err);
        res.status(500).json({
            ok:false,
            msj: "error de peticion"
        })
    }
    
}
// const editPost = async (req, res) =>{
// } 
// const deletePost = async (req, res) =>{

// }

module.exports = {
    getAllPosts,
    addPost,
    getById, 
    // editPost, 
    // deletePost,
}