
const {User,Post,Community,UserCommunity,UserProfile}=require("../models");
const {formatDate,isMember} = require("../helpers/helper");
const {Op} = require('sequelize');

class CommunityController{
   static async communities(req,res){
    try {
        const {search} = req.query;
        let whereClause = {};

        if (search) {
            whereClause.communityName = {
                [Op.iLike]: `%${search}%`
            }
        };

        const communities = await Community.findAll({
            where: whereClause,
            include: [{model: User, attributes: ['id','username']}]
        });

        res.render('communities', {communities, search: search || '', user:req.session});
    } catch (error) {
        res.send(error)
    }
   }
   static async getAddCommunity(req,res){
    try {
        res.render("addCommunity")
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
        const community=await Community.findByPk(id,{
            include:[
                {model:User, attributes: ['id', 'username']},
                {model:Post, include: User}
            ]
        })
        res.render('communityProfile', {community, isMember, formatDate, user: req.session})
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
        res.redirect(`/kitabmuka/communities/${id}`)
    } catch (error) {
        res.send(error)
    }
   }
   static async leaveCommunity(req, res) {
    try {
        const { id } = req.params;
        const userId = req.session.userId;

        await UserCommunity.destroy({
        where: {
            CommunityId: id,
            UserId: userId
        }
        });
        res.redirect(`/kitabmuka/communities/${id}`);
    } catch (error) {
        res.send(error);
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
        res.redirect(`/kitabmuka/communities/${id}`)
    } catch (error) {
        res.send(error)
        
    }
   }
    

}
module.exports=CommunityController