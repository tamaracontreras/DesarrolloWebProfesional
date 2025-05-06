$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm() {
    var form = document.getElementById("contactForm");

    emailjs.sendForm("service_r5s5pfq", "template_qh862aw", form)
      .then(function() {
          formSuccess();
      }, function(error) {
          formError();
          submitMSG(false, "Error al enviar: " + error.text);
      });
}


function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Mensaje enviado!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "p text-center tada animated text-success";
    } else {
        var msgClasses = "p text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}