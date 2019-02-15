var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  var name = "Ralph";
  return kittens.push(name)
}
function destructivelyPrependKitten(name) {
  var name = "Bob";
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
function appendKitten(name) {
  var name = "Billy";
  return [...kittens, name]
}
