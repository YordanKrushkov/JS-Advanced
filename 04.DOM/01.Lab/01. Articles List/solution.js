function createArticle() {
	let inputTitleElement = document.getElementById('createTitle');
	let inputContentElement = document.getElementById('createContent');
	let articleSectionElement = document.getElementById('articles');


	if(inputContentElement.value!=='' && inputTitleElement.value !==''){

		let titleElementText = document.createElement('h3');
		titleElementText.innerHTML = inputTitleElement.value;
		let contentELementText = document.createElement('p');
		contentELementText.innerHTML = inputContentElement.value;
		let newArticleElement=document.createElement('article');
	
		newArticleElement.appendChild(titleElementText);
		newArticleElement.appendChild(contentELementText);
		articleSectionElement.appendChild(newArticleElement);

		inputTitleElement.value = '';
		inputContentElement.value = '';
	}


}