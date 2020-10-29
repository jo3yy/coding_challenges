//https://www.codewars.com/kata/54e6533c92449cc251001667

var uniqueInOrder = (iterable) => {
  let x = []

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i+1]) {
      x.push(iterable[i])
    }
  }

 //alt method 
  // x = [...iterable].filter( (el, i) => iterable[i] !== iterable[i+1])

  //return x
  console.log(x)
}

uniqueInOrder('AAAABBBCCDAABBB')