using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace Budget.Mvc.Models
{
	public class Category
	{
		public int Id { get; set; }

		[Required]
		[Remote("IsUnique", "Home")]
		public string Name { get; set; }
	}
}

