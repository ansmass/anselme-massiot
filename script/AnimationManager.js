import animationsData from './animationsData.js';

export class AnimationManager {
  constructor() {
    this.elementsToAnimate = [];
    
    gsap.registerPlugin(CSSPlugin);
    gsap.registerPlugin(ScrollTrigger);
  }

  initAnimations() {
    this.defineAnimations();
    this.startHomeContainerAnimations();
    this.startContactContainerAnimation();
  }

  addAnimation(animation) {
    this.elementsToAnimate.push(animation);
  }

  defineAnimations() {
    animationsData.forEach((animation) => {
      this.addAnimation(animation);
    });
  }

  startHomeContainerAnimations() {
    const tl = gsap.timeline();
    this.elementsToAnimate.forEach(({ selector, from, duration, delay }) => {
      const elementsToAnimate = document.querySelectorAll(selector);
      elementsToAnimate.forEach((element) => {
        if (from) {
          tl.from(element, { x: from.x, opacity: from.opacity, duration, delay });
        }
      });
    });
    tl.play();
  }

  startContactContainerAnimation() {
    const animationData = animationsData.find(
      (data) => data.class === "contact-animation-class"
    );
  
    if (animationData) {
      const { selector, timeline } = animationData;
      const revealContainers = document.querySelectorAll(selector);
  
      revealContainers.forEach((container) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: "restart none none reset",
          },
        });
  
        if (timeline.set) {
          tl.set(container, timeline.set);
        }
  
        if (timeline.from) {
          timeline.from.forEach(({ target = container, duration, props }) => {
            tl.from(target, duration, { ...props });
          });
        }
      });
    }
  }
}
