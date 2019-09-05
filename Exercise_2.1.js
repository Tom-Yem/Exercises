function reverseNum(num){
  // reverse a given number

    let str = String(num);
    let nwstr = '';
    for(let i=0; i < str.length;i++){
        nwstr = str[i] + nwstr;
    }
    return Number(nwstr);
}

console.log(reverseNum(322)); //223
 
