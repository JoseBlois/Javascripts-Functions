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
// Exercise 5
 function convert (_text){
     var rest = _text.substring(1);
    var word = _text[0].toUpperCase()+rest;
     return word ;
 }
// Exercise 6
function convertEverithing ($text){
        var $splited = $text.split(' ');
        var word,word2;
        for (const index in $splited) {
            word =  $splited[index];
            word2 = word.substring(1);
            word2 = word2.toLowerCase();
            $splited[index] = word[0].toUpperCase()+word2;
            // console.log($splited[index]);
        }
        var joined = $splited.join(' ');
        return joined;
}
x = 'no just fresh ingredients on pan';
console.log(convert(x));
console.log(convertEverithing(x));
//Exercise 7
function vocalCount(sentence){
    var counter = 0;
    for (const i in sentence) {
        if (sentence[i] == 'a' || sentence[i] == 'A' ){
            counter++;
        }
        else if (sentence[i] == 'e' || sentence[i] == 'E' ){
                counter++;
            }
        else if (sentence[i] == 'i' || sentence[i] == 'I' ){
                    counter++;
                }
        else if (sentence[i] == 'o' || sentence[i] == 'O' ){
                        counter++;
                }
        else { if (sentence[i] == 'u' || sentence[i] == 'U' ){
                            counter++;
                }
            }   
    }
    return counter;
}
var z = 'maybe you should take a look at the console';
//If vocalCount works correctly it should show 16.
console.log(' \'maybe you should take a look at the console\' has '+vocalCount(z)+' vocals in total');
//Exercise 8
// miNumero va a tener valor de 15
// miArray va a ser igual a ['Un texto',true, 4];



 
