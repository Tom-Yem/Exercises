function title(str){
 // turns first letters of words a given string(str) into uppercase,
 // turns it into a title.

   let array = str.split(' ');
   let nwarray = [];
   array.forEach(element => {
      nwarray.push(element[0].toUpperCase() + element.slice(1));
    });
   return nwarray.join(' ')
}

console.log(title('the quick brown fox'));
