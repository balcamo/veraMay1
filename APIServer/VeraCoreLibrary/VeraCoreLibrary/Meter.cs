using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeraWP.VeraCoreLibrary
{
    public abstract class Meter
    {
        public string meterID { get; set; }
        public string baseType { get; set; }
        public string manufacturer { get; set; }
        public string model { get; set; }

        public Meter() { }

        public Meter(string meterID)
        {
            this.meterID = meterID;
        }
    }
}
