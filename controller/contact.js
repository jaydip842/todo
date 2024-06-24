var contactmodel = require('../model/contactmodel');
const storage = require('node-persist');
storage.init();

exports.contact = async (req, res) => {
    var id = await storage.getItem('user_id');
    req.body.user_id = id;
    var data = await contactmodel.create(req.body);

    res.status(200).json({
        status: "Data insert",
        data
    })
}

exports.contact_data = async (req, res) => {
    var id = await storage.getItem('user_id');

    var data = await contactmodel.find({ "user_id": id });

    res.status(200).json({
        status: "Data selected",
        data
    })
}

exports.delete_data = async (req, res) => {
    var id = await storage.getItem("user_id");
    var data = await contactmodel.findByIdAndDelete(id, req.body);

    res.status(200).json({
        status: "Data deleted",
    })
}


exports.contact_update = async (req, res) => {
    var id = await storage.getItem('user_id');
    var id1 = req.params.id1
    var data = await contactmodel.findById(id1);

    console.log(data)
    if (data.user_id == id) {
        var data = await contactmodel.findByIdAndUpdate(id1, req.body);
        res.status(200).json({
            status: "Contact updated",
            data
        });
    }
    else {
        res.status(200).json({
            status: "Contact not allow",
        });
    }
};



exports.delete_data = async (req, res) => {
    var id = await storage.getItem('user_id');
    var id1 = req.params.id1
    var data = await contactmodel.findById(id1);

    if (data.user_id == id) {
        var data = await contactmodel.findByIdAndDelete(id1, req.body);
        res.status(200).json({
            status: "Data deleted",
            data
        })
    }
    else {
        res.status(200).json({
            status: "Data does not deleted",
        })
    }

}

