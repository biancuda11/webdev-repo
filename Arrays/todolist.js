let todos = ['buy new turtle'];

let input = prompt("what would you like to do?")


while (input !== 'quit') {
  if (input ==='list') {
    todos.forEach(function(todo, i){
      console.log(i + ': '+ todo);
    })
  } else if (input ==='new') {
    let addition = prompt("Enter New To-do");
    todos.push(addition)
  }
  input = prompt("what would you like to do?")
} else if (input === "delete") {
  index = prompt("enter index of todo to delete");
}

console.log("okay, you quit the app");
