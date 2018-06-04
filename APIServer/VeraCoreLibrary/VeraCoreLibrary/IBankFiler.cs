using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeraWP.VeraCoreLibrary
{
    public interface IBankFiler
    {
        int LoadAll();

        bool LoadSingle();

        int LoadConditional(string condition, string conditionValue);

        bool InsertSingle();

        int InsertMultiple();

        bool UpdateSingle();

        int UpdateMultiple();

        bool RemoveSingle();

        int RemoveMultiple();
    }
}
