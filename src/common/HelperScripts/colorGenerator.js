// generate random color for the color theme
export function colorGenerator() {
  let color = [
    // green
    ['3cb6b1', '65908e', '575f5e', '2d504d', 'green', '3B5F5C'],
    // red
    ['CB4747', '906565', '5F5757', '502D2D', 'red', '643A3A'],
    // yellow
    ['b6ab3c', '908F65', '5E5F57', '504F2D', 'yellow', '5F593B'],
    // orange
    ['b6823c', '907C65', '5F5C57', '50412D', 'orange', '614F3B'],
    // blue
    ['3C97B6', '658490', '575C5F', '2D4750', 'blue', '3A5761'],
  ]

  return color[Math.floor(Math.random() * 5)]
}