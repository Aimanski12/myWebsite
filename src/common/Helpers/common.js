
// generate random color for the color theme
export function colorGenerator() {
  let color = [
    // green
    ['3cb6b1', '65908e', '575f5e', '2d504d', 'green', '355452'],
    // red
    ['CB4747', '906565', '5F5757', '502D2D', 'red', '5A3535'],
    // yellow
    ['b6ab3c', '908F65', '5E5F57', '504F2D', 'yellow', '544f35'],
    // orange
    ['b6823c', '907C65', '5F5C57', '50412D', 'orange', '544535'],
    // blue
    ['3C97B6', '658490', '575C5F', '2D4750', 'blue', '354C54'],
  ]

  return color[Math.floor(Math.random() * 5)]
}

// generate the background according to the provided theme color
export function generateBackground (c) {
  const red = process.env.PUBLIC_URL + '/assets/images/buttonRed.png'
  const yellow = process.env.PUBLIC_URL + '/assets/images/buttonYellow.png'
  const green = process.env.PUBLIC_URL + '/assets/images/buttonGreen.png'
  const orange = process.env.PUBLIC_URL + '/assets/images/buttonOrange.png'
  const blue = process.env.PUBLIC_URL + '/assets/images/buttonBlue.png'
  if (c === 'green') {
    return green
  }
  if (c === 'yellow') {
    return yellow
  }
  if (c === 'red') {
    return red
  }
  if (c === 'orange') {
    return orange
  }
  if (c === 'blue') {
    return blue
  }
}