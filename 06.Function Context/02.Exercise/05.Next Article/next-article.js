function getArticleGenerator(articles) {
    let contentHolder = document.getElementById('content');
    let index = 0;

    return function () {

        if (index < articles.length) {
            const article = document.createElement('article');
            article.textContent=articles[index]
            contentHolder.appendChild(article);
            index++;
        }
    }
}
