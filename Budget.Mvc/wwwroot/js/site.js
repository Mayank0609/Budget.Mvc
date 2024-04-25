$("#openCategoryModalBtn").on("click", function () {
    $("#addCategoryModal").modal("show");
});

$("#openTransactionModalBtn").on("click", function () {
    $("#addTransactionModal").modal("show");
});

$(".openDeleteTransactionModalBtn").on("click", function () {
    var id = $(this).closest('tr').find('td:first').html();
    $('#deleteTransactionForm').append(`<input type="hidden" name="id" value="${id}">`);
    $("#deleteTransactionModal").modal("show");
});

$(".openDeleteCategoryModalBtn").on("click", function () {
    var id = $(this).closest('tr').find('td:first').html();
    $('#deleteCategoryForm').append(`<input type="hidden" name="id" value="${id}">`);
    $("#deleteCategoryModal").modal("show");
});

$("#addCategoryBtn").click(function () {
    var name = $("#Name").val();
    var modalSuccess = $("#addCategoryModalSuccess");
    var modalForm = $("#addCategoryForm")

    $.ajax({
        url: 'Home/AddCategory',
        type: 'POST',
        data: {
            name: name
        },
        dataType: 'json',
        success: function (response) {
            modalSuccess.removeClass("d-none");
            modalForm.addClass("d-none");
        }
    });
});

$(".openUpdateTransactionModalBtn").on("click", function () {
    var id = $(this).closest('tr').find('td:first').html();
    var date = $(this).closest('tr').find('td:eq(1)').html();
    var amount = $(this).closest('tr').find('td:eq(2)').html();
    var name = $(this).closest('tr').find('td:eq(3)').html();
    var categoryId = $(this).closest('tr').find('td:eq(5)').html();
    var transactionType = $(this).closest('tr').find('td:eq(6)').html();

    $('#insert-transaction-form #Id').val($.trim(id));
    $('#insert-transaction-form #Date').val($.trim(date));
    $('#insert-transaction-form #Amount').val($.trim(amount));
    $('#insert-transaction-form #Name').val($.trim(name));
    $(`#insert-transaction-form #CategoryId option[value=${categoryId}]`).attr('selected', 'selected');
    $('#insert-transaction-form #TransactionType').find(`option:contains('${$.trim(transactionType)}')`).attr('selected', 'selected');

    $("#addTransactionModal").modal("show");
});

$(".openUpdateCategoryModalBtn").on("click", function () {
    var id = $(this).closest('tr').find('td:first').html();
    var name = $(this).closest('tr').find('td:eq(1)').html();

    $('#insert-category-form #Category_Id').val($.trim(id));
    $('#insert-category-form #Category_Name').val($.trim(name));

    $("#addCategoryModal").modal("show");
});

$("#manageCategoriesBtn").on("click", function () {
    $("#categories").removeClass("d-none");
    $("#backToTransactionsBtn").removeClass("d-none");
    $("#records").addClass("d-none");
    $("#openTransactionModalBtn").addClass("d-none");
    $("#openCategoryModalBtn").removeClass("d-none");
    $("#manageCategoriesBtn").addClass("d-none");
    $("#filter-area").addClass("d-none");
});

$("#backToTransactionsBtn").on("click", function () {
    $("#categories").addClass("d-none");
    $("#backToTransactionsBtn").addClass("d-none");
    $("#records").removeClass("d-none");
    $("#openTransactionModalBtn").removeClass("d-none");
    $("#openCategoryModalBtn").addClass("d-none");
    $("#manageCategoriesBtn").removeClass("d-none");
    $("#filter-area").removeClass("d-none");
});

$("#close-delete-category-modal").on("click", function () {
    $("#deleteCategoryModal").modal("hide");
});

$("#close-delete-transaction-modal").on("click", function () {
    $("#deleteTransactionModal").modal("hide");
});