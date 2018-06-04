using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeraWP.VeraCoreLibrary
{
    public abstract class Bank
    {
        public string bankID { get; set; }
        public string bankName { get; set; }
        public string attentionName { get; set; }
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
        public string website { get; set; }
        public string route { get; set; }
        public string transfer { get; set; }

        public Bank() { }

        public Bank(string bankID)
        {
            this.bankID = bankID;
        }
    }
}
