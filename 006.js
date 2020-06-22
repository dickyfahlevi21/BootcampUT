// Recursive
let input = 8; //Input your number!
if (isNaN(input)) {
  alert("input harus angka");
}
let i = parseInt(input);
let result = "";
while (i > 0) {
  result += i + " ";
  i--;
}
console.log(result)