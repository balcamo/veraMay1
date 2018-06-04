using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeraWP.VeraCoreLibrary
{
    public interface IMeterData
    {
        int LoadAllMeters();

        bool LoadMeter();

        int LoadConditionalMeters(string condition, string conditionValue);

        bool InsertMeter();

        int InsertMultipleMeters();

        bool UpdateMeter();

        int UpdateMultipleMeters();

        bool RemoveMeter();

        int RemoveMultipleMeters();
    }
}
