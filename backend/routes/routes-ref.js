const express = require('express');
const router = express.Router();
const resource = require('../models/Resource');

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});


// Join chat room, send next free port
router.get('/join', (req, res, next) => {
    const webSocketPort = '3333';
    res.json({
        port: webSocketPort
    })
});


router.route('/resources')
	.post(function(req, res) {		
		var resource = new resource();		// create a new instance of the resource model
		resource.name = req.body.name;      // set the resources name (comes from the request)

		resource.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'resource created!' });
		});
	})
    .get(function(req, res) {
		resource.find(function(err, resources) {
			if (err)
				res.send(err);

			res.json(resources);
		});
	});

router.route('/resources/:resource_id')
	.get(function(req, res) {
		resource.findById(req.params.resource_id, function(err, resource) {
			if (err)
				res.send(err);
			res.json(resource);
		});
	})
	.put(function(req, res) {
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
	})
	.delete(function(req, res) {
		resource.remove({
			_id: req.params.resource_id
		}, function(err, resource) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});


// Export routes
module.exports = router;
