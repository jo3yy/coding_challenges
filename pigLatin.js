//https://www.codewars.com/kata/520b9d2ad5c005041100000f/

function pigIt(str) {
  const x = []
  const y = []
  const sen = []

  str.split(' ').map((el, i) => {
    x.push(el.substring(1)) //removes first char from string and save to array
    y.push(el.charAt(0)) //grabs all the first char from string

    y[i].match(/^[0-9a-zA-Z]+$/) ? // if y[i] isAlphaNumeric add 'ay' else doNot add 'ay'
      sen.push(x[i] + y[i] + 'ay') : 
      sen.push(x[i] + y[i])
  })
  return sen.join(' ')
}

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('Hello world !'))
