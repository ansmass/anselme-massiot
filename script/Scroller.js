export class Scroller {
    constructor() {
        this.stickySections = [...document.querySelectorAll('.works-container__horizontal-block')];
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            this.stickySections.forEach(section => this.transform(section));
        });
    }

    transform(section) {
        const offsetTop = section.parentElement.offsetTop;
        const scrollSection = section.querySelector('.works-container__horizontal-block__last-work');

        if (window.innerWidth >= 1070) {
            let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
            percentage = Math.min(400, Math.max(0, percentage));
            scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
        } else {
            scrollSection.style.transform = '';
        }
    }
}