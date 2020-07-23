import Scrollbar from 'smooth-scrollbar'

 var options = {
   'damping': 0.03,
   'thumbMinSize': 25,
   'renderByPizels': true,
   'alwaysShowTracks': false

 }

 // this functions is used to add a smoth scrolling effect
export function scrollEffect () {
  Scrollbar.init(document.querySelector('html'), options)
}
