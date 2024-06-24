const storage = require('node-persist');
var loginmodel = require('../model/loginmodel')
const usermodel = require('../model/usermodel');
storage.init( );

exports.login = async (req, res) => {
    var data = await usermodel.find({ "email": req.body.email });

    var user_id = await storage.getItem('user_id');

    console.log(user_id);

    if (user_id == undefined) {

        if (data.length == 1) {

            if (data[0].password == req.body.password) {
                await storage.setItem('user_id', data[0].id)
                res.status(200).json({
                    status: "login success"
                })

                

            } else {
                res.status(200).json({
                    status: "check your email and password"
                })
            }

        } else {
            res.status(200).json({
                status: "check your email and password "
            })
        }
    } else {
        res.status(200).json({
            status: "user is already login "
        })
    }
}

exports.login_data = async (req, res) => {

    var user_id = await storage.getItem("user_id");
    console.log(user_id);
    var data = await usermodel.findById(user_id);

    res.status(200).json({
        status: "Data selected",
        data
    })
}

exports.logout = async(req,res) =>{  
    await storage.clear();
    res.status(200).json({
        status:"user logout"
    })
}

exports.get_login_data = async (req, res) => {

    var id = await storage.getItem("user_id");
    var data = await usermodel.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status: "Data update",

    })
}

exports.login_update = async (req, res) => {

    var id = await storage.getItem("user_id");
    var data = await usermodel.findByIdAndUpdate(id);

    res.status(200).json({
        status: "Data update",
        data
    })
}

