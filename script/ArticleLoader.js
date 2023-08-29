export class ArticleLoader {
    constructor() {
      this.sectionElement = document.getElementById("sectionArticle");
    }
  
    loadArticles() {
      fetch("./assets/articles.json")
        .then(response => response.json())
        .then(articles => this.displayArticles(articles))
        .catch(error => console.error("Une erreur s'est produite lors du chargement des articles :", error));
    }
  
    displayArticles(articles) {
      articles.forEach(article => {
        const articleElement = document.createElement("article");
        articleElement.classList.add("works-container__horizontal-block__last-work__content");
  
        const heading = document.createElement("h3");
        heading.textContent = article.title;
  
        const image = document.createElement("img");
        image.alt = "Capture d'écran pour le projet Le Hangar";
        image.src = article.src;
  
        const paragraph = document.createElement("p");
        paragraph.textContent = article.description;
  
        articleElement.appendChild(heading);
        articleElement.appendChild(image);
        articleElement.appendChild(paragraph);
  
        this.sectionElement.appendChild(articleElement);
      });
    }
}