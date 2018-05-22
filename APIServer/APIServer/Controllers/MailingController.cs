using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace APIServer.Controllers
{
    public class MailingController : ApiController
    {
        
        // GET: api/Mailing
        public string Get()
        {
            return "this is the get function";
        }

        // GET: api/Mailing/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Mailing
        public string Post([FromBody]string value)
        {
            return "in the Post";
        }

        // PUT: api/Mailing/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Mailing/5
        public void Delete(int id)
        {
        }
    }
}
