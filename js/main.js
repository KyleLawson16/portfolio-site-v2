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

function onItemClick(x) {
	for (var i = 0; i < itemElements.length; i++) {
		itemElements[i].classList.remove('active')
	}
	for (var i = 0; i < projectElements.length; i++) {
		projectElements[i].classList.remove('active')
	}
	document.getElementById(projects[x].id).classList.add('active')
	document.getElementById(projects[x].anchor).classList.add('active')
	currentProject = projects[projects[x].index]
	return currentProject
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault()
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		})
	})
})

window.onbeforeunload = function() {
	window.scrollTo(0, 0)
}

function init() {
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
