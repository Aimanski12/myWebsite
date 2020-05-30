import anime from 'animejs'
import {skillEl} from '../common/elementSorter'

export const skills = {
  language: {
    skill: ['Python', 'Javascript', 'Java', 'PhP'],
    level: [67, 98, 74, 86]
  },
  tools: {
    skill: ['MERN Stack', 'ReactJS', 'React Native', 'Django', 'VueJS', 'MeteorJS', 'NodeJS', 'MongoDB', 'Git Bash', 'TypeScript', 'HTML/CSS', 'jQuery', 'Bootstrap', 'Webpack', 'Google Firebase', 'Google Analytics', 'MySQL', 'GraphQL', 'UnixCli', 'Agile Method', 'UX/UI Design', 'MVC Patern', 'FP/OOP'],
    level: [77,98,57,55,37,46,98,77,57,26,79,38,27,46,36,25,67,45,36,46,67,56,57]
  },
  design: {
    skill: ['Web Flow', 'Figma', 'Abode PS', 'Adobe Il', 'Supernova', 'Adobe AE'],
    level: [67, 78, 58, 37, 36, 76]
  }
}

let lang, tools, design =  false

export function animateSkill (dom) {
  const el = skillEl(dom)
  const i = el.h + el.g + el.f

  let height = (i - window.innerHeight)
  let yOffset = window.pageYOffset
  
  let spans = [el.langSpans, el.toolSpans, el.designSpans]

  if(window.innerHeight > 868){
    checkWidth(600, height, yOffset, spans, el.l, el.t)
  } else {
    checkWidth(550, height, yOffset, spans, el.l, el.t)
  }
}


function checkWidth (w, height, yOffset, spans, l, t){
  if (height + w <= yOffset) {
    if(!lang){
      animate(spans[0], skills.language.level)
      lang = true
    }
  }

  if (height + w + l <= yOffset) {
    if(!tools) {
      animate(spans[1], skills.tools.level)
      tools = true
    }
  }

  if (height + w + l + t <= yOffset) {
    if(!design){
      animate(spans[2], skills.design.level)
      design = true
    }
  }
}




function animate (h, q) {  
  h.forEach((s, i) => {
    var myObject = {
      prop1: 1,
    }

    anime({
      targets: myObject,
      prop1: q[i],
      easing: 'easeInOutCirc',
      round: 1,
      duration: 5000,
      update: function () {
        let a = myObject.prop1.toString()
        s.innerHTML = ' '+ a.slice(1);
      }
    });
  })

}