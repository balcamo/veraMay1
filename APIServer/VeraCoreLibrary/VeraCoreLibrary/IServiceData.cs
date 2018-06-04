using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeraWP.VeraCoreLibrary
{
    public interface IServiceData
    {
        int LoadAllServices();

        bool LoadService();

        int LoadConditionalServices(string condition, string conditionValue);

        bool InsertService();

        int InsertMultipleServices();

        bool UpdateService();

        int UpdateMultipleServices();

        bool RemoveService();

        int RemoveMultipleServices();
    }
}
