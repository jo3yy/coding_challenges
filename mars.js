//https://www.hackerrank.com/challenges/mars-exploration/problem
function marsExploration(s) {
  let nonSOS = 0
  //split string into array of 3 strings, and filter out 'SOS'
  let x = s.match(/.{1,3}/g).filter(msg => msg !== 'SOS')

  //loop through each msg
  x.map((msg) => {
    //split strings into an array
    msg.split('').forEach((letter, i) => {
      //compare each letter if seq is not 'SOS'
      if ((i === 0 || i === 2) && letter !== 'S') {
        nonSOS++
      } 
      if (i === 1 && letter !== 'O') {
        nonSOS++
      }
      // if (i === 2 && letter !== 'S') {
      //   nonSOS++
      // }
    })
  })
  // return nonSOS
  console.log(nonSOS)


  //the better solution
  //   let test
  //   s.split('').map((letter, i) => {
  //     // console.log(letter)
  //     i % 3 === 1 ? test = 'O' : test = 'S'
      
  //     if (letter !== test) {
  //       nonSOS++
  //     }
  //   })
  // console.log(nonSOS)
}


marsExploration('SOSOOSOSOSOSOSSOSOSOSOSOSOS')




bbb
eeee
aa
f
