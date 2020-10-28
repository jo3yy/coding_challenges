//https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

function toWeirdCase(string){
  const splitStr = string.split(' ')

  let z = splitStr.map( y => y.split('').map((char, idx) => idx % 2 === 0 ? char.toUpperCase() : char).join('')).join(' ')
  console.log(z)
  //return z
}


toWeirdCase('This')
toWeirdCase('This is a test')