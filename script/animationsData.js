const animationsData = [
  {
    class: "moove-right",
    selector: ".moove-right",
    from: { x: "-100%", opacity: 0 },
    to: { x: "0%", opacity: 1 },
    duration: 0.3,
    ease: "sine.out",
  },
  {
    class: "moove-left",
    selector: ".moove-left",
    from: { x: "100%", opacity: 0 },
    to: { x: "0%", opacity: 1 },
    duration: 0.3,
    ease: "sine.out",
  },
  {
    class: "show-border",
    selector: ".show-border",
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: 0.4,
  },
  {
    class: "fade-in",
    selector: ".fade-in",
    from: { y: "+=20", opacity: 0 },
    to: { y: 0, opacity: 1 },
    duration: 0.4,
    stagger: 0,
    ease: Power4.easeInOut,
  },
  {
    class: "show-blocks",
    selector: ".show-blocks",
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: 0.2,
    ease: "power4.inOut",
  },
  {
    class: "moove-right-2",
    selector: ".moove-right-2",
    from: { y: "+=20", opacity: 0 },
    to: { y: "0", opacity: 1 },
    duration: 0.3,
    satgger: 0.2,
  },
  {
    class: "contact-animation-class",
    selector: ".contact-container__hero__reveal",
    timeline: {
      set: { autoAlpha: 1 },
      from: [
        {
          props: { yPercent: -100 },
          duration: 1,
          ease: Power1.in,
        },
        {
          target: "img",
          props: { yPercent: 100 },
          duration: 1,
          delay: -1,
          ease: Power1.in,
        },
      ],
    },
  },
];

export default animationsData;