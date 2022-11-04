// 1. printGreeting

function printGreeting(name) {
    return name
}

console.log('\n 1. printGreeting')
console.log(printGreeting('Luigi'))

// 2. reverseWordOrder

function reverseWordOrder(str) {
    let splitStr = str.split(' ').reverse().join(' ')
    return splitStr
}
console.log('\n 2. reverseWordOrder 1')
console.log(reverseWordOrder('I like apples'))

// 2. reverseWordOrder
function reverseWordOrder2(str2) {
    let newStr = '';
    for (let i = str2.length - 1; i >= 0; i--) {
        newStr += str2[i]
    }
    return newStr
}
console.log('\n 2. reverseWordOrder 2')
console.log(reverseWordOrder2('I like oranges'))

// 3. calculate 

function calculate(num1, num2, operation) {
    if (operation === 'add') {
        return num1 + num2
        } else if (operation === 'sub') {
            return num1 - num2 
        } else if (operation === 'mult') {
            return Math.floor(num1 * num2)
        } else if (operation === 'div') {
            return Math.floor(num1 / num2)
        } else if (operation === 'exp') {
            return Math.floor(num1 ** num2)
        } else {
            console.log('Please enter: add, sub, div, or exp')
        } 
}

console.log('\n 3. calculate')
console.log(calculate( 25, 4, 'div'))

// // 4. pandigital numbers
function panDigital(num){
    let arrNum = num.toString().split('')
    arrNum.sort((a, b) => {return a - b})
    // console.log(arrNum)
    for (let i = 0; i < arrNum.length; i++){
        console.log(`Array Number is ${arrNum[i]}, Index Number is ${i + 1} `)
        if (arrNum[i] != i +1){
            return false
        }
    }
    return true
}
console.log('\n 4. panDigital')
console.log(panDigital(1234566789))





// // 5. printGreeting v2.0 
// // const userInput = prompt("Please enter some input")

// // function printGreeting2 (name) {
// //     return name = userInput
// // }

// // console.log('\n 5. printGreeting2')
// // console.log(printGreeting2())

// 6. Functions + Loops: a special partnership 
// 7. Modify chessBoard

function chessBoard(num) {
    let board = ''
    for(let i = 0; i < num; i++) {
      for(let j = 0; j < num; j++){
        if((i + j) % 2 === 0) {
          board += '#'
          } else {
            board += ' '
            }
        }
        board += '\n'
      }
      return board
    }

console.log('\n 6 & 7. chessBoard')
console.log(chessBoard(8))