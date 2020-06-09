import anime from 'animejs'


export function thankyouMes () {

  // Wrap every letter in a span
  const a = document.querySelector('.message-form-wrapper')
  var textWrapper1 = document.querySelector('.thankmes1 .letters');
  var textWrapper2 = document.querySelector('.thankmes2 .letters');
  var img = document.querySelector('img');

  textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


  a.style.background = '#EBE9CD'

  anime.timeline({})
    .add({
      targets: '.thankmes1 .letter',
      rotateY: [-90, 0],
      duration: 350,
      easing: "easeOutExpo",
      delay: (el, i) => 45 * i
    })
    .add({
      targets: '.thankmes2 .letter',
      rotateY: [-90, 0],
      duration: 350,
      easing: "easeOutExpo",
      delay: (el, i) => 45 * i
    })
    .add({
      targets: img,
      opacity: 1,
      duration: 600,
      easing: "easeOutExpo",
    });

}