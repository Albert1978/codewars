/*var isSquare = function (n) {
	if (Math.sqrt(n) % 1 == 0) {
		return true;
	}
	else {
		return false;
	}


}
console.log(isSquare(26)) */

//=================================================================//

// function getCount(str) {

// 	let strArr = str.toLowerCase().split('');
// 	const vowels = ['a', 'e', 'i', 'o', 'u'];
// 	let count = 0;

// 	for (char of strArr) {
// 		if (vowels.includes(char)) {
// 			count++;
// 		}
// 	}
// 	return count;
// }

// console.log(getCount('AfgfOhgi ghOO'));

//=================================================================//

// function smash(words) {
// 	console.log(words)
// 	let str = "";

// 	words.forEach((item, index, array) => {
// 		if (index < array.length - 1) {
// 			str += `${item} `
// 		}
// 		else {
// 			str += `${item}`
// 		}
// 	})
// 	return str
// };
// let worlds = ['hello', 'world', 'this', 'is', 'great', '!'];
// console.log(smash(worlds));

//=================================================================//

// function lovefunc(flower1, flower2) {
// 	if ((flower1 + flower2) % 2 == 1) {
// 		return true
// 	}
// 	else {
// 		return false
// 	}
// 	// moment of truth
// }

// console.log(lovefunc(3, 4))

//=================================================================//

// function countPositivesSumNegatives(input) {

// 	let sum = 0;
// 	let count = 0;

// 	if (input.some(currentValue => currentValue == null)) {
// 		return [];
// 	}
// 	else {
// 		for (let i = 0; i < input.length; i++) {
// 			if (input[i] < 0) {
// 				sum = sum + input[i];
// 			}
// 			else if (input[i] > 0) {
// 				count++;
// 			}
// 		}

// 	}
// 	if (sum == 0 && count == 0) {
// 		return []
// 	}
// 	else {
// 		return [count, sum];
// 	}
// }

// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, null, 10, -11, -12, -13, -14, -15]));
// console.log(countPositivesSumNegatives([]));
// console.log(null == null);
// console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))
// console.log([null] == null);

//=================================================================//

// function DNAtoRNA(dna) {

// 	let str = '';

// 	dna.toUpperCase();

// 	for (let char of dna) {
// 		if (char == 'T') {
// 			str += 'U'
// 		}
// 		else {
// 			str += char
// 		}
// 	}
// 	return str;
// }

// console.log(DNAtoRNA('TTTT'));

//=================================================================//

function findNeedle(haystack) {
	return `found the needle at position ${haystack.indexOf("needle")}`
}

let haystack = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54];
console.log(findNeedle(haystack));