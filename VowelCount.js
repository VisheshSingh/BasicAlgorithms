// Count the number of vowels in a given string

function VowelCount(str) {
    let newStr = str.toLowerCase().split('');
    let vowelArr = ['a','e','i','o','u'];
    let count = 0;

    for(let i=0;i<newStr.length;i++) {
        if(vowelArr.indexOf(newStr[i]) > -1) {
            count++;
        }
    }
    return count;
}

console.log(VowelCount('Hello world'));