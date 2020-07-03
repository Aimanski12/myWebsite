const green = '#0C5D5A'
const cream = '#EBE9CD'
const dark = '#313D43'
const gray = '#CDCDCD'
const light = '#F4F4F4'


export function findColorModes (activeRoute) {
  let colorModes = menuColorModes.filter(color => {
    return color.path === activeRoute
  })
  return {
    close: colorModes[0],
    open: openColorModes
  }
} 

const menuColorModes = [
  {
    path: 'home',
    main: cream,
    back: dark
  },
  {
    path: 'about',
    main: green,
    back: gray
  },
  {
    path: 'projects',
    main: cream,
    back: green
  },
  {
    path: 'contacts',
    main: cream,
    back: dark
  },
  {
    path: 'credentials',
    main: green,
    back: gray
  },
  {
    path: 'privacy',
    main: green,
    back: light
  },
  {
    path: 'project1',
    main: cream,
    back: green
  },
  {
    path: 'project2',
    main: green,
    back: gray
  },
  {
    path: 'project3',
    main: green,
    back: cream
  },
  {
    path: 'project4',
    main: cream,
    back: green
  },
  {
    path: 'project5',
    main: green,
    back: gray
  },
  {
    path: 'project6',
    main: green,
    back: cream
  },
]

const openColorModes = {
  main: cream,
  back: green
}