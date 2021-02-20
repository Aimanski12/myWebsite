import tilt from 'vanilla-tilt'
import $ from 'jquery'

export const Helpers = (function (){
  
  // function to remove the foreground slider when page loads
  const _removeintroslider = () => {
    const slider = $('.front-slider')[0]
    slider.style.display = 'none'
  }
  
  // function to set the body hidden or auto
  // then animation is clicked
  const _hidshowbody = (val) => {
    const body = $('body')[0]
    body.style.overflow = val
  }

  // function to remove the 
  const _removepreloader = () => {
    const preloader = $('.pre-loader')[0]
    preloader.style.display = 'none'
  }

  // function to toggle a class active to the menu button
  // will trigger animation of the svg
  const _toggleBurgerToActive = () => {
    const svg = $('.menu-burger')[0]
    svg.classList.toggle('active')
  }

  // this will zoom the figure inside the image
  const _zoomFigureImage = (e) => {
    const image = e.currentTarget;
    let x = e.nativeEvent.offsetX / image.offsetWidth * 100
    let y = e.nativeEvent.offsetY / image.offsetHeight * 100
    image.style.backgroundPosition = x + '% ' + y + '%';
  }

  // this function will tilt the image when hovered
  const _tiltImage = (el, deg) => {
    if(window.innerWidth > 768) {
      tilt.init(document.querySelectorAll(el), 
        { max: deg, speed: 800, scale: 1.02 });
    }
  }

  const _scrollAnimation = () => {
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
  }


  // dont forget to remove the preloader function
  return {
    removeintroslider(){
      return _removeintroslider()
    },
    hidshowbody(val){
      return _hidshowbody(val)
    },
    removepreloader(){
      return _removepreloader()
    },
    toggleBurgerToActive () {
      return _toggleBurgerToActive()
    },
    zoomFigureImage (e) {
      return _zoomFigureImage(e)
    }, 
    tiltImage(el, deg){
      return _tiltImage(el, deg)
    },
    scrollAnimation(){
      return _scrollAnimation()
    }

  }
})()

