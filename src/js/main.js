const url = 'https://api.quotable.io/random'
const quote = document.querySelector('.main__item-quote')
const author = document.querySelector('.main__item-author')

let getQuote = () => {
	fetch(url)
		.then(data => data.json())
		.then(item => {
			quote.innerText = '"' + item.content + '"'
			author.innerText = item.author
		})
}

getQuote()
