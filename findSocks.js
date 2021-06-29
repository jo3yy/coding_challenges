// https://www.hackerrank.com/challenges/sockColour-merchant/problem
function sockColourMerchant(n, ar) {
  const sockColour = {}
  let pairs = 0

  ar.forEach(element => {
    sockColour[element] = (sockColour[element] || 0) + 1
  });

  for (var key in sockColour) {
    pairs += Math.floor(sockColour[key] / 2 )
  }
  console.log(sockColour)
  return pairs
}

var n = 9
var ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

console.log(sockColourMerchant(n,ar))