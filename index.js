const cats = ["Milo", "Otis", "Garfield"]

destructivelyAppendCat('Ralph')
destructivelyPrependCat('Bob')
destructivelyRemoveLastCat()
destructivelyRemoveFirstCat()
appendCat('Broom')
prependCat('Miao')
removeLastCat()
removeFirstCat()
function destructivelyAppendCat(name) {
  cats.push(name)
}

function destructivelyPrependCat(name) {
  cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
  cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
  cats.shift(name)
}

function appendCat(name) {
  const newArray = [...cats]
  newArray.push(name)
  return newArray
}

function prependCat(name) {
  const newArray = [...cats]
  newArray.unshift(name)
  return newArray
}

function removeLastCat() {
  const newArray = [...cats]
  newArray.pop()
  return newArray
}

function removeFirstCat() {
  const newArray = [...cats]
  newArray.shift()
  return newArray
}


