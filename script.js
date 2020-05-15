const btn = document.querySelectorAll('.card-cards .card-overlay')

const workbtn = document.querySelector('.work-btn button')

for (let x = 0; x < 4; x++){
  btn[x].addEventListener('mouseover', ()=>{
    btn[x].classList.toggle('fadeIn')
  })
  btn[x].addEventListener('mouseout', () => {
    btn[x].classList.toggle('fadeIn')
  })
}

workbtn.addEventListener('mouseenter', ()=>{
  workbtn.classList.toggle('fadeBtn')
})

workbtn.addEventListener('mouseout', () => {
  workbtn.classList.toggle('fadeBtn')
})





