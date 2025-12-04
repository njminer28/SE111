var foodImage = document.getElementById("food")
var foodButton = document.getElementById("foodButton")

function changeImage() {
console.log(foodImage.src)
foodImage.src = "hotdog.png"
}

foodButton.addEventListener('click', changeImage)

document.querySelector('p')

var divPTag = document.getElementById("divContainer").children[0]

divPTag.setAttribute('class','bigText')

var test = document.getElementById('bacon')

var h1Element = document.createElement('h1')
h1Element.innerText = "This is a new H1 Tag"
console.log(h1Element)
divPTag.appendChild(h1Element)

function bf() {
    var aboutToDieDiv = document.getElementById('divContainer')
    document.querySelector('body').removeChild(aboutToDieDiv)
}

document.getElementById('order66').addEventListener('click',bf)

var names = document.querySelectorAll('.names')

for(var i =0; i < names.length; i++)
{
    console.log(names[i].innerText)
    names[i].style.color = "red"
}

var advanceDiv = document.getElementById("advanced")

console.log(document.querySelector('#advanced h2').innerText)
