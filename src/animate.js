


export const single_feature = (w, l, r, pageS) => {
   if (w > 992 && pageS > 220) {
     addLeft(l)
     addRight(r)
   }
   if (w > 992 && pageS < 220) {
     rmLeft(l)
     rmRight(r)
   }

  //  if (w <= 768 && pageS > 220) {
  //    addLeft(l)
  //  }

  //  if (w <= 768 && pageS > 450) {
  //    addRight(r)
  //  }

  //  if (w <= 768 && pageS < 220) {
  //    rmLeft(l)
  //  }

  //  if (w <= 768 && pageS < 450) {
  //    rmRight(r)
  //  }
}

export const about_section = (w, l, r, pageS) => {
  if (w > 992 && pageS > 580) {
    addLeft(l)
  }

  if (w > 992 && pageS > 780) {
    addRight(r)
  }

  if (w > 992 && pageS < 580) {
    rmLeft(l)
  }

  if (w > 992 && pageS < 780) {
    rmRight(r)
  }

  if (w > 1200 && pageS > 610) {
    addLeft(l)
    addRight(r)
  }
  if (w > 1200 && pageS < 610) {
    rmLeft(l)
    rmRight(r)
  }
  
  // if (w <= 768 && pageS > 810) {
  //   addLeft(l)
  // }
  
  // if (w <= 768 && pageS > 1020) {
  //   addRight(r)
  // }
  
  // if (w <= 768 && pageS < 810) {
  //   rmLeft(l)
  // }
  
  // if (w <= 768 && pageS < 1020) {
  //   rmRight(r)
  // }
}


const addLeft = (l) => {
  l.classList.add('scroll-left')
}

const addRight = (r) => {
  r.classList.add('scroll-right')
}

const rmLeft = (l) => {
  l.classList.remove('scroll-left')
}

const rmRight = (r) => {
  r.classList.remove('scroll-right')
}