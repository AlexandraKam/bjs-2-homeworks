function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length===arr2.length) {
  	result = arr1.every(function(current,i) {
		return current===arr2[i];
  	});
  } else {
  	result = false;
  }

  
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter((item) => {
  	if (item > 0 && item % 3 === 0) return true;
  }).map((element) => {
  	return element *10
  });
    

  return resultArr; // array
}
