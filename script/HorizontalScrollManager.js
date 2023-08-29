gsap.registerPlugin(ScrollTrigger);

export class HorizontalScrollManager {
     constructor(smoothScrollInstance){
          this.smoothScroll = smoothScrollInstance;
          this.init();
     }

     init(){
          const body = document.body;

          window.addEventListener("load", () => {
               let childrensContainer = document.querySelectorAll('.works-container__horizontal-block > *');
               let container = document.querySelector('.works-container__horizontal-block');
               let containerWidth = container.offsetWidth;
               let horizontalScrollLength = containerWidth - window.innerWidth;

               gsap.to('.works-container__horizontal-block', {
                    scrollTrigger: {
                         scroller: this.smoothScroll.scroller.scroll,
                         scrub: true,
                         trigger: "#sectionPin",
                         pin: true,
                         start: "top top",
                         end: containerWidth
                    },
                    x: -horizontalScrollLength,
                    ease: "none"
               });

               ScrollTrigger.addEventListener('refresh', () => this.smoothScroll.scroller.update());
               ScrollTrigger.refresh();
          });
     }
}