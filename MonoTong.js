/*A program to output the number of vowels in the argument's string of a function*/
//By Fasasi Sherif

/* Program begins */
function myfunc(word){
  var x = ["sherif"]
  //sherif is the argument
  var i = 0;
  var b = 0;
  //This for loop loops through all the letters in 'sherif'
for (; i<=5; i++){
    a = x[0][i];
    if ((a) == (['a'])){
       b++;
      }
    if ((a) == (['e'])){
       b++;
      }
    if ((a) == (['i'])){
       b++;
    }
    if ((a) == (['o'])){
       b++;
      }
    if ((a) == (['u'])){
       b++;
      }
  }
  //The for loop end here
  console.log("The argument of the function myfunc which is 'sherif' has " + b + " vowels") 
}

myfunc ("sherif")
