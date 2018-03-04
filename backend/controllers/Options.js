exports.createCredentials = function(req, res) {		
    var resource = new resource();		// create a new instance of the resource model
    resource.name = req.body.name;      // set the resources name (comes from the request)

    resource.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'resource created!' });
    });
}

exports.readCredentials = function(req, res) {		
    var resource = new resource();		// create a new instance of the resource model
    resource.name = req.body.name;      // set the resources name (comes from the request)

    resource.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'resource created!' });
    });
}