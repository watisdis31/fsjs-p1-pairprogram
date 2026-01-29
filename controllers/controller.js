const {User,Post,Community,UserCommunity,UserProfile} = require("../models");

class Controller{
    static async redirect(req, res) {
        try {
            res.redirect('/kitabmuka');
        } catch (error) {
            res.send(error);
        }
    }

    static async landing(req, res) {
        try {
            res.render('landing');
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = Controller;