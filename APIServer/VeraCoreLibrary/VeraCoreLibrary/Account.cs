using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeraWP.VeraCoreLibrary
{
    public abstract class Account
    {
        public string acctID { get; set; }
        public decimal acctBalance { get; set; }


        public Account() { }

        public Account(string acctID)
        {
            this.acctID = acctID;
        }
    }
}
