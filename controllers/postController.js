
const {User,Post,Community,UserCommunity,UserProfile}=require("../models")
const formatDate = require("../helpers/helper")
class PostController{
    
   static async post(req,res){
    try {
        let data =await Post.getLatest()
        res.send(data,formatDate)
    } catch (error) {
        res.send(error)
        
    }
   }
   static async getAddPost(req,res){
    try {

        res.render("",)
    } catch (error) {
        res.send(error)
        
    }
   }
   static async postAddPost(req,res){
    try {
        const {description,imageUrl}=req.body
     

        await Post.create({
            description,
            imageUrl,
            UserId:req.session.userId 
        })
        res.redirect("/posts")
    } catch (error) {
        res.send(error)
        
    }
   }
   static async getEditPost(req,res){
    try {
        const {id}=req.params
        const post=await Post.findByPk(id)

        res.render(post)
    } catch (error) {
        res.send(error)
        
    }
   }
   static async postEditPost(req,res){
    try {
        const {id}=req.params
        const {description,imageUrl}=req.body

        await Post.update(
            {description,imageUrl},
            {where:{id}}
        )
        res.redirect('/posts') 
        
    } catch (error) {
        res.send(error)
        
    }
   }
   static async deletePost(req,res){
    try {const {id}=req.params
        Post.findByPk(id)
        .then(post=>{
            return post.destroy()
        })
        .then(()=>{
            res.redirect("/posts")
        })

    } catch (error) {
        res.send(error)
        
    }
   }
   static async likePost(req,res){
    try {
        const {id}=req.params

        const post =await Post.findByPk(id)
        await post.increment({
            totalLike:1
        })

        res.redirect("/posts",)
    } catch (error) {
        res.send(error)
        
    }
   }
}
module.exports=PostController