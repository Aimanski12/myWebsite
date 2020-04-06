
// generate random color for the color theme
export function colorGenerator() {
  let color = [
    // green
    ['3cb6b1', '65908e', '575f5e', '2d504d', 'green', '355452'],
    // red
    ['CB4747', '906565', '5F5757', '502D2D', 'red', '5A3535'],
    // yellow
    ['b6ab3c', '908F65', '5E5F57', '504F2D', 'yellow', '544f35']
  ]

  return color[Math.floor(Math.random() * 3)]
}

// green = #355452
// yellow = #544f35
// red = #5A3535