document.onkeypress = function (e) {
  move()
  changeColor()
  // console.log('window width', window.width)
}

function move () {
  let elem = document.getElementById('text')
  elem.style.left = generateLocation(0, elem.offsetWidth, elem.offsetHeight)
  elem.style.top = generateLocation(1, elem.offsetWidth, elem.offsetHeight)
}

function changeColor () {
  let elem = document.getElementById('text')
  elem.style.color = generateColor()
}

function generateLocation (i, width, height) {
  let constraints = [(window.innerWidth - width)/window.innerWidth, (window.innerHeight - height)/window.innerHeight]
  let location = Math.floor(Math.random() * 100) * constraints[i]
  // console.log(location)
  return location.toString() + '%'
}

function generateColor () {
  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
}
