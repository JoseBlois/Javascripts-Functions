/*
var num1 = 5;
var num2 = 8;
if (num1 < num2){
    alert('num1 is less than num2');
}
if (num2 > 0){
    alert('num2 is positive');
}
if ((num1 < 0) || (num1 != 0) ){
    alert('num 1 is negative or num1 is other than 0');
}
if (((num1 + 1) > num2 )){
    alert('Incrementing the value of num1 by 1 makes it larger than num2');
}*/
var fruits = ['Banana','Apple','Orange'];
for (const i in fruits) {
    console.log(fruits[i]);
}
fruits.sort(); //necesita los parentesis.
console.log(fruits);
fruits.push('Grape');
fruits.unshift('Pinapple');
console.log(fruits);
fruits.pop();
console.log('After pop() ' + fruits);
fruits.shift();
console.log('After shift() '+fruits);
fruits.reverse();
console.log(fruits);
var result = '';
var i = 0;
 while ( i < fruits.length) {
     result = result + fruits[i];
     i++;
 }
 console.log(result);
 i = 0;
 for (i ; i< fruits.length ; ++i) {
    console.log(fruits[i].toUpperCase());
 }