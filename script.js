// make point moves arouond
  //use code wasd or arrows to move the point using js function
    // slice the string to have numbers only and then add the numbers movements
    // use conditional or 


// how to make those leftover lines stays
  // create a squared div for every lefted paths


  // clear all lines

function leftLine(x, y) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("lines")
  newDiv.style.cssText = `position: absolute; left: ${x};top: ${y}`
  const parentDiv = document.querySelector(".paper-sketch")
  console.log(parentDiv)
  parentDiv.appendChild(newDiv)
 
}

function pointMovements(e) {
  const pointClass = document.querySelector('.point')
  let posTop = getComputedStyle(pointClass).top
  let posLeft = getComputedStyle(pointClass).left

  leftLine(posLeft, posTop)

  posTopNum = Number(posTop.slice(0, posTop.length-2))
  posLeftNum = Number(posLeft.slice(0, posLeft.length-2))

  const key = e.code
  console.log(posLeft, posTop) // Debug

  if (key == 'ArrowRight') {
    posLeftNum += 10
    posLeft = posLeftNum.toString() + 'px'
    pointClass.style.left = posLeft 
  } else if (key == 'ArrowLeft') {
    posLeftNum -= 10
    posLeft = posLeftNum.toString() + 'px'
    pointClass.style.left = posLeft 
  } else if (key == 'ArrowDown') {
    posTopNum += 10
    posTop = posTopNum.toString() + 'px'
    pointClass.style.top = posTop 
  } else if (key == 'ArrowUp') {
    posTopNum -= 10
    posTop = posTopNum.toString() + 'px'
    pointClass.style.top = posTop
  } else {
    //
  }

  
}

window.addEventListener('keydown', pointMovements);