function remove (word) {
  return word.includes('!') 
    ? word.split('').filter(char => char !== '!').concat('!').join('')
    : word.concat('!');  
}

// const remove = s => s.split("!").join("") + "!";
// const remove = s => s.replace(/!+/g, "") + "!";