const Post = require("../models/post.model");


const getAllPosts = async (req, res) =>{
    const allPosts = await Post.find({});
    res.json(allPosts)
}

const addPost = async (req, res) =>{
    const body = req.body;
    // console.log("esto es lo que nos llega",body)
    // const {title, content} = body;
    try{
        // const existPost = await Post.findOne({title, content});
        // if(existPost){
        //     return res.status(400).json({
        //         ok: false,
        //         msj: "post exist",
        //     })
        // }
        const postDevTo = new Post(req.body);
        await postDevTo.save();
        res.json({
            ok: true,
            postDevTo,
        })
    }catch(err){
        console.log("este es un errer ",err)
        res.status(500).json({
            ok: false,
            msj: "error in post save"
        })
    }
}

// const getById = async (req, res) =>{
//     const id = req.params.id;
// }

 const editPost = async (req, res) =>{
    const koderId = req.params.id;
    let post = await Post.findOne({id: koderId});
    
    try{
        const {title, content, img, tags, reactions} = req.body;
        if({title, content, img}!=null){
            post = {title, content, img, tags, reactions};
                
            await post.save();
                res.json(post)
            return res.status(200);
        }
 //Aurora Comment *No borrar hasta el final*
// mongodb+srv://aurora:kodemia123@cluster0.ibakh.mongodb.net/NodeJsChallenge
// const Posts = model("posts", postSchema);           

    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msj: "Requiered data missing."
        })
    }
 } 
// const deletePost = async (req, res) =>{

// }

module.exports = {
    getAllPosts,
    addPost,
    // getById, 
    editPost, 
    // deletePost,
}