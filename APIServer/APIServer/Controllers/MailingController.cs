using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
//using VeraWP.VeraCoreLibrary;

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
        public MailingList Post([FromBody] MailingList value)
        {
            MailingList mylist = value;
            return mylist;
            //return "in the Post";
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
    public class MailingList{
        public string emailServiceType { get; set; }
        public string emailWaterPropertyType { get; set; }
        public string emailEletricPropertyType { get; set; }
        public string emailResidentType { get; set; }
        public string postalServiceType { get; set; }
        public string postalWaterPropertyType { get; set; }
        public string postalEletricPropertyType { get; set; }
        public string postalResidentType { get; set; }
    }
}
