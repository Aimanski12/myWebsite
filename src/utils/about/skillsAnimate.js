
export const skills = ['Python', 'Javascript', 'Php', 'ReactJS', 'Django', 'VueJS', 'NodeJS', 'Gitbash', 'HTML5', 'CSS3', 'TypeScript', 'MySql', 'Redux', 'GraphQL', 'Firebase', 'MongoDB', 'Figma', 'Webflow', 'Photoshop', 'Illustrator', 'After Effects']

export function skillLogo(b) {
  return process.env.PUBLIC_URL + `/assets/svg/${b.toLowerCase()}.svg`
}

export const aboutMe = 'I speak English and Tagalog, born and raised in Cebu, Philippines, i drink tea and coffee, i trade stocks, i collect foreign currencies, i do wood working, i read non-fiction, i eat lechon kawali, tried biking 130 kms, like tech science.'