let routes = [
   'home', 'about', 'projects', 'contacts', 'privacy', 'credentials', 'projects/projectone', 'projects/projecttwo', 'projects/projectthree', 'projects/projectfour', 'projects/projectfive', 'projects/projectsix']

// this function will generate a return the current route
// for the state
export const checkRoute = (route) => {
   let r = route.slice(1, 50)
   let url = r === '' ? 'home' : r
   let b;
   let a = routes.filter(route => {
           return route === url
         })
   
   if(a[0] === undefined) {
      b = 'notFound'
   } else {
      b = a[0]
   }
   
   return b
}