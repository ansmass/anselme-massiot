gsap.registerPlugin(ScrollTrigger);

export class SmoothScroll{
     constructor(){
          this.init();
     }

     init(){
          const container = document.querySelector('.container');

          this.scroller = new LocomotiveScroll({
               el: container,
               smooth: true
          });
          this.scroller.on('scroll', ScrollTrigger.update);

          ScrollTrigger.scrollerProxy(container, {
               scrollTop(value){
                    if(arguments.length){
                         this.scroller.scrollTo(value, 0, 0);
                    }
                    return this.scroller.scroll.instance.scroll.y;
               },
               getBoundingClientRect(){
                    return{
                         left: 0,
                         top: 0,
                         width: window.innerWidth,
                         height: window.innerHeight
                    };
               },
               pinType: container.style.transform ? "transform" : "fixed"
          });

          window.addEventListener("load", () => {
               ScrollTrigger.refresh();
          });
     }
}