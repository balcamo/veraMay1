using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeraWP.VeraCoreLibrary
{
    public interface IMeterReadingData
    {
        int LoadAllMeterReadings();

        bool LoadMeterReading();

        int LoadConditionalMeterReadings(string condition, string conditionValue);

        bool InsertMeterReading();

        int InsertMultipleMeterReadings();

        bool UpdateMeterReading();

        int UpdateMultipleMeterReadings();

        bool RemoveMeterReading();

        int RemoveMultipleMeterReadings();
    }
}
