// List of imports
import { Scroller } from '/script/Scroller.js';
import { AnimationManager } from '/script/AnimationManager.js';
import { ArticleLoader } from '/script/ArticleLoader.js';

window.addEventListener('DOMContentLoaded', () => {
     // Instance of classes
     const scroller = new Scroller();
     const articleLoader = new ArticleLoader();
     const animationManager = new AnimationManager();
     
     articleLoader.loadArticles();
     animationManager.startAnimations();
     animationManager.startContactContainerRevealAnimation();
});