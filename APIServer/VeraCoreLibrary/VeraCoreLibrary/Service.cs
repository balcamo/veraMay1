using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeraWP.VeraCoreLibrary
{
    public abstract class Service
    {
        public string serviceID { get; set; }
        public string serviceName { get; set; }

        public Service() { }

        public Service(string serviceID)
        {
            this.serviceID = serviceID;
        }
    }
}
