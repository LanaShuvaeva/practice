// Task #1
// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

function isValidPassword(password, username) {
    const valid = ![...password].includes(' ')
        && password.length > 8
        && !password.includes(username);
    return valid ? true : false;
}

// console.log(isValidPassword('89Fjj1nms', 'dogLuvr'));  //true
// console.log(isValidPassword('dogLuvr123!', 'dogLuvr')) //false
// console.log(isValidPassword('hello1', 'dogLuvr')) //false


// Task #2
// Write a function to find the average value in an array of numbers

function avg(arr) {
    return arr.reduce((x, y) => x + y) / arr.length;
};

// console.log(avg([0,50])); //25
// console.log(avg([75,76,80,95,100])); //85.2


// Task #3
// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence 
//contains every letter of the alphabet.  Make sure you igore string casing!

function isPangram(str) {
    const strLowerCased = str.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (!strLowerCased.includes(char)) {
            return false;
        }
    }
    return true;
}

// console.log(isPangram('The five boxing wizards jump quickly')); //true
// console.log(isPangram('The five boxing wizards jump quick')); //false


//Task #4
// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function getCard() {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    const picker = arr => arr[Math.floor(Math.random() * arr.length)];

    return { value: picker(values), suit: picker(suits) };
}

console.log(getCard());

