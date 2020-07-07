export const green = '#0C5D5A'
export const cream = '#EBE9CD'
export const dark = '#313D43'
export const gray = '#CDCDCD'
export const light = '#F4F4F4'


export function findColorModes (activeRoute) {
  //ifthe route match any on the given color routes
  let colorModes = menuColorModes.filter(color => {
    return color.path === activeRoute
  })
  
  // if does not match to any of the given color routes
  if(colorModes.length === 0) {
    colorModes = [menuColorModes[12]]
  }

  // return the output color
  return {
    close: {
      main: colorModes[0].main,
      back: colorModes[0].back
    },
    open: openColorModes,
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
  {
    path: 'error',
    main: green,
    back: cream
  },
]

const openColorModes = {
  main: cream,
  back: green
}