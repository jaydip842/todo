var usermodel = require('../model/usermodel');

exports.index = async (req, res) => {

    var data = await usermodel.create(req.body);

    res.status(200).json({
        status: "Data insert",
        data
    })
}

exports.get_data = async (req, res) => {

    var data = await usermodel.find(req.body);

    res.status(200).json({
        status: "Data selected",
        data
    })
}



