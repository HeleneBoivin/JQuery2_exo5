$(function(){
  $("#lastName").focus(function(){
    $("#lastName").css("border" , "1px solid green");
  });
  $("#firstName").focus(function(){
    $("#firstName").css("border" , "1px solid green");
});
$(function(){
  $("#lastName").blur(function(){
    $("#lastName").css("border" , "1px solid red");
  });
  $("#firstName").blur(function(){
    $("#firstName").css("border" , "1px solid red");
});
});
});

// $(function(){
// $('input').focus(function(){
// $(this).css('border' , '1px solid green');
// });
// $('input').blur(function(){
// $(this).css('border' , '1px solid red');
// });
// });
