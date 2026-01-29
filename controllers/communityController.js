
const {User,Post,Community,UserCommunity,UserProfile}=require("../models")
const {formatDate,isMember} = require("../helpers/helper")
class CommunityController{

   
   static async communities(req,res){
    try {
        const data=await Community.findAll()

        res.send(data)
    } catch (error) {
        res.send(error)
        
    }
   }
   static async getAddCommunity(req,res){
    try {
        res.render("")
    } catch (error) {
        res.send(error)
        
    }
   }
   static async postAddCommunity(req,res){
    try {
        const {communityName,description}=req.body
        await Community.create({communityName,description})
        res.redirect("/kitabmuka/communities")
    } catch (error) {
        res.send(error)
        
    }
   }
   static async communityDetail(req,res){
    try {
        const {id}=req.params
        const data=await Community.findByPk(id,{
            include:[
                {model:User},
                {model:Post}
            ]
        })
        res.send(data,isMember)
    } catch (error) {
        res.send(error)
        
    }
   }
   static async joinCommunity(req,res){
    try {
        const {id}=req.params
        const UserId=req.session.userId 
        await UserCommunity.create({
            UserId,
            CommunityId:id
        })
        res.redirect(`/communities/${id}`)
    } catch (error) {
        res.send(error)
        
    }
   }
   static async addCommunityPost(req,res){
    try {
        const {id}=req.params
        const {description,imageUrl}=req.body
        await Post.create({
            description,
            imageUrl,
            UserId:req.session.userId,
            CommunityId:id
        })
        res.redirect(`/communities/${id}`)
    } catch (error) {
        res.send(error)
        
    }
   }
    

}
module.exports=CommunityController