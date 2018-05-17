const PROXY_CONFIG = [
    {
        context: [
            "/api/Mailing",
            "/api/Values",

    ],
    // TODO : change to server location/url
    target: "http://localhost:60083",
        secure: false
    }
]

module.exports = PROXY_CONFIG;
