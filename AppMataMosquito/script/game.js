//definig size of the window
var width = 0
var height = 0
var lifes = 1
var time = 15

var bornGnatTime = 1500

var level = window.location.search
level = level.replace('?', '')

if (level === 'regular') {
    bornGnatTime = 1500
} else if (level === 'hard') {
    bornGnatTime = 1000
} else if (level === 'ultraHard') {
    bornGnatTime = 750
}


function adjustScreenGameSize() {
    width = window.innerWidth
    height = window.innerHeight
    console.log(width, height)
}
adjustScreenGameSize()

var chronometer = setInterval(function () {
    time -= 1

    if (time < 0) {
        clearInterval(chronometer)
        clearInterval(createGnat)
        window.location.href = 'win.html'
    } else {

        document.getElementById('chrono').innerHTML = time
    }
}, 1000)

//defining spwan object gnat position in the screen
function randomicPosition() {

    //remove gnat case exists
    if (document.getElementById('gnat')) {
        document.getElementById('gnat').remove()

        //console.log('select element is: ' + lifes)
        if (lifes > 3) {
            window.location.href = 'endGame.html'
        } else {
            document.getElementById('heart' + lifes).src = "imgs/heartEmpty.png"
            lifes++
        }
    }

    var positionX = Math.floor(Math.random() * width) - 90
    var positionY = Math.floor(Math.random() * height) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    //create html element
    var gnat = document.createElement('img')
    gnat.src = 'imgs/gnat.png'
    gnat.className = randomSize() + ' ' + mirror()
    gnat.style.left = positionX + 'px'
    gnat.style.top = positionY + 'px'
    gnat.style.position = 'absolute'
    gnat.id = 'gnat'
    gnat.onclick = function () {
        this.remove()
    }

    document.body.appendChild(gnat)
}

//defining gnat size
function randomSize() {
    var classGnat = Math.floor(Math.random() * 3)
    console.log(classGnat)

    switch (classGnat) {
        case 0:
            return 'gnat1'
        case 1:
            return 'gnat2'
        case 2:
            return 'gnat3'
    }
}

// mirror image
function mirror() {
    var classGnat = Math.floor(Math.random() * 2)
    console.log(classGnat)

    switch (classGnat) {
        case 0:
            return 'sideA'
        case 1:
            return 'sideB'
    }
}