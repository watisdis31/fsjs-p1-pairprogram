const {User,Post,Community,UserCommunity,UserProfile}=require("../models")
class Controller{
   static async post(req,res){
    try {
        let posts=await Post.findAll({
            include:User,
            order:[["createdAt","DESC"]]
        })
        res.render("",{posts})
    } catch (error) {
        res.send(error)
    }
   }
    

}
module.exports=Controller