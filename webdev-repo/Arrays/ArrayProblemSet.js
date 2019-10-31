let lister = [1,2,3,4,5,6]

function printReverse(list) {
  list = list.reverse()
  for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}
printReverse(lister)

let uniform = [1,1,1,1,1,1,1,1]
let non_uniform = [1,1,1,1,1,2,2]

function isUniform(array) {
  let first = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] !== first) {
      return false
    }
  }
  return true
}


// sum Array

function sumArray(arr) {
  let total = 0
  for (var i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total;
}

//  MAX

function max(arr) {
  let max = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
