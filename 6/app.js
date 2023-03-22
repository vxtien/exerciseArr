function camelize(str) {
    return str.split('-').map(function(word, text) {
      
      if (text === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
  }
console.log(camelize("background-color-black"));  