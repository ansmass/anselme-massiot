export class AnimationManager {
  constructor() {
    this.elementsToAnimate = [
      {
        class: 'moove-right',
        selector: '.moove-right',
        from: { x: '-100%', opacity: 0 },
        to: { x: '0%', opacity: 1 },
        duration: 2,
        delay: 0.5,
      },
      {
        class: 'moove-left',
        selector: '.moove-left',
        from: { x: '100%', opacity: 0 },
        to: { x: '0%', opacity: 1 },
        duration: 2,
        delay: 0.5,
      },
      {
        class: 'show-border',
        selector: '.show-border',
        from: { 'border-bottom': 'none', opacity: 0 },
        to: { 'border-bottom': '2px solid #EAEAEA', opacity: 1 },
        duration: 2,
        delay: 1,
      },
      {
        class: 'fade-in',
        selector: '.fade-in',
        from: { y: '+=20', opacity: 0 },
        to: { y: 0, opacity: 1 },
        duration: 2,
        delay: 1.5,
        stagger: 0.3,
      },
      {
        class: 'show-blocks',
        selector : '.show-blocks',
        from: { opacity: 0 },
        to: { opacity: 1 },
        duration: 1,
        delay: 2,
        stagger: 0.2,
        ease: Power4.easeInOut
      },
      {
        class: 'moove-right-2',
        selector: '.moove-right-2',
        from: { x: '-5%', opacity: 0 },
        to: { x: '0%', opacity: 1 },
        duration: 1.5,
        delay: 3,
      },
      {
        class: 'moove-right-3',
        selector: '.moove-right-3',
        from: { x: '-5%', opacity: 0 },
        to: { x: '0%', opacity: 1 },
        duration: 1.5,
        delay: 3.5,
      },
    ];
  }

  startAnimations() {
    this.elementsToAnimate.forEach(({ selector, from, to, duration, delay, stagger, ease }) => {
      gsap.fromTo(selector, 
      { ...from }, 
      { ...to, duration: duration, delay: delay, stagger: stagger, ease: ease });
    });
  }

  startContactContainerRevealAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    let revealContainers = document.querySelectorAll(".contact-container__hero-reveal");

    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset"
        }
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 2.5, {
        yPercent: 100,
        ease: Power1.in
      });
      tl.from(image, 2.5, {
        yPercent: -100,
        delay: -2.5,
        ease: Power1.in
      });
    });
  }
}