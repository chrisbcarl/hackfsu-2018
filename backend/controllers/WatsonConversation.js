var library = require('../utilities/library')

var ConversationV1 = require('watson-developer-cloud/conversation/v1');
var config = require('../../config');
var wc_config = config.watson.conversation;
var wc = new ConversationV1({
    username: wc_config.username,
    password: wc_config.password,
    url: wc_config.url,
    version_date: wc_config.version_date
});

exports.default = function(req, res) {		
    var resource = new resource();		// create a new instance of the resource model
    resource.name = req.body.name;      // set the resources name (comes from the request)

    resource.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'resource created!' });
    });
}

exports.createConversation = function(req, res) {
    console.log("create convo req ->", req.body);
    wc.message(
        {
            input: { text: req.body.text },
            context: req.body.context ? req.body.context : {},
            workspace_id: wc_config.workspace_id
        },
        function(err, response) {
            if (err) {
                console.log(err);
                res.send({
                    message: err
                });
            } else {
                // console.log('createConversation with', req.body.text, '\n',JSON.stringify(response, null, 2));
                res.send({
                    message: response.output.text,
                    // response: response,
                    context: response.context,
                });
            }
        }
    );
}

exports.readConversation = function(req, res) {
    wc.message(
        {
            input: { text: "What can you do?" },
            workspace_id: wc_config.workspace_id
        },
        function(err, response) {
            if (err) {
                console.log(err);
                res.send({
                    message: err
                });
            } else {
                // console.log(JSON.stringify(response, null, 2));
                res.send({
                    message: response.output.text,
                    context: response.context,
                });
            }
        }
    );
}