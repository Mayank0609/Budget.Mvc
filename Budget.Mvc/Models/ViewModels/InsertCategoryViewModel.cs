using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace Budget.Mvc.Models.ViewModels
{
	public class InsertCategoryViewModel
	{
		public int Id { get; set; }

		[Required]
		[Remote("IsUnique", "Home")]
		public string Name { get; set; }
	}
}

