document.onkeypress = function (e) {
  move()
  changeColor()
  // console.log('window width', window.width)
}

function move () {
  let elem = document.getElementById('text')
  console.log(elem.offsetWidth)
  console.log(elem.offsetHeight)
  elem.style.left = generateLocation(0, elem.offsetWidth)
  elem.style.top = generateLocation(1, elem.offsetHeight)
}

function changeColor () {
  let elem = document.getElementById('text')
  elem.style.color = generateColor()
}

function generateLocation (i, elemConst) {
  let windowConst = [window.innerWidth, window.innerHeight]
  let randNum = Math.floor(Math.random() * 100)
  let locPerc = randNum * (windowConst[i] - elemConst) / windowConst[i]
  return locPerc.toString() + '%'
}

function generateColor () {
  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
}
