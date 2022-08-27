// Şehir alanı ve şehre göre ilçe alanını getiriyor.
// Sorun ilçe alanı her seferinde temizlenmesi gerekir.

$.ajax({
  dataType: "json",
  url: `${API_URL}city`,
  data: "",
  success: function (cityData) {
    getCitys(cityData);
  }
});
function getCitys(cityData) {
  $(document).ready(function () {
    $.each(cityData, function (index, value) {
      $('#cityId').append($('<option>', {
        value: value.id,
        text: value.cityName
      }));
    });
  });
};
$("#cityId").change(function () {
  var cityId = $("#cityId").val();
  $.ajax({
    dataType: "json",
    url: `${API_URL}District/${cityId}`,
    //url: `http://localhost:5166/api/District/${cityId}`,
    data: "",
    success: function (districtData) {
      getdistrict(districtData);
    }
  })

});
function getdistrict(districtData) {
  $(document).ready(function () {
    $.each(districtData, function (index, value) {
      $('#districtId').append($('<option>', {
        value: value.id,
        text: value.districtName
      }));
    });
  });
}

// Kullanıcı Kayıt
//Belirtilen alanlar için kayıt işlemi sorunsuz çalışıyor
$("#register").on("click", function (event) {
  $.ajax({
    method: "POST",
    contentType: "application/json",
    url: `${API_URL}User/register`,
    //url: "http://localhost:5166/api/User",
    data: JSON.stringify
      ({
        "name": $.trim($("input[name='userName']").val()),
        "surname": $.trim($("input[name='userSurname']").val()),
        "email": $.trim($("input[name='userMail']").val()),
        "password": $.trim($("input[name='userPassword']").val()),
        "birthDate": $.trim($("input[name='birthDate']").val()),
        "phone": $.trim($("input[name='userPhone']").val()),
        "profilImage": $.trim($("input[name='userPhoto']").val()),
        "cityId": $.trim($("#cityId").val()),
        "districtId": $.trim($("#districtId").val()),
        "addressText": $.trim($("input[name='addressText']").val())

      }),
    success: function () {
      // Yönlendirme yap
      //window.location({Site_URL}`index.html`)
      alert("Kayıt Başarılı");

    }
  });
});



