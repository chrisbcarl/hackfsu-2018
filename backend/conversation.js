var ConversationV1 = require('watson-developer-cloud/conversation/v1');
var credentials = require('../env/conversation-credentials');
var workspace_id = 'f32f2938-766b-4ae5-89d1-0d16be395bbc';

var conversation = new ConversationV1({
  username: credentials.username,
  password: credentials.password,
  url: credentials.url,
  version_date: '2017-05-26'
});

conversation.message(
  {
    input: { text: "Create an event for tomorrow at 5pm" },
    workspace_id: workspace_id
  },
  function(err, response) {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.stringify(response, null, 2));
    }
  }
);


conversation.message(
  {
    input: { text: "Tomorrow at 6pm" },
    workspace_id: workspace_id
  },
  function(err, response) {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.stringify(response, null, 2));
    }
  }
);