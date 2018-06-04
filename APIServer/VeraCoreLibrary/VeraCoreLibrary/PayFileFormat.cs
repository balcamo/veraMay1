using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Globalization;

namespace VeraWP.VeraCoreLibrary
{
    public class PayTransaction
    {
        //Properties
        public string merchantID { get; set; }
        public string merchantName { get; set; }
        public string ubAcct { get; set; }
        public string custName { get; set; }
        public string address { get; set; }
        public string address2 { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zip { get; set; }
        public string payDescription { get; set; }
        public string payAmount { get; set; }
        public string payDate { get; set; }
        public string returnReason { get; set; }
        public string returnDate { get; set; }
        public string adjustAmount { get; set; }
        public string originalPayDate { get; set; }

        //Constructors

        //Methods
        public bool SBFormatPayFile(string bankFile, string processFile, string logFileName)
        {
            string srLine = string.Empty;
            string custNo = string.Empty;
            string custSequence = string.Empty;
            string payment = string.Empty;
            DateTime paymentDate;
            string logEntry = string.Empty;
            int readLineCount;
            int writeLineCount;
            decimal amount = 0;
            bool result = false;
            var log = new Scribe(logFileName);

            if (File.Exists(bankFile))
            {
                using (StreamReader srPay = new StreamReader(bankFile))
                {
                    readLineCount = 0;
                    using (StreamWriter swPay = new StreamWriter(processFile))
                    {
                        writeLineCount = 0;
                        while ((srLine = srPay.ReadLine()) != null)
                        {
                            readLineCount++;
                            if (readLineCount == 1)
                                continue;
                            srLine = srLine.Replace("\"", string.Empty);
                            string[] srField = srLine.Split(',');
                            merchantID = srField[0];
                            merchantName = srField[1];
                            ubAcct = srField[2];
                            custName = srField[3];
                            address = srField[4];
                            address2 = srField[5];
                            city = srField[6];
                            state = srField[7];
                            zip = srField[8];
                            payDescription = srField[9];
                            payAmount = srField[10];
                            payDate = srField[11];
                            returnReason = srField[12];
                            returnDate = srField[13];
                            adjustAmount = srField[14];
                            originalPayDate = srField[15];

                            custNo = Int32.Parse(ubAcct.Substring(0, 6)).ToString();
                            custSequence = Int32.Parse(ubAcct.Substring(6)).ToString();
                            payment = payAmount.Replace(".", string.Empty);
                            paymentDate = DateTime.ParseExact(payDate, "yyyyMMdd", CultureInfo.InvariantCulture);
                            amount += decimal.Parse(payAmount);

                            swPay.WriteLine(custNo + "," + custSequence + "," + payment + "," + paymentDate.ToString("MMddyyyy"));
                            writeLineCount++;
                        }
                    }
                }
                logEntry = bankFile + " found and processed. " + readLineCount + " lines read. " + writeLineCount + " lines written. Total payments: " + amount + " Target file: " + processFile;
                result = true;
            }
            else
                logEntry = "Bank file not found.";
            log.WriteLogEntry(logEntry);
            return result;
        }
    }
}