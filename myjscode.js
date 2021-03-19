$(function () {
    $("#myForm").submit(handleFormSubmit);
  });
  
  function handleFormSubmit(e) {
    var isvalid = true;
    var naam = $("#name").val();
    var pass = $("#password").val();
    var cpass = $("#confirm_password").val();

    $("#name").removeClass("error");
    $("#password").removeClass("error");
    $("#confirm_password").removeClass("error");



    if(naam.length <= 4)
    {
        $("#name").addClass("error");
        // $( "<p>Error</p>" ).insertAfter( "#name" );
        alert("Name must be greater than 4");
        isvalid = false;


    }
    if(pass.length < 8)
    {
        $("#password").addClass("error");
        alert("Password must be 8 character or long");
        isvalid = false;
    }
    if(cpass.length != pass.length || cpass.length < 8)
    {
        $("#confirm_password").addClass("error");
        alert("Password must match and greater than or equal 8");
        isvalid = false;
    }
    if(isvalid == false )
    {
        e.preventDefault();
        return;
    }
    else{
        alert("Form is being submitted");
    }
  }