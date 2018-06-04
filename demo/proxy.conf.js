const PROXY_CONFIG = [
  {
    //add endpoins to this list
    context: [
      "/api/CustomerList",
      "/api/Mailing",
            

    ],
    // TODO : change to server location/url
    target: "http://localhost:60083",
        secure: false
    }
]

module.exports = PROXY_CONFIG;
