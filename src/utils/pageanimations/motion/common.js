
// this function will return a striing that will
// determine of the current state has to be initial or initial two.
// the string will be used as an initial value for the framer motion
// in animating the transition
export const setTransitionState = (state) => {
  if (state === 'initialOne') return 'initialTwo'
  if (state === 'initialTwo') return 'initialOne'
  if (state !== 'initialOne' || state !== 'initialTwo') {
    return 'initialOne'
  }
}