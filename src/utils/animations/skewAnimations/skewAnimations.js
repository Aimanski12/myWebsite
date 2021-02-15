
export const Skew = (function (){
  

  let scrollContainer;
  let windowS = {}
  const data = { ease: 0.1, current: 0, previous: 0, rounded: 0 };

  const _setSize = () => {
    return { width: window.innerWidth, height: window.innerHeight }
  }


  // Scrolling
  const _skewScrolling = (window, container) => {
    scrollContainer = container
    windowS = _setSize()
    // console.log(windowSize)
    _startSkew(windowS)
    // setBodyHeight();
    // document.body.style.height = `${
    //   scrollContainer.current.getBoundingClientRect().height}px`;
  };
  
  const _startSkew = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;
  
    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / windowS.width;
    const velocity = +acceleration;
    const skew = velocity * 15;
  
    //Assign skew and smooth scrolling to the scroll container
    if (scrollContainer.current != undefined) {
      scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
    }
    //loop vai raf
  
    requestAnimationFrame(() => _startSkew());

  }

  return {
    skewScrolling(windowSize, container) {
      return _skewScrolling(windowSize, container)
    }
  }
})()

