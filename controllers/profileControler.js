const {User,Post,Community,UserCommunity,UserProfile}=require("../models")
const formatDate = require('../helpers/helper')
class profileController{
      static async profile(req,res){
        try {
            const {id}=req.params
    
            const data =await User.findByPk(id,{
                include:[
                    UserProfile,
                    Post
                ],
            })
    
    
            res.render("",{data,formatDate})
        } catch (error) {
            res.send(error)
            
        }
       }
}
module.exports=profileController