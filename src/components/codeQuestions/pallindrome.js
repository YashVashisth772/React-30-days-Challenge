function checkPallin(str) {

    let n = str.length - 1
    let check = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[n - i]) {
            console.log('yes', i)
            check = !check;
            break;
        }
    }
    return check;
    console.log(str[i])

}
let madam = 'madam'
checkPallin('saippauakivikauppias')

// alternate soltion:
// function isPalindrome(str) {
//     str = str.replace(/\W/g, '').toLowerCase();
//     return (str == str.split('').reverse().join(''));
//   }
//   isPalindrome('boob')