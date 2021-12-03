const Post = require("../models/post.model");

const getAllPosts = async (req, res) => {
    const allPosts = await Post.find({});
    res.json(allPosts);
};

const addPost = async (req, res) => {
    const body = req.body;
    // console.log("esto es lo que nos llega",body)
    // const {title, content} = body;
    try {
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
        });
    } catch (err) {
        console.log("este es un errer ", err);
        res.status(500).json({
            ok: false,
            msj: "error in post save",
        });
    }
};
const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const postById = await Post.findById(id);

        res.json(postById);
    } catch (error) {
        console.error(error);
        res.end();
    }
};

const editPost = async (req, res) => {
    const id = req.params.id;
    try {
        const postID = await Post.findById(id); //Busqueda de post con el ID para verificar que ID sea valido
        if (!postID) {
            //Validacion de Post en dado caso que un post no sea encontrado mediante la ID
            return res.status(404).json({
                //Respuesta con estatis 404
                ok: false,
                msj: "el post no existe", //Mensaje de la respuesta
            });
        }
        //extraemos el body de la request
        const updateData = req.body;
        //actualiza el post y nos retorna el post actualizado
        const updatePost = await Post.findByIdAndUpdate(id, updateData, {
            new: true,
        });

        res.status(200).json({
            ok: true,
            updatePost,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msj: "bad update.",
        });
    }
};
const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedPost = await Post.findByIdAndDelete(id);
        res.statusCode = 200;
        res.json({
            success: true,
            message: "Post deleted successfully",
            data: {
                koder: deletedPost,
            },
        });
    } catch (err) {
        res.json({
            success: false,
            message: "Could not delete Post",
            err,
        });
    }
};

module.exports = {
    getAllPosts,
    addPost,
    getById,
    editPost,
    deletePost,
};
