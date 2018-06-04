using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeraWP.VeraCoreLibrary
{
    public abstract class Customer
    {
        public string custID { get; set; }
        public string lastName { get; set; }
        public string firstName { get; set; }
        public string careOf { get; set; }
        public string mailAddress { get; set; }
        public string mailAddress2 { get; set; }
        public string mailCity { get; set; }
        public string mailState { get; set; }
        public string mailZip { get; set; }
        public string phone { get; set; }
        public string phoneExtension { get; set; }
        public string phone2 { get; set; }
        public string phone2Extension { get; set; }
        public string phone3 { get; set; }
        public string phone3Extension { get; set; }
        public string email { get; set; }
        public string email2 { get; set; }

        public Customer() { }

        public Customer(string custID)
        {
            this.custID = custID;
        }
    }
}
