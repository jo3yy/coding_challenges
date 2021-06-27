//https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem

function processData(input) {
  //combine `input` as an array split by \n
  let phoneBook = input.split('\n')
  //get the phonebook length (first element)
  const phoneBookLength = phoneBook.splice(0, 1)
  //get names to search
  const nameSearch = phoneBook.splice(phoneBookLength)
  //create map and split to key:values
  const phoneBookMap = new Map(phoneBook.map(contact => contact.split(' ')))
  //loop through nameSearch and match with phoneBookMap & print if true
  nameSearch.map(name => (
      console.log(
          phoneBookMap.has(name) ? `${name}=${phoneBookMap.get(name)}` : 'Not found'
      )
  ))
}

processData('3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry')