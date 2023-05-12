// make point moves arouond
  //use code wasd or arrows to move the point using js function
    // slice the string to have numbers only and then add the numbers movements
    // use conditional or 
// how to make those leftover lines stays
// clear all lines

function pointMovements(e) {
  const pointClass = document.querySelector('.point')
  let posTop = getComputedStyle(pointClass).top
  let posLeft = getComputedStyle(pointClass).left

  posTopNum = Number(posTop.slice(0, posTop.length-2))
  posLeftNum = Number(posLeft.slice(0, posLeft.length-2))

  const key = e.code
  // console.log(key) // Debug

  if (key == 'ArrowRight') {
    posLeftNum += 10
    posLeft = posLeftNum.toString() + 'px'
    console.log(posLeft)
    pointClass.style.left = posLeft 
  } else if (key == 'ArrowLeft') {
    posLeftNum -= 10
    posLeft = posLeftNum.toString() + 'px'
    console.log(posLeft)
    pointClass.style.left = posLeft 
  } else if (key == 'ArrowDown') {
    posTopNum += 10
    posTop = posTopNum.toString() + 'px'
    console.log(posTop)
    pointClass.style.top = posTop 
  } else if (key == 'ArrowUp') {
    posTopNum -= 10
    posTop = posTopNum.toString() + 'px'
    console.log(posTop)
    pointClass.style.top = posTop
  } else {
    //
  }
  
}

window.addEventListener('keydown', pointMovements);