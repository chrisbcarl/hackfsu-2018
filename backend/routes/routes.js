const express = require('express');
const router = express.Router();

const resource_controller = require('../controllers/Resource');
const watson_conversation_controller = require('../controllers/WatsonConversation');

// test route (accessed at GET http://localhost:port_number/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

// test route (accessed at GET http://localhost:port_number/api)
router.get('/ping', function(req, res) {
	res.json({ message: 'pong' });	
});

// real work
router.route('/conversation').post(watson_conversation_controller.createConversation);
router.route('/conversation').get(watson_conversation_controller.readConversation);

router.post('/resource', resource_controller.createResource);
router.get('/resource', resource_controller.readResources);

router.get('/resources/:id', resource_controller.readResource)
router.put('/resources/:id', resource_controller.updateResource)
router.delete('/resources/:id', resource_controller.deleteResource);




























// Export routes
module.exports = router;
