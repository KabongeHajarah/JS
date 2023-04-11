//Write a function that takes in a string and returns it when reversed
//let food = “eating”

function reverse(word) {
    return word.split('').reverse().join('');
  }
  
  let food = "eating";
  console.log(reverse(food));



                       //2
//Write a function that takes in the following array and consoles the target if it is found else
//null
//let num = [2,8,0,23,5,45,76]
//Target = 23
 
function merge(num){
    if (num.length<=1) {
        return num
    }
let middle=Math.floor(num.length/2);
let left= num.slice(0,middle);
let right=num.slice(middle);

return mergeSort(merge(left),merge(right))

}

function mergeSort (left,right){
    let sort=[];
    while(left.length && right.length){
    if(left[0]<right[0]){
         sort.push(left.shift())
    }else{
         sort.push(right.shift())
    }
    }
    
    return [...sort,...left,...right]
    }
    

    function binary(num, Target){
        let left=0;
        let right= num.length -1;
        while  (left<=right){
            let middle= Math.floor((left + right)/2);
        
            if (num[middle]===Target){
        return Target
            }
            else if ( num[middle]<Target){
                left= middle +1;
            }
            else {
                right=middle -1;
            }
        
        }return null
        
        }
        let num = [2,8,0,23,5,45,76];
        let Target = 23;
 console.log(merge(num));
       console.log( binary(num, Target));



             //3
       //Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
for (let year = 2000; year <= 2023; year++) {
    if (isLeapYear(year)) {
      console.log(year + " is a leap year");
    } else {
      console.log(year + " is not a leap year");
    }
  }


function isLeapYear(year) {
    if (year % 4 === 0) {
     return true
    }
    return false;
}

                    //4
//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
for (let i = 0; i <= 100; i++) {
    let output ="";
  
    if (i % 3 === 0) {
      output += "Fizz";
    }
  
    if (i % 5 === 0) {
      output += "Buzz";
    }
  
    if (output === "") {
      output = i;
    }
  
    console.log(output);
  }


  //Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
//let numArray = [12,87,45,75,23,64,73]
function productNumbers(numArray){
for (let i = 0; i < numArray.length; i++) {
    
    console.log(numArray[i]*4)
}

}
let numArray = [12,87,45,75,23,64,73];
productNumbers(numArray)


//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]

function convertNumbers(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      const num = Number(arr[i]);
      if (!isNaN(num)) {
        results.push(num);
      }
    }
    return results;
  }
  
  const nums = ["10", "24", "45", "56", "67"];
  const convertedNums = convertNumbers(nums);
  
  console.log(convertedNums); 

 
  
  
  
  

        
        


        