function getArray(array, index) {
  if (index < 0 || index >= array.length) {
    throw new Error("Index out of bounds");
  }
  return array[index];
}

function add(a, b) {
  return a + b;
}

let myArray = [1, 2, 3, 4, 5];
let index = 6;

try {
  //Improved input validation
  if(index >=0 && index < myArray.length){
    let element = getArray(myArray, index);
    let sum = add(element, 10);
    console.log(sum);
  } else {
    console.log("Index is out of bounds");
  }
} catch (error) {
  console.error(error.message);
} 