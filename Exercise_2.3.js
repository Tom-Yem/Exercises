let combination = (str, tempstr, index) => {
  // executes all possible combinations(substrings) of a given string(str)  
   for (var i = index; i < str.length; i++) {
      // append the character
      tempstr = tempstr.concat(str.charAt(i));
      
      //output the result
     console.log(tempstr);
      
      //call it again (recursive) by increasing the index
      combination(str, tempstr, i + 1);
      
      // remove the character added at the last stack
      tempstr = tempstr.substr(0, tempstr.length - 1);
    }
    
      
};

combination("123", "", 0);
