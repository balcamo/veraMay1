using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using System.IO;
using System.Data;
using System.Data.SqlClient;

namespace VeraWP.VeraCoreLibrary
{
    public class FileParser
    {

    }

    public class SourceFile
    {
        public string fileName { get; set; }
        public string filePath { get; set; } //absolute path to the source file
        public string fileType { get; set; } //layout of file such as CSV
        public string fileSource { get; set; } //provider for the file determines the field mapping such as Metavante
        public string fileDestination { get; set; } //system that will import the file such as Springbrook

        public SourceFile(string sourceFile)
        {
            if (File.Exists(sourceFile))
            {
                filePath = Path.GetFullPath(sourceFile);
                fileName = Path.GetFileName(sourceFile);
            }
            else
                throw new FileNotFoundException("Source file not found at location provided.");
        }
    }
}
