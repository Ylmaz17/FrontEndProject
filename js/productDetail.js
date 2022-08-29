// Product detail (Ürün detay sayfasını her ürüne özel olarak getiriyor.)
// url link sorgusunu main.js de bulunan product add alanından alıyor
$(function() {
  //var id = window.location.search;//?id=1
  let urll = window.location.search
  const idsplit = urll.split("=");
  id = idsplit[idsplit.length-1]

$.ajax({
  //localhost../products/2
  //localhost../products/get?id=2

  dataType: "json",
  url: `${API_URL}Product/${id}`,
  data: "",
  success: function (data) {
    $("#title" ).html(data.productName);
    $("#brand").html(data.brand);
    $("#unitPrice").html(data.unitPrice);
    $("#image").attr("src",data.image1);
    
  }
});
});
// Payment Table Add

// $.ajax({
//   dataType: "json",
//   url: `${API_URL}installments`,
//   data: "",
//   success: function (data) {
//     paymentTable(data);
//   }
// });

// // installmentTable Code

// function paymentTable(installments) {

//   for (var i = 0; i < installments.length; i++) {
//     var tableRef = document
//       .getElementById("installmentTable")
//       .getElementsByTagName("tbody")[0];

//     var installmentCount = document.createTextNode(
//       installments[i].installmentCount
//     );
//     var installmentAmount = document.createTextNode(
//       (installments[i].price / installments[i].installmentCount).toFixed(2)
//     );
//     var productPrice = document.createTextNode(installments[i].price);

//     var newRow = tableRef.insertRow();
//     newRow.insertCell().appendChild(installmentCount);
//     newRow.insertCell().appendChild(installmentAmount);
//     newRow.insertCell().appendChild(productPrice);
//   }
// }
