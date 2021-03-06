﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace VeraWP.VeraCoreLibrary
{
    public class SQLDataHandler
    {
        private string dataSource;
        private string dataConnectionString;
        public string dataName { get; set; }
        public string tableName { get; set; }

        public SQLDataHandler(string dataSource)
        {
            this.dataSource = dataSource;
            SetDataConnectionString();
        }

        public void SetDataConnectionString()
        {
            switch (dataSource)
            {
                case "Springbrook":
                    dataConnectionString = ConfigurationManager.ConnectionStrings["Springbrook"].ConnectionString;
                    break;
                case "Azure":
                    dataConnectionString = ConfigurationManager.ConnectionStrings["Azure"].ConnectionString;
                    break;
                case "GIS":
                    dataConnectionString = ConfigurationManager.ConnectionStrings["GIS"].ConnectionString;
                    break;
            }
        }

        public string GetDataConnectionString()
        {
            return dataConnectionString;
        }
    }
}
