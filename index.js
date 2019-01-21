// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name) {
  drivers.push(name)
  return drivers
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name)
  return drivers
}
function destructivelyRemoveLastDriver() {
  drivers.pop()
  return drivers
}
function destructivelyRemoveFirstDriver() {
  drivers.shift() 
  return drivers
}
function appendDriver(name) {
  moreDrivers = [...drivers, name]
  return moreDrivers
}
function prependDriver(name) {
  moreDrivers = [name, ...drivers]
  return moreDrivers
}
function removeLastDriver() {
  const copyOfDrivers = drivers.slice(0, drivers.length - 1)
  return copyOfDrivers
}
function removeFirstDriver() {
  const copyOfDrivers = drivers.slice(1)
  return copyOfDrivers
}