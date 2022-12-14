//product add
//  ürünleri çekip index.html ve category.html ürünleri yazdırıyor.
// Ürün resminde hat var id eklendi
$.ajax({
  dataType: "json",
  url: `${API_URL}Product/getall`,
  data: "",
  success: function (data) {

    if (!data.success) {
      alert(data.message)
      return;
    }
    var data = data.data


    for (var i = 0; i < data.length; i++) {
      var $div = $("<div class='col'><div class='card shadow-sm'><img id='image' src='" + data[i].image1 + "' style='width: auto; height: auto' alt='asus' /><div class='card-body'><p class='card-text' id='cardtitle'>" + data[i].productName + "</p><div class='d-flex justify-content-between align-items-center'><a href='productDetail.html?id=" + data[i].id + "' style='height: 50px; width: 100%'><button type='button'class='btn btn-sm btn-outline-primary justify-content-end'style='height: 50px; width: 100%'>Sepete Ekle</button></a></div></div></div></div>");
      $("#addProduct").append($div);
    }
  }
});
/* url: `${API_URL}products?Id=${id}`,
 url : `${API_URL}product.html?id=5` */
// Page Top Button

$(function () {
  $("#pageTop").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("#pageTop").fadeIn();
    } else {
      $("#pageTop").fadeOut();
    }
  });
  $("#pageTop").click(function () {
    $("body,html").animate({ screenTop: 0 }, 1500);
  });
});

// Password Show   // Tek şifre alanı için çalışıyor iki alan olarak düzeltilmeli

function passwordShow() {
  var x = document.getElementById("userPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// User Login
$("#login").click(function () {

  var mail = $("#userMail").val();
  var password = $("#userPassword").val();
  $.ajax({
    method: "POST",
    contentType: "application/json",
    url: `${API_URL}Customer/login`,
    data: JSON.stringify({
      "email": mail,
      "password": password
    }),
    success: function (data) {
      if (data == null) {

        alert("Hatalı Mail adresi veya Parola");
      }
      else {
        alert(data.email + " Giriş Başarılı Hoşgeldiniz");
        window.location = 'userHomePage.html'
      }
    }
  });
});