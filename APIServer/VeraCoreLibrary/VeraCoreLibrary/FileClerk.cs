using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.ComponentModel;

namespace VeraWP.VeraCoreLibrary
{
    public class FileClerk
    {
        //Properties
        public string fileName { get; set; }
        public string filePath { get; set; }
        public string fileExt { get; set; }
        public string fileFilter { get; set; }
        public string fileFullName { get; set; }
        public string fileResult { get; set; }

        //Constructors
        public FileClerk()
        {
        }

        public FileClerk(string fullName)
        {
            fileFullName = fullName;
        }

        //Methods
        public void fileBuildFromList(List<string> fileData, string fileName)
        {
            try
            {
                using (StreamWriter targetStream = new StreamWriter(fileName))
                {
                    foreach (string fileLine in fileData)
                    {
                        targetStream.WriteLine(fileLine);
                    }
                }
            }
            catch
            {
            }
            finally
            {
            }
        }

        public int FixLocation()
        {
            int i = 0;

            if (File.Exists(fileFullName))
            {
                string[] lines = File.ReadAllLines(fileFullName);
                i = lines.Count();
                try
                {
                    using (StreamWriter writer = new StreamWriter(fileFullName))
                    {
                        foreach (string line in lines)
                        {
                            string[] fields = line.Split(',');
                            if (fields[2].Length == 0)
                                fields[2] = "UNKNOWN";
                            string newLine = string.Join(",", fields);
                            writer.WriteLine(newLine);
                        }
                    }
                }
                catch
                {
                    i = -1;
                }
            }
            else
                i = -1;
            return i;
        }
    }
}
