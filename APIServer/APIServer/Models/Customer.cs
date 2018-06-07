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

        public void SetName(string name)
        {
            this.name = name;
        }
        public void SetNumber(string number)
        {
            this.number = number;
        }
        public void SetAddress(string address)
        {
            this.address = address;
        }
        public void SetEmail(string email)
        {
            this.email = email;
        }
    }
}