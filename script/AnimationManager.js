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
    const animations = this.elementsToAnimate;
    let tl = gsap.timeline();

    animations.forEach((animation) => {
      const elementsToAnimate = document.querySelectorAll(animation.selector);
      elementsToAnimate.forEach((element) => {
        if (animation.from) { // Vérification pour animation.from
          tl.from(element, {
            x: animation.from.x,
            opacity: animation.from.opacity,
            duration: animation.duration,
            delay: animation.delay,
          });
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
      let revealContainers = document.querySelectorAll(animationData.selector);

      revealContainers.forEach((container) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: "restart none none reset",
          },
        });

        if (animationData.timeline.set) {
          tl.set(container, animationData.timeline.set);
        }

        if (animationData.timeline.from) {
          animationData.timeline.from.forEach((fromData) => {
            const target = fromData.target || container;
            tl.from(target, fromData.duration, {
              ...fromData.props,
            });
          });
        }
      });
    }
  }
}
