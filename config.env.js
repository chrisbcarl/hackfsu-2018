var watson = {
    "conversation": {
        "url": "<INSERT YOUR CREDS HERE>",
        "username": "<INSERT YOUR CREDS HERE>",
        "password": "<INSERT YOUR CREDS HERE>",
        "workspace_id": "<INSERT YOUR CREDS HERE>",
        "version_date": "2017-05-26"
    }
};

var google = {
    "calendar": {
        "installed": {
            "client_id": "<INSERT YOUR CREDS HERE>",
            "project_id": "<INSERT YOUR CREDS HERE>",
            "auth_uri": "<INSERT YOUR CREDS HERE>",
            "token_uri": "<INSERT YOUR CREDS HERE>",
            "auth_provider_x509_cert_url": "<INSERT YOUR CREDS HERE>",
            "client_secret": "<INSERT YOUR CREDS HERE>",
            "redirect_uris": [
            "<INSERT YOUR CREDS HERE>"
            ]
        }
    }
};

var trello = {

}

module.exports = {
    watson: watson,
    google: google,
    trello: trello
};