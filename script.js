const crd = document.querySelectorAll('.crd-prj-card')
// const crdfrt = document.querySelectorAll(' .crd-layover')


let a = [0,0,0,0,0,0,0,0]

crd.forEach((i, x )=> {
  i.addEventListener('click', ()=>{

    if(!a[x]) {
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





