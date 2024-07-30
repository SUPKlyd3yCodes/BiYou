var headingIndex = 0
var bodyIndex = 0
document.getElementById("newheadingbtn").onclick = function() {
    var section = document.getElementById("container");
    var div = document.createElement('div');
    headingIndex += 1
    div.setAttribute("id", "maindiv"+headingIndex)
    section.appendChild(div)

    var input = document.createElement('input')
    input.setAttribute("type", "text")
    div.appendChild(input)
  }
document.getElementById("deleteheadingbtn").onclick = function() {
    var div = document.getElementById("maindiv"+headingIndex);
    div.remove()
    headingIndex -= 1
}




document.getElementById("newbodybtn").onclick = function() {
    var section = document.getElementById("container");
    var div = document.createElement('div');
    bodyIndex += 1
    div.setAttribute("id", "bodydiv"+bodyIndex)
    section.appendChild(div)

    var textarea = document.createElement('textarea')
    div.appendChild(textarea)
  }
document.getElementById("deletebodybtn").onclick = function() {
    var div = document.getElementById("bodydiv"+bodyIndex);
    div.remove()
    bodyIndex -= 1
}