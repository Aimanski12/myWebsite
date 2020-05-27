import anime from 'animejs'
let a = [0, 0, 0, 0, 0, 0, 0, 0]
export function flipCard (dom) {
  const crd = dom.querySelectorAll('.crd-prj-card')
  crd.forEach((i, x) => {
    i.addEventListener('click', () => {
      if (!a[x]) {
        i.classList.add('flip')
        i.firstElementChild.firstElementChild.style.display = 'none'
        a[x] = 1
      } else {
        i.classList.remove('flip')
        i.firstElementChild.firstElementChild.style.display = 'flex'
        a[x] = 0
      }
    })
  });
}


// function to check for the size of the screen
export function makeButton (){
  const lists = document.querySelector('.project-list')
  lists.style.left = 0

  let slides = 0
  let w = window.innerWidth
  // check for the size of the screen

  w <= 468 ? slides = 8 : 
    w <= 668 ? slides = 4 : 
      w <= 968 ? slides = 3 : slides = 0
  let active = 0
  return { slides, active }

}



export function slideCard(b, direction) {
  const lists = document.querySelector('.project-list')
  let y = {}  

  if(direction === 'right') {
    if(b.active + 1 === b.slides) { 
        return {...b}
    } else {
      anime({
        targets: lists,
        left: `${((b.active + 1) * 100) * -1}%`,
        duration: 400,
        easing: 'easeInSine'
      })
    }
    y = {
      slides: b.slides,
      active: b.active + 1
    }
  }

  if(direction === 'left') {
    if(b.active === 0) { 
        return {...b}
    } else {
      anime({
        targets: lists,
        left: `${((b.active - 1) * 100) * -1}%`,
        duration: 400,
        easing: 'easeInSine'
      })
    }
    y = {
      slides: b.slides,
      active: b.active - 1
    }
  }
  return y
}