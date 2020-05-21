

export function findBackground (background) {
  const hero = process.env.PUBLIC_URL + '/assets/common/header-background.png'
  if(background === 'hero') return hero
}