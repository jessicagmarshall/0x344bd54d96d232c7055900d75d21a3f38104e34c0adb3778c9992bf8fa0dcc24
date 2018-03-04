document.onkeypress = function (e) {
    e = 32
    document.getElementById('text').innerHTML = display[i]
    if (i == 4) {
        i = 4;
        var para = document.createElement("h2");
        var node = document.createTextNode("kiss da goobi");
        para.appendChild(node);

        var text = document.getElementById("text");
        text.appendChild(para);
    }
    else if (i == 3) {
	i += 2
    } 
    else if (i == display.length - 1) {
	i = 4
    }
    else {
        i++
    }
}

var i = 0;
