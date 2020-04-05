export function drawLine(cx){
  let canvas = cx

  // values for the width and height
  const width = window.innerWidth
  const height = window.innerHeight

  // set canvas width and height
  canvas.width = width
  canvas.height = height

  let c = canvas.getContext('2d');

  // generate arrays of coordinates
  function genArrCoords(width, height) {
    let coords = []
    for (let x = 0; x < 8; x++) {
      coords.push({
        // generate coordinates
        moveTo: genCoords(width, height, x),
        // generate random speed
        speed: between(25, 250) / 100,
        reverse: false
      })
    }
    return coords
  }

  // function to generate random coordinates
  function genCoords(width, height, x) {
    // for each iteration, there is a specific point
    // there has to be reference on a certain point on the screen
    // that is why is function has to be explicitely written like this 
    if (x === 0) {
      // direction down right (topside)
      return {
        x: between(-1, width - (Math.floor(width * .25))),
        y: between(-5, -15)
      }
    }
    if (x === 1) {
      // direction down right (left side)
      return {
        x: between(-5, -15),
        y: between(-1, height - (Math.floor(height * .25)))
      }
    }
    if (x <= 2) {
      // direction up left (bottom side)
      return {
        x: between(Math.floor(width * .25), width),
        y: between(height, height + 10)
      }
    }
    if (x <= 3) {
      // direction up left (right side)
      return {
        x: between(width + 5, width + 15),
        y: between(Math.floor(height * .25), height)
      }
    }
    if (x <= 4) {
      // direction down left (topside)
      return {
        x: between(Math.floor(width * .25), width),
        y: between(-5, -15)
      }
    }
    if (x <= 5) {
      // direction down left (rightside)
      return {
        x: between(width + 5, width + 15),
        y: between(-1, height - (Math.floor(height * .25)))
      }
    }
    if (x <= 6) {
      // direction up right (bottom side)
      return {
        x: between(-1, width - (Math.floor(width * .25))),
        y: between(height + 5, height + 15)
      }
    }
    if (x <= 7) {
      // direction up right (left side)
      return {
        x: between(-5, -15),
        y: between(Math.floor(height * .25), height)
      }
    }
  }

  // randomize any number in between
  function between(min, max) {
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

  // generate array of coordinates
  let startPoints = genArrCoords(width, height)

  // mao the start points to add lineTo coordinates
  let points = startPoints.map((gen, i) => {
    return {
      moveTo: {
        x: gen.moveTo.x,
        y: gen.moveTo.y
      },
      speed: gen.speed,
      lineTo: genXCoords(gen.moveTo, gen.speed, i)
    }
  })

  // function that will generate coordinates according
  // to its specific side location on the screen
  function genXCoords(start, speed, i) {
    let ans = {}
    // down right direction
    if (i <= 1) {
      ans = {
        x: start.x + speed,
        y: start.y + speed
      }
    }
    // up left direction
    if (i <= 3) {
      ans = {
        x: start.x - speed,
        y: start.y - speed
      }
    }
    // down left direction
    if (i <= 5) {
      ans = {
        x: start.x - speed,
        y: start.y + speed
      }
    }
    // up right direction
    if (i <= 7) {
      ans = {
        x: start.x + speed,
        y: start.y - speed
      }
    }
    return ans
  }

  // function that will generate new coordinates
  function generateNewCoords (i) {
    let as = genCoords(width, height, i)
    let speed = between(25, 250) / 100
    return {
      moveTo: as,
      speed: speed,
      lineTo: genXCoords(as, speed, 0),
      reverse: false
    }
  }


  // the function has to be written explicitly
  // since each coordinates has specific value a
  // and operators when increased or decreased
  function pointOne(p, i) {
    if (!p.reverse) {
      if (p.lineTo.x >= width + 5 || p.lineTo.y >= height + 5) {
        points[i].reverse = true
      } else {
        points[i].lineTo = {
          x: p.lineTo.x + p.speed,
          y: p.lineTo.y + p.speed,
        }
      }
    } else {
      if (p.lineTo.x <= -15 || p.lineTo.y <= -15) {
        points[i] = generateNewCoords(i)
      } else {
        points[i].lineTo = {
          x: p.lineTo.x - p.speed,
          y: p.lineTo.y - p.speed,
        }
      }
    }
  }

  // the function has to be written explicitly
  // since each coordinates has specific value a
  // and operators when increased or decreased
  function pointTwo(p, i) {
    if (!p.reverse) {
      if (p.lineTo.x <= -5 || p.lineTo.y <= -5) {
        points[i].reverse = true
      } else {
        points[i].lineTo = {
          x: p.lineTo.x - p.speed,
          y: p.lineTo.y - p.speed,
        }
      }
    } else {
      if (p.lineTo.x >= width + 15 || p.lineTo.y >= height + 15) {
        points[i] = generateNewCoords(i)
      } else {
        points[i].lineTo = {
          x: p.lineTo.x + p.speed,
          y: p.lineTo.y + p.speed,
        }
      }
    }
  }

  // the function has to be written explicitly
  // since each coordinates has specific value a
  // and operators when increased or decreased
  function pointThree(p, i) {
    if (!p.reverse) {
      if (p.lineTo.x <= -15 || p.lineTo.y >= height + 15) {
        points[i].reverse = true
      } else {
        points[i].lineTo = {
          x: p.lineTo.x - p.speed,
          y: p.lineTo.y + p.speed,
        }
      }
    } else {
      if (p.lineTo.x >= width + 15 || p.lineTo.y <= -15) {
        points[i] = generateNewCoords(i)
      } else {
        points[i].lineTo = {
          x: p.lineTo.x + p.speed,
          y: p.lineTo.y - p.speed,
        }
      }
    }
  }

  // the function has to be written explicitly
  // since each coordinates has specific value a
  // and operators when increased or decreased
  function pointFour(p, i) {
    if (!p.reverse) {
      if (p.lineTo.x >= width + 15 || p.lineTo.y <= -15) {
        points[i].reverse = true
      } else {
        points[i].lineTo = {
          x: p.lineTo.x + p.speed,
          y: p.lineTo.y - p.speed,
        }
      }
    } else {
      if (p.lineTo.x <= -15 || p.lineTo.y >= height + 15) {
        points[i] = generateNewCoords(i)
      } else {
        points[i].lineTo = {
          x: p.lineTo.x - p.speed,
          y: p.lineTo.y + p.speed,
        }
      }
    }
  }


  // evaluate each point on each screen side
  function evaluatePoints(points, i) {
    if (i === 0 || i === 1) {
      pointOne(points[i], i)
    }
    if (i === 2 || i === 3) {
      pointTwo(points[i], i)
    }
    if (i === 4 || i === 5) {
      pointThree(points[i], i)
    }
    if (i === 6 || i === 7) {
      pointFour(points[i], i)
    }
  }

  function draw() {
    // clear react 
    c.clearRect(0, 0, width, height);
    // begin path
    c.beginPath();
    // loop each coordinates to increment value
    for (let x = 0; x < 8; x++) {
      evaluatePoints(points, x)
      c.moveTo(points[x].moveTo.x, points[x].moveTo.y)
      c.lineTo(points[x].lineTo.x, points[x].lineTo.y)
      c.lineWidth = 1
      c.strokeStyle = '#355452'
      c.stroke()
    }
    window.requestAnimationFrame(draw);
  }
  draw()
}
