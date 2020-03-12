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
var result = ' ';
var i = 0;
 while ( i < fruits.length) {
     result = result.concat(fruits[i]);
     i++;
 }
 console.log(result);
 i = 0;
 for (i ; i< fruits.length ; ++i) {
    console.log(fruits[i].toUpperCase());
 }
 var text = 'La Manzana es Verde';
 console.log(text.toLowerCase());
 console.log(text.substring(text.length-4));
 console.log(text.substring(3,6));
 var $split = text.split(' ');
 console.log($split);
// Function Exercises
function convert ($text){
        var $splited = $text.split(' ');
        var word,word2;
        for (const index in $splited) {
            word =  $splited[index];
            word2 = word.substring(1);
            word2 = word2.toLowerCase();
            $splited[index] = word[0].toUpperCase()+word2;
            // console.log($splited[index]);
        }
        console.log($splited);
}
x = 'I dont know, but its hilarious';
convert(x);


 
