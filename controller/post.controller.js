const Post = require("../models/post.model");

//GET
const getAllPosts = async (req, res) => {
    const allPosts = await Post.find({});
    res.json(allPosts);
};
//POST
const addPost = async (req, res) => {
    const body = req.body;
    try {
        const postDevTo = new Post(body);
        await postDevTo.save();
        res.status(200).json({
            ok: true,
            postDevTo,
        });
    } catch (err) {
        // console.log("este es un error ", err);
        res.status(500).json({
            ok: false,
            msj: "bad post post",
            error: err,
        });
    }
};
//GETBYID
const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const postById = await Post.findById(id);
        //Validacion de Id-----------
        if (!postById) {
            //Validacion de Post en dado caso que un post no sea encontrado mediante la ID
            return res.status(404).json({
                //Respuesta con estatis 404
                ok: false,
                msj: "el post no existe", //Mensaje de la respuesta
            });
        }
        res.status(200).json(postById);
    } catch (err) {
        // console.log("este es un error ", err);
        res.status(500).json({
            ok: false,
            msj: "bad gerByID.",
            error: err,
        });
    }
};
//PUT
const editPost = async (req, res) => {
    const id = req.params.id;
    try {
        const postID = await Post.findById(id); //Busqueda de post con el ID para verificar que ID sea valido
        //Validacion de Id-----------
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
    } catch (err) {
        // console.log(err);
        res.status(500).json({
            ok: false,
            msj: "bad update.",
            error: err,
        });
    }
};
//DELETE
const deletePost = async (req, res) => {
    const id = req.params.id;
    try {
        const postID = await Post.findById(id); //Busqueda de post con el ID para verificar que ID sea valido
        //Validacion de Id-----------
        if (!postID) {
            //Validacion de Post en dado caso que un post no sea encontrado mediante la ID
            return res.status(404).json({
                //Respuesta con estatis 404
                ok: false,
                msj: "el post no existe", //Mensaje de la respuesta
            });
        }
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
