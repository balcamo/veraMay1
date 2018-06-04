using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeraWP.VeraCoreLibrary
{
    public abstract class MeterReading
    {
        public string readingID { get; set; }
        public decimal reading { get; set; }
        public DateTime readDate { get; set; }
        public TimeSpan readTime { get; set; }

        public MeterReading() { }
        
        public MeterReading(string readingID)
        {
            this.readingID = readingID;
        }
    }
}
