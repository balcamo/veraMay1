using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeraWP.VeraCoreLibrary
{
    public interface IAccountData
    {
        int LoadAllAccounts();

        bool LoadAccount();

        int LoadConditionalAccounts(string condition, string conditionValue);

        bool InsertAccount();

        int InsertMultipleAccounts();

        bool UpdateAccount();

        int UpdateMultipleAccounts();

        bool RemoveAccount();

        int RemoveMultipleAccounts();
    }
}
