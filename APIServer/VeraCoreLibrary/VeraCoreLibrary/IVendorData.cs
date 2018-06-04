using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeraWP.VeraCoreLibrary
{
    public interface IVendorData
    {
        int LoadAllVendors();

        bool LoadVendor();

        int LoadConditionalVendors(string condition, string conditionValue);

        bool InsertVendor();

        int InsertMultipleVendors();

        bool UpdateVendor();

        int UpdateMultipleVendors();

        bool RemoveVendor();

        int RemoveMultipleVendors();
    }
}
