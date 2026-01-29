const {User,Post,Community,UserCommunity,UserProfile}=require("../models")
const {formatDate} = require('../helpers/helper')
class ProfileController{
    static async userProfile(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);

            const posts = await Post.findAll({
            include: {model: Community},
            where: { UserId: id },
            order: [["createdAt", "DESC"]]
            });

            res.render("profile", { user, posts, formatDate });
        } catch (err) {
            res.send(err);
        }
        } 

}
module.exports = ProfileController