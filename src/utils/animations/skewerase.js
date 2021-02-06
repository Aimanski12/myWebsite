
  // ////////////////////////////////////////////////////////
  
  // STATE
  const [windowSize, setWindowSize] = useState({
    width: 320, height: 568
  })

  useEffect(()=>{
    // let a = useWin

    setWindowSize(getSize())
    function getSize() {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }


    function handleResize() {
      setWindowSize(getSize())
    }
    
    // event listener when the screen resizes
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  
  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };
  
  
  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    // setBodyHeight();
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height}px`;
  }, [windowSize.height]);

  //   //Set the height of the body to the height of the scrolling div
  // const setBodyHeight = () => {
  // };


  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // console.log(window.scrollY)
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / windowSize.width;
    const velocity = +acceleration;
    const skew = velocity * 4;

    //Assign skew and smooth scrolling to the scroll container
    if(scrollContainer.current != undefined) {
      scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
    }
    //loop vai raf

    requestAnimationFrame(() => skewScrolling());
  };

// ////////////////////////////////////////////////////////
