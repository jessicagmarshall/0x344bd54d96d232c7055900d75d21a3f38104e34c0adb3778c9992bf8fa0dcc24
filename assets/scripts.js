// let i = 0
// let display = 'press any key'

document.onkeypress = function (e) {
  // e = 32
  // display = 'press space, round ' + i.toString()
  // document.getElementById('text').innerHTML = display
  // i++
  move()
}

function move () {
  let elem = document.getElementById('text')
  elem.style.left = generateLocation()
  elem.style.top = generateLocation()
  elem.style.color = generateColor()
}

function generateLocation () {
  let location = Math.floor(Math.random() * 100)
  return location.toString() + '%'
}

function generateColor () {
  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
}
