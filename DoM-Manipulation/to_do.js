var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseover", function(){
    this.classList.add('selected');
  });
  lis[i].addEventListener("mouseout", function(){
    this.classList.remove('selected');
  });

  lis[i].addEventListener('click', function(){

    this.classList.toggle('done');
  })
}

//
// first_li.addEventListener("mouseover", function(){
//   this.style.color = "green";
// })
//
//
// first_li.addEventListener("mouseout", function(){
//   this.style.color = "black";
// });
