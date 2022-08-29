$.ajax({
    method: "GET",
    dataType: "json",
    url: `${API_URL}Product`,
    data: "",
    success: function (data) {
        products(data);
    }
});
function products(product) {

    for (var i = 0; i < product.length; i++) {
        var tableRef = document
            .getElementById("productsTable")
            .getElementsByTagName("tbody")[0];

        var id = document.createTextNode(product[i].id);
        var productName = document.createTextNode(product[i].productName);
        var unitPrice = document.createTextNode(product[i].unitPrice);
        var stock = document.createTextNode(product[i].stock);
        var brand = document.createTextNode(product[i].brand);
        var categoryName = document.createTextNode(product[i].categoryName);

        var newRow = tableRef.insertRow();
        newRow.insertCell().appendChild(id);
        newRow.insertCell().appendChild(productName);
        newRow.insertCell().appendChild(categoryName);
        newRow.insertCell().appendChild(brand);
        newRow.insertCell().appendChild(stock);
        newRow.insertCell().appendChild(unitPrice);
    }
}

$("#newProductAdd").on("click", function () {
    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: `${API_URL}Product`,
        data: JSON.stringify({
            "productName": $.trim($("input[name='productName']").val()),
            "brand": $.trim($("input[name='productBrand']").val()),
            "stock": $.trim($("input[name='productStock']").val()),
            "unitPrice": $.trim($("input[name='productUnitPrice']").val()),
            "image1": $.trim($("input[name='image1']").val()),
            "categoryId": $("#categoryId").val()
        }),
        success: function () {
            alert("Kayıt Başarılı");
            window.location = `${Site_URL}products.html`
        }
    })
});
$.ajax({
    dataType: "json",
    url: `${API_URL}Categories`,
    data: "",
    success: function (categoriesData) {
        getcategories(categoriesData);
    }
});
function getcategories(categoriesData) {
    $(document).ready(function () {
        $.each(categoriesData, function (index, value) {
            $('#categoryId').append($('<option>', {
                value: value.id,
                text: value.categoryName
            }));
        });
    });
};