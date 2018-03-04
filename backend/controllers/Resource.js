const Resource = require('../models/Resource');

// /api/resource
exports.createResource = function(req, res) {		
    var resource = new resource();		// create a new instance of the resource model
    resource.name = req.body.name;      // set the resources name (comes from the request)

    resource.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'resource created!' });
    });
}
exports.readResources = function(req, res) {
    resource.find(function(err, resources) {
        if (err)
            res.send(err);

        res.json(resources);
    });
}

// /api/resource/:id
exports.readResource = function(req, res) {
    resource.findById(req.params.resource_id, function(err, resource) {
        if (err)
            res.send(err);
        res.json(resource);
    });
}
exports.updateResource = function(req, res) {
    resource.findById(req.params.resource_id, function(err, resource) {

        if (err)
            res.send(err);

        resource.name = req.body.name;
        resource.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'resource updated!' });
        });

    });
}
exports.deleteResource = function(req, res) {
    resource.remove({
        _id: req.params.resource_id
    }, function(err, resource) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
}
