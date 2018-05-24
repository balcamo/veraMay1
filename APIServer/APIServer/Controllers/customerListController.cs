using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using APIServer.helperClasses;
using APIServer.Models;

namespace APIServer.Controllers
{
    public class CustomerListController : ApiController
    {
        // GET: api/customerList
        public string Get()
        //public List<Customer> Get()
        {
            CutomerList customerHelper = new CutomerList();
            List<Customer> customerList = customerHelper.getCustomerList();
            // return customerList
            return "hello";
        }

        // GET: api/customerList/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/customerList
        public List<Customer> Post([FromBody]string value)
        {
            CutomerList customerHelper = new CutomerList();
            List<Customer> customerList = customerHelper.getCustomerList();
            // return customerList
            return customerList;
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
    
}
