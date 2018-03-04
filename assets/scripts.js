let displayText = 'press a new key for a cool link from me'

document.onkeypress = function (e) {
  // console.log(constants)
  move()
  changeColor()
  postLink()
}

function move () {
  document.getElementById('text').innerHTML = displayText
  let elem = document.getElementById('text')
  // console.log(elem.offsetWidth)
  // console.log(elem.offsetHeight)
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
  // console.log(i, locPerc)
  return locPerc.toString() + '%'
}

function generateColor () {
  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
}

function postLink () {
  let a = document.createElement('a')
  let linkText = document.createTextNode('_click me_')
  a.appendChild(linkText)
  a.href = 'https://chickenonaraft.com/'
  document.body.appendChild(a)
}
