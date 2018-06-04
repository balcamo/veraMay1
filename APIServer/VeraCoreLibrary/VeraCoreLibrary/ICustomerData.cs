using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeraWP.VeraCoreLibrary
{
    public interface ICustomerData
    {
        int LoadAllCustomers();

        bool LoadCustomer();

        int LoadConditionalCustomers(string condition, string conditionValue);

        bool InsertCustomer();

        int InsertMultipleCustomers();

        bool UpdateCustomer();

        int UpdateMultipleCustomers();

        bool RemoveCustomer();

        int RemoveMultipleCustomers();
    }
}
