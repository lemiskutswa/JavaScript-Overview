// const buttonElement = document.querySelector('.js-button');

//  let result = buttonElement.classList.contains('js-button');

 const gamingButton = document.querySelector('.gaming-btn');

 function toggleButton() {
     const checker = gamingButton.classList.contains('is-toggled');
    if (!checker) {
         gamingButton.classList.add('is-toggled');
     } else {
        gamingButton.classList.remove('is-toggled');
     }
    
}

// const threeButtons = document.querySelector('.on-off-btns');
// function techButtons() {
//     const checkup = threeButtons.classList.contains('is-on');
//     if(!checkup) {
//         threeButtons.classList.add('is-on');
//     } else {
//         threeButtons.classList.remove('is-on');
//     }
// }

// const newArray = [10, 20, 30];

// newArray[2] = 99;
// console.log(newArray);


// const array = [1, 3, 14, 21];
// function getLastValue() {
//     const lastIndex = array.length-1;
//     return array[lastIndex]; 
// }

// const myfunction = getLastValue();

// console.log(myfunction);

// const swappableArray = [0, 1, 2, 3, 4, 5];
// function swapArrays() {
//     const lastIndex = swappableArray.length-1; 
//     const firstValue = lastIndex; 

//     const value1 = swappableArray[0];
//     const lastValue = value1; 

//     return swappableArray; 
// }

// console.log(swapArrays()); 

// for (let i = 0; i <=10; i+=2) {
//      console.log(i);   
// } 

// for (let i = 5; i >= 0; i --) {
//     console.log(i);
// }

// let i = 0;

// while(i<=10) {
//     console.log(i);
//     i+=2;
// }  

// const nums = [1, 2, 3, 4];

// const numsDoubled = [];

// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i]
//     console.log(num);

//     numsDoubled.push(num * 2);
//     console.log(numsDoubled);
// }

// const numbers = [1, 2, 3];

// const numbersAdded = [];

// for (let i = 0; i < numbers.length; i++) {
//     let values = numbers[i];

//     numbersAdded.push(values +=1);
//     console.log(numbersAdded);
// }
const arrayTwo = [];
function addNum(array, num) {
    for (let i = 0; i < array.length; i++) {
        arrayTwo.push(array[i] + num);
    }

    return arrayTwo;
}
console.log(addNum([1, 2, 3, 4], 3));

function addArrays(array1, array2) {
    const sum = [];
    for (let i = 0; i < array1.length; i++) {
        sum.push((array1[i] + array2[i])); 
    }

    return sum; 
}

console.log(addArrays([1, 2, 3], [2, 3, 4])); 

function countPositive(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        result++;
      }
    }

    return result;
  }

  console.log(countPositive([1, -3, 5]));
  console.log(countPositive([-2, 3, -5, 7, 10])); 

