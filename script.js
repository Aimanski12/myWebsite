
// function to execute on changing gradient backgrounds
// const divs = document.querySelectorAll('.wall')
// let num = 0
// setInterval( function(){
//   if (num < 10 ){
//     divs[num].classList.add('show')
//     num += 1
//   }
//   if(num === 10){
//     divs[num].classList.add('show')
//     // we will set a time less than the loop to make sure the classlist are 
//     // removed before the next loop
//     setTimeout(function(){
//       for(let x = 0; x < divs.length; x++){
//         divs[x].classList.remove('show')
//       }
//     }, 9500)
//     num = 0
//   }
// }, 10000)


const win = document.querySelectorAll('.buildings')
for(let x = 0; x < win[0].children.length; x++){
  win[0].children[x].setAttribute('fill', 'gray')
  // console.log(win[].children)
}



const win1 = document.querySelectorAll('.background_building')
for (let x = 0; x < win1[0].children.length; x++) {
  win1[0].children[x].setAttribute('fill', 'teal')
  // console.log(win[].children)
}


win1[0].children[0].setAttribute('fill', 'orange')



const win2 = document.querySelectorAll('.building_windows')
// console.log(win2[0].children)
for (let x = 0; x < win2[0].children.length; x++) {
  win2[0].children[x].setAttribute('fill', 'teal')
}