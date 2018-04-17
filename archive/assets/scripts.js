/// /// /// data /// /// ///

let nextIteration = [
  {
    displayText: 'Truly, I wonder',
    linkURL: 'https://chickenonaraft.com/',
    linkText: 'let\'s start off fun'
  },
  {
    displayText: 'How do you feel',
    linkURL: 'https://www.merriam-webster.com/dictionary/gubernatorial',
    linkText: 'goobernatorial'
  },
  {
    displayText: 'How do you feel',
    linkURL: 'https://www.merriam-webster.com/dictionary/gubernatorial',
    linkText: 'goobernatorial'
  },
  {
    displayText: 'How do you feel',
    linkURL: 'https://www.merriam-webster.com/dictionary/gubernatorial',
    linkText: 'goobernatorial'
  },
  {
    displayText: 'How do you feel',
    linkURL: 'https://www.merriam-webster.com/dictionary/gubernatorial',
    linkText: 'goobernatorial'
  },
  {
    displayText: 'How do you feel',
    linkURL: 'https://www.merriam-webster.com/dictionary/gubernatorial',
    linkText: 'goobernatorial'
  },
  {
    displayText: 'How do you feel',
    linkURL: 'https://www.merriam-webster.com/dictionary/gubernatorial',
    linkText: 'goobernatorial'
  }
]

let linkNum = 0
let data = nextIteration[0]

/// /// /// functions /// /// ///

document.onkeypress = function (e) {
  changeColor()
  postLink()
  move()
  refreshData()
}

document.onclick = function (e) {
  changeColor()
  postLink()
  move()
  refreshData()
}

function move () {
  document.getElementById('text').innerHTML = data.displayText
  let elem = document.getElementById('text')
  changeLocation(elem)
  for (let i = 0; i < linkNum + 1; i++) {
    elem = document.getElementById('link' + i)
    changeLocation(elem)
  }
}

function changeLocation (elem) {
  elem.style.left = generateLocation(0, elem.offsetWidth)
  elem.style.top = generateLocation(1, elem.offsetHeight)
}

function changeColor () {
  let elem = document.getElementById('text')
  elem.style.color = generateColor()
}

function generateLocation (flag, elemConst) {
  let windowConst = [window.innerWidth, window.innerHeight]
  let randNum = Math.floor(Math.random() * 100)
  let locPerc = randNum * (windowConst[flag] - elemConst) / windowConst[flag]
  return locPerc.toString() + '%'
}

function generateColor () {
  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
}

function postLink () {
  let div = document.createElement('div')
  div.id = 'link' + linkNum
  let a = document.createElement('a')
  a.id = 'linkChild' + linkNum
  let linkText = document.createTextNode(data.linkText + ' ')
  a.appendChild(linkText)
  a.href = data.linkURL
  div.appendChild(a)
  document.body.appendChild(div)
}

function refreshData () {
  data = nextIteration[linkNum]
  linkNum++
}
