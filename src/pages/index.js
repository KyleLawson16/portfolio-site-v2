import '../sass/main.scss'

const projects = [
	{ index: 0, id: 'homeItem', anchor: 'home' },
	{ index: 1, id: 'louItem', anchor: 'lou' },
	{ index: 2, id: 'shelfieItem', anchor: 'shelfie' },
	{ index: 3, id: 'melilloItem', anchor: 'melillo' },
	{ index: 4, id: 'vidvisionItem', anchor: 'vidvision' }
]

var currentProject = projects[0]
var isScrolling
var scrolling = false
var itemElements = document.getElementsByClassName('item')
var projectElements = document.getElementsByClassName('project-container')

window.onItemClick = function(x) {
	if (x == 0) {
		document.getElementById('down-arrow-svg').classList.remove('blastoff')
	}
	for (var i = 0; i < itemElements.length; i++) {
		itemElements[i].classList.remove('active')
	}
	for (var i = 0; i < projectElements.length; i++) {
		projectElements[i].classList.remove('active')
	}
	document.getElementById(projects[x].id).classList.add('active')
	document.getElementById(projects[x].anchor).classList.add('active')
	document.getElementById(projects[x].anchor).scrollIntoView({
		behavior: 'smooth'
	})
	currentProject = projects[projects[x].index]
	return currentProject
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault()
	})
})

window.onbeforeunload = function() {
	window.scrollTo(0, 0)
}

window.init = function() {
	// for mouse scrolling in Firefox
	var elem = document.body
	if (elem.addEventListener) {
		// all browsers except IE before version 9
		// Internet Explorer, Opera, Google Chrome and Safari
		elem.addEventListener('mousewheel', mouseScroll, false)
		// Firefox
		elem.addEventListener('DOMMouseScroll', mouseScroll, false)
	} else {
		if (elem.attachEvent) {
			// IE before version 9
			elem.attachEvent('onmousewheel', mouseScroll)
		}
	}
}

function mouseScroll(event) {
	window.clearTimeout(isScrolling)

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {
		// Run the callback
		scrollStop()
	}, 30)
	var rolled = 0
	if ('wheelDelta' in event) {
		rolled = event.wheelDelta
	} else {
		// Firefox
		// The measurement units of the detail and wheelDelta properties are different.
		rolled = -40 * event.detail
	}

	let project
	console.log(scrolling, rolled)
	if (rolled < -50 && scrolling === false) {
		project = document.getElementById(projects[currentProject.index + 1].anchor)
		project.scrollIntoView({
			behavior: 'smooth'
		})
		scrolling = true
		currentProject = projects[currentProject.index + 1]
		onItemClick(currentProject.index)
	} else if (rolled > 50 && scrolling === false) {
		project = document.getElementById(projects[currentProject.index - 1].anchor)
		project.scrollIntoView({
			behavior: 'smooth'
		})
		scrolling = true
		currentProject = projects[currentProject.index - 1]
		onItemClick(currentProject.index)
	}
	return scrolling
}

var scrollStop = function(callback) {
	scrolling = false
	return scrolling
}

window.onDownArrowClick = function() {
	document.getElementById('down-arrow-svg').classList.add('blastoff')
	setTimeout(function() {
		onItemClick(1)
	}, 800)
}

// number of drops created.
var numStars = 220

// function to generate a random number range.
function randRange(minNum, maxNum) {
	return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
}

// function to generate drops
function createStarField() {
	for (i = 1; i < numStars; i++) {
		var starLeft = randRange(0, 1600)
		var starTop = randRange(-10, 700)
		var starSize = randRange(1, 4)
		var starBrightness = Math.random() / 2 + 0.5
		var starGlowSize = randRange(0, 10)
		var starGlowCircle = randRange(0, 3)
		var starGlowBrightness = Math.random() / 2
		var starAnimationDuration = randRange(4, 20)
		var starAnimationDelay = randRange(0, 2)

		var newStar = document.createElement('p')
		var starId = 'star' + i
		newStar.setAttribute('id', starId)
		newStar.setAttribute('class', 'star')
		document.body.appendChild(newStar)
		var star = document.getElementById(starId)
		star.style.left = starLeft + 'px'
		star.style.top = starTop + 'px'
		star.style.width = starSize + 'px'
		star.style.height = starSize + 'px'
		star.style.opacity = starBrightness
		star.style.boxShadow =
			'0px 0px ' +
			starGlowSize +
			'px ' +
			starGlowCircle +
			'px rgba(255,255,255,' +
			starGlowBrightness +
			')'
		star.style.animationDuration = starAnimationDuration + 's'
		star.style.animationDelay = starAnimationDelay + 's'
	}
}
// Make it rain
createStarField()
