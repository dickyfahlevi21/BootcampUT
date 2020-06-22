// Reverse
let input = "Input Kata!"; //Input ur words
let result = ''
let reverse = ''
let length = input.length
let i = 0;
while (i < length) {
    result += input.charAt(i)
    i++;
}
while (i >= 0) {
    reverse += input.charAt(i)
    i--;
}
console.log(reverse)