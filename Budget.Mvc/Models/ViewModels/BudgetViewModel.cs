using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Budget.Mvc.Models.ViewModels
{
    public class BudgetViewModel
    {
        public List<Transaction>? Transactions { get; set; }
        public CategoriesViewModel Categories { get; set; }
        public InsertTransactionViewModel InsertTransaction { get; set; }
        public InsertCategoryViewModel InsertCategory { get; set; }
        public FilterParametersViewModel? FilterParameters { get; set; }  
    }
}

