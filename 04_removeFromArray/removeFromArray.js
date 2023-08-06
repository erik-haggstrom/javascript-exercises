function removeFromArray(list, ...removeList) {
  
  let newList = list.filter(n => !removeList.includes(n))

  return newList;
}



// Do not edit below this line
module.exports = removeFromArray;