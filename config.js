var watson = {
    "conversation": {
        "url": "https://gateway.watsonplatform.net/conversation/api",
        "username": "3fb40346-56ae-4adc-bfdb-3be08ede08e4",
        "password": "tiVrSo0Opa5d",
        "workspace_id": "f32f2938-766b-4ae5-89d1-0d16be395bbc",
        "version_date": "2017-05-26"
    }
}

var google = {
    "calendar": {
        "installed": {
            "client_id": "356439757901-28hg6eacjongel2pjd3j9ht87vid9m9n.apps.googleusercontent.com",
            "project_id": "upbeat-object-197004",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://accounts.google.com/o/oauth2/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_secret": "h3YVK7kQPoEAEOBRmlCGGIik",
            "redirect_uris": [
            "urn:ietf:wg:oauth:2.0:oob",
            "http://localhost"
            ]
        }
    }
}

var trello = {

}

module.exports = {
    watson: watson,
    google: google,
    trello: trello
};