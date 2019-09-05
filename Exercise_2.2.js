function isPalindrome(str){
  // checke's if a given string(str) is palindrome

    let nwstr = '';
    for(let i=0; i < str.length;i++){
        nwstr = str[i] + nwstr;
    }
    if( nwstr == str) return 'palindrome';
    
    return 'not palindrome';
}

console.log(isPalindrome('AKA'));





