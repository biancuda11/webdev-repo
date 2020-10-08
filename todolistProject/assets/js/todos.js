// check off specific todos by clicking
$("ul").on("click", "li",function(){
    $(this).toggleClass("completed");
});

// click on X to delete TODO
$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(function() {
      $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which===13) {
    // grabbing new todo text from input
    var todoText = $(this).val()
    $(this).val("")
    // create new LI and add to UL
    $('ul').append("<li><span>X</span> "+ todoText + "</li>")
  }
});
