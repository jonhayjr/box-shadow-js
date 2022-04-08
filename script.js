const tiles = document.querySelectorAll('div.tile');
const tileText = document.querySelectorAll('span.tile-text')

//Function to remove class from all elements
const removeClassName = (elements, className) => {
  elements.forEach(element => {
    element.classList.remove(className);
  })
}

const addClassName = (element, className) =>  {
  element.classList.add(className)
}

tiles.forEach(tile => {
  tile.addEventListener('mouseover', (e) => {
    //Check if clicked element is div tile
    if (e.target.className === 'tile') {
      removeClassName(tiles, 'active-tile')
      addClassName(e.target, 'active-tile')
    }
  })
})

tileText.forEach(tileT => {
  tileT.addEventListener('mouseover', (e) => {
    //Check if clicked element is tile text
    if (e.target.className === 'tile-text') {
      removeClassName(tileText, 'active-text')
      addClassName(e.target, 'active-text')
    }
  })
})