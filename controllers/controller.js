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

    static async getLogin(req, res) {
        try {
            res.render('loginForm');
        } catch (error) {
            res.send(error);
        }
    }

    static async postLogin(req, res) {
        try {
            
        } catch (error) {
            res.send(error);
        }
    }

    static async getRegister (req, res) {
        try {
            res.render('registerForm');
        } catch (error) {
            res.send(error);
        }
    }

    static async postRegister(req, res) {
        try {
            
        } catch (error) {
            res.send(error);
        }
    }

    static async post(req,res) {
        try {
            let posts = await Post.findAll({
                include: User,
                order: [["createdAt","DESC"]]
            });
            res.render("",{posts});
        } catch (error) {
            res.send(error);
        }
    }
    

}

module.exports = Controller;