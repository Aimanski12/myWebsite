
// check if the storage has session
export function ckStor () {
  let hsStor;
  let store = JSON.parse(localStorage.getItem('websession'))
  
  if (store === null) {
    stStor()
    hsStor = false
  } else {
    let time = new Date().getTime()
    let exp = (time - store.time) / 1000
    if(exp > 3600) {
      stStor()
      hsStor = false
    } else {
      hsStor = true
    }
  }
  return hsStor
}



export function ckPath (navs) {
  let path = window.location.pathname.slice(1, 20)
  let p = path === '' ? 'Work' : path 
  let a = null
  for (let b=0; b < 4; b++){
    if(navs.nav[b] === p) a = navs.nav[b]
  }
  return a
}

// set store
function stStor () {
  let data = {
    intro: true,
    time: new Date().getTime()
  }
  localStorage.setItem('websession', JSON.stringify(data))
}