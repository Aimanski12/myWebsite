
export const checkRoute = (route) => {
   let r = route.slice(1, 50)
   return (r === '' ? 'home' : r)
}