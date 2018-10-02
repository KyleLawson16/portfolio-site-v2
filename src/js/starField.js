// number of drops created.

// function to generate a random number range.
function randRange(minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

// function to generate drops
window.createStarField = function(numStars) {
  var i = 1;
  for (i = 1; i < numStars; i++) {
    var starLeft = randRange(0, 100);
    var starTop = randRange(-1, 90);
    var starSize = randRange(1, 4);
    var starBrightness = Math.random() / 2 + 0.5;
    var starGlowSize = randRange(0, 10);
    var starGlowCircle = randRange(0, 3);
    var starGlowBrightness = Math.random() / 2;
    var starAnimationDuration = randRange(4, 20);
    var starAnimationDelay = randRange(0, 2);

    var newStar = document.createElement("p");
    var starId = "star" + i;
    newStar.setAttribute("id", starId);
    newStar.setAttribute("class", "star");
    document.body.appendChild(newStar);
    var star = document.getElementById(starId);
    star.style.left = starLeft + "vw";
    star.style.top = starTop + "vh";
    star.style.width = starSize + "px";
    star.style.height = starSize + "px";
    star.style.opacity = starBrightness;
    star.style.zIndex = -1;
    star.style.boxShadow =
      "0px 0px " +
      starGlowSize +
      "px " +
      starGlowCircle +
      "px rgba(255,255,255," +
      starGlowBrightness +
      ")";
    star.style.animationDuration = starAnimationDuration + "s";
    star.style.animationDelay = starAnimationDelay + "s";
  }
};
