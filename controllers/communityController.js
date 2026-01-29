
const {User,Post,Community,UserCommunity,UserProfile}=require("../models")
const formatDate = require("../helpers/helper")
class CommunityController{

   
   static async communities(req,res){
    try {
        const data=await Community.findAll()

        res.render("",{data})
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
        res.render("",{data})
    } catch (error) {
        res.send(error)
        
    }
   }
   static async joinCommunity(req,res){
    try {
        res.render()
    } catch (error) {
        res.send(error)
        
    }
   }
   static async addCommunityPost(req,res){
    try {
        res.render()
    } catch (error) {
        res.send(error)
        
    }
   }
    

}
module.exports=CommunityController