 function points(games) {
  let result = 0;
  games.map(element => {
    result += (element[0] == element[element.length - 1] 
      ? 1 
        : (element[0] > element[element.length - 1] 
          ? 3 
          : 0))
  })
  return result;
}