          (function () {
            'use strict'
          
            var forms = document.querySelectorAll('.needs-validation')
          
            
            Array.prototype.slice.call(forms)
              .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                  if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                  }

                  form.classList.add('was-validated')
                }, false)
              })
          })();

          function denetle(){
            var kız = document.getElementsByName("cinsiyet")[0].checked;
            var erkek = document.getElementsByName("cinsiyet")[1].checked;
            var bellidegi = document.getElementsByName("cinsiyet")[2].checked;
            if(kız){
              cinsiyet="kız";
            }else if(erkek){
              cinsiyet="erkek";
            }else{
              cinsiyet="belirtmek istemiyor";
            }

            var acil1 = document.getElementsByName("acele")[0].checked;
            var acil2 = document.getElementsByName("acele")[1].checked;
            var acil3 = document.getElementsByName("acele")[2].checked;
            var acil4 = document.getElementsByName("acele")[3].checked;
            var acil5 = document.getElementsByName("acele")[4].checked;
            var aciliyet;
            if(acil1){
              aciliyet="Acelesi Yok";
            }
            else if(acil2){
              aciliyet="Biraz Acil";
            }
            else if(acil3){
              aciliyet="Acil";
            }
            else if(acil4){
              aciliyet="Çok Çok Acil";
            }else{
              aciliyet="Ödevim Var Çok Acil";
            }

            var area = document.getElementById("area").value;

            var html = document.getElementById("html").checked;
            var js = document.getElementById("js").checked;
            var react = document.getElementById("react").checked;
            var php = document.getElementById("php").checked;
            var dil="";
            if(html){
              dil=dil+"html ";
            }
            if(js){
              dil=dil+"js ";
            }
            if(react){
              dil=dil+"react ";
            }
            if(php){
              dil=dil+"php";
            }

            
            var emailtext;
            var emailkontrol;
            emailtext = document.getElementById("email").value;
            emailkontrol = /.+@.+\.+./;
            var adsoyad = document.getElementById("adsoyad").value;
            var email = document.getElementById("email").value;
            var adres1 = document.getElementById("adres1").value;
            var adres2 = document.getElementById("adres2").value;
            var adres3 = document.getElementById("adres3").value;
            var ulke = document.getElementById("slc").value;
            
    
            if(adsoyad == ""){
              alert("AD SOYAD BOŞ BIRAKILAMAZ");
            }
            if( email == ""){
              alert("E-MAİL BOŞ BIRAKILAMAZ");
            }
            else if(!emailkontrol.test(emailtext)){
              alert("MAİL TİPİ YANLIŞ");
            }
            if(adres1 == ""){
              alert("ŞEHİR BOŞ BIRAKILAMAZ");
            }
            if(adres2 == ""){
              alert("İLÇE BOŞ BIRAKILAMAZ");
            }
            if(adres3 == ""){
              alert("POSTA KODU BOŞ BIRAKILAMAZ");
            }
            
            if(ulke==0){
              ulke="Türkiye";
            }else if(ulke==1){
              ulke="Almanya";
            }else if(ulke==2){
              ulke="Fransa";
            }else if(ulke==3){
              ulke="Suriye";
            }
            else if(ulke==4){
              ulke="Ukrayna";
            }

            if(!(adsoyad=="" || email=="" || adres1 == "" || adres2 =="" || adres3 == "" || emailkontrol.test(emailtext)==false)){
              var pencere = window.open("","","width=300, height=400,top=0,left=0");
                  pencere.document.write("<p>Ad-Soyad : "+adsoyad+"</p>");
                  pencere.document.write("<p>E-mail   : "+email+"</p>");
                  pencere.document.write("<p>Şehir    : "+adres1+"</p>");
                  pencere.document.write("<p>İlçe     : "+adres2+"</p>");
                  pencere.document.write("<p>Postakodu: "+adres3+"</p>");
                  pencere.document.write("<p>Ulke: "+ulke+"</p>");
                  pencere.document.write("<p>Aciliyet : "+aciliyet+"</p>");
                  pencere.document.write("<p>mesaj   : "+area+"</p>");
                  pencere.document.write("<p>Bildiği diller: "+dil+"</p>");
              
            }
              
            
          }
