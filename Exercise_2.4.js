function alphabeticalOrder(str){
	// orders a string(str) alphabeticaly
    let nwarray = str.split('');
    return nwarray.sort()
    .join('')
    }
console.log(alphaOrdered('alazar'));
