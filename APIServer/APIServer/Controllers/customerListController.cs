using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace APIServer.Controllers
{
    public class customerListController : ApiController
    {
        // GET: api/customerList
        public IEnumerable<Customer> Get()
        {
            // Customer[] customerList = getCustomerList();
            // return customerList
            return new Customer[] {};
        }

        // GET: api/customerList/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/customerList
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/customerList/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/customerList/5
        public void Delete(int id)
        {
        }
    }
    public class Customer
    {
        public string name;
        public string address;
        public string number;
        public string email;
    }
}
