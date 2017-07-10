//check off specific tasks by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on x to delete task
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grab new task text from input
    var newTask = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTask + "</li>")
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
