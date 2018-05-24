using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace APIServer.Models
{
    public class Customer
    {
        public string name;
        public string address;
        public string number;
        public string email;

        public void setName(string name)
        {
            this.name = name;
        }
        public void setNumber(string number)
        {
            this.number = number;
        }
        public void setAddress(string address)
        {
            this.address = address;
        }
        public void setEmail(string email)
        {
            this.email = email;
        }
    }
}