var Asgn = require("../src/models/asgn-model");

exports.AddAsgn = function(req, res) {
    if(!req.body)
    {
        return res.status(400).send("Req body missing");
    }
    var model = new Asgn(req,body);
    model.save()
        .then((doc) => {
            if(!doc || doc.length == 0)
            {
                return res.status(500).send("Server error.");
            }
            res.status(201).send(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

exports.ShowAsgn = function(req,res) {
    if(!req.body)
    {
        return res.status(400).send("Req body missing");
    }
    Asgn.findOne({
        assignmentName: req.query.assignmentName
    })
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

exports.ListAsgn = function(req,res) {
    Asgn.find()
        .then((doc) => {
            res.json(doc)
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

exports.UpdateAsgn = function(req,res) {
    if(!req.body)
    {
        return res.status(400).send("Req body missing");
    }
    Asgn.findOneAndUpdate({
        assignmentName: req.query.assignmentName
    }, req.body, {new: true} )
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

exports.DeleteAsgn = function(req,res) {
    if(!req.body)
    {
        return res.status(400).send("Req body missing");
    }
    Asgn.findOneAndDelete({
        assignmentName: req.query.assignmentName
    })
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}