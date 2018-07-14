const projects = [
	{ index: 0, id: 'homeItem', anchor: 'home' },
	{ index: 1, id: 'louItem', anchor: 'lou' },
	{ index: 2, id: 'shelfieItem', anchor: 'shelfie' },
	{ index: 3, id: 'melilloItem', anchor: 'melillo' },
	{ index: 4, id: 'vidvisionItem', anchor: 'vidvision' },
	{ index: 5, id: 'houseInMotionItem', anchor: 'houseInMotion' }
]

var currentProject = projects[0]
var isScrolling
var scrolling = false
var itemElements = document.getElementsByClassName('item')
var projectElements = document.getElementsByClassName('project-container')

window.onLoad = function() {
	document.body.requestFullscreen()
}

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

	if ('wheelDelta' in event) {
		rolled = event.wheelDelta
	} else {
		// Firefox
		// The measurement units of the detail and wheelDelta properties are different.
		rolled = -40 * event.detail
	}

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {
		// Run the callback
		if (rolled < 50 && rolled > -50) {
			scrollStop()
		}
	}, 25)

	let project
	console.log(scrolling, rolled)
	if (rolled < -80 && scrolling === false) {
		if (currentProject.index < 5) {
			project = document.getElementById(
				projects[currentProject.index + 1].anchor
			)
			project.scrollIntoView({
				behavior: 'smooth'
			})
			scrolling = true
			currentProject = projects[currentProject.index + 1]
			onItemClick(currentProject.index)
		}
	} else if (rolled > 80 && scrolling === false) {
		if (currentProject.index > 0) {
			project = document.getElementById(
				projects[currentProject.index - 1].anchor
			)
			project.scrollIntoView({
				behavior: 'smooth'
			})
			scrolling = true
			currentProject = projects[currentProject.index - 1]
			onItemClick(currentProject.index)
		}
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

document.addEventListener('touchstart', handleTouchStart, false)
document.addEventListener('touchmove', handleTouchMove, false)

var xDown = null
var yDown = null

function handleTouchStart(evt) {
	xDown = evt.touches[0].clientX
	yDown = evt.touches[0].clientY
}

function handleTouchMove(evt) {
	if (!xDown || !yDown) {
		return
	}

	var xUp = evt.touches[0].clientX
	var yUp = evt.touches[0].clientY

	var xDiff = xDown - xUp
	var yDiff = yDown - yUp

	let project

	if (Math.abs(xDiff) > Math.abs(yDiff)) {
		/*most significant*/
		if (xDiff > 0) {
			/* left swipe */
		} else {
			/* right swipe */
		}
	} else {
		if (yDiff > 0) {
			if (currentProject.index < 5) {
				project = document.getElementById(
					projects[currentProject.index + 1].anchor
				)
				project.scrollIntoView({
					behavior: 'smooth'
				})
				currentProject = projects[currentProject.index + 1]
				onItemClick(currentProject.index)
			}
		} else {
			if (currentProject.index > 0) {
				project = document.getElementById(
					projects[currentProject.index - 1].anchor
				)
				project.scrollIntoView({
					behavior: 'smooth'
				})
				currentProject = projects[currentProject.index - 1]
				onItemClick(currentProject.index)
			}
		}
	}
	/* reset values */
	xDown = null
	yDown = null
}
