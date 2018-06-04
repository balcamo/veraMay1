using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeraWP.VeraCoreLibrary
{
    public abstract class BankFile
    {
        //Properties
        public string bankFileID { get; set; }
        public string merchantID { get; set; }
        public string merchantName { get; set; }
        public string accountNumber { get; set; }
        public string transactionType { get; set; }
        public DateTime transactionDate { get; set; }
        public decimal transactionAmount { get; set; }
        public string transactionDescription { get; set; }

        public BankFile() { }

        public BankFile(string bankFileID)
        {
            this.bankFileID = bankFileID;
        }
    }
}
