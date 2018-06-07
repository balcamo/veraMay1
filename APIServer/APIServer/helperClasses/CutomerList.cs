using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using APIServer.Models;

namespace APIServer.helperClasses
{
    public class CutomerList
    {
        public List<Customer> getCustomerList()
        {
            List<Customer> customerList = new List<Customer>();
            Customer customer = new Customer();
            customer.setName("Troy");
            customer.setNumber("555-555-5555");
            customer.setAddress("123 E main st");
            customer.setEmail("abc@blah.com");
            customerList.Add(customer);
            Customer customer1 = new Customer();
            customer1.setName("Catherine");
            customer1.setNumber("555-999-5555");
            customer1.setAddress("123 E broadway st");
            customer1.setEmail("defg@blah.com");
            customerList.Add(customer1);
            return customerList;
        }
    }
}