// List of imports
import { Scroller } from '/script/Scroller.js';
import { AnimationManager } from '/script/AnimationManager.js';
import { ArticleLoader } from '/script/ArticleLoader.js';

window.addEventListener('DOMContentLoaded', () => {
     // Instance of classes
     const scroller = new Scroller();
     const animationManager = new AnimationManager();
     const articleLoader = new ArticleLoader();

     animationManager.startAnimations();
     articleLoader.loadArticles();
})