using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using APIServer.Models;

namespace APIServer.helperClasses
{
    public class CutomerList
    {
        public List<Customer> GetCustomerList()
        {
            List<Customer> customerList = new List<Customer>();
            Customer customer = new Customer();
            customer.SetName("Troy");
            customer.SetNumber("555-555-5555");
            customer.SetAddress("123 E main st");
            customer.SetEmail("abc@blah.com");
            customerList.Add(customer);
            Customer customer1 = new Customer();
            customer1.SetName("Catherine");
            customer1.SetNumber("555-999-5555");
            customer1.SetAddress("123 E broadway st");
            customer1.SetEmail("defg@blah.com");
            customerList.Add(customer1);
            return customerList;
        }
    }
}