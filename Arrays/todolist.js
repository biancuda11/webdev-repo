let todos = ['buy new turtle'];

let input = prompt("what would you like to do?")


while (input !== 'quit') {
  if (input ==='list') {
    console.log(todos);
  } else if (input ==='new') {
    let addition = prompt("Enter New To-do");
    todos.push(addition)
  }
  input = prompt("what would you like to do?")
}

console.log("okay, you quit the app");
