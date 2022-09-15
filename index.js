/*var isSquare = function (n) {
	if (Math.sqrt(n) % 1 == 0) {
		return true;
	}
	else {
		return false;
	}


}
console.log(isSquare(26)) */

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

function smash(words) {
	console.log(words)
	let str = "";

	words.forEach((item, index, array) => {
		if (index < array.length - 1) {
			str += `${item} `
		}
		else {
			str += `${item}`
		}
	})
	return str
};
let worlds = ['hello', 'world', 'this', 'is', 'great', '!'];
console.log(smash(worlds));