let mask = document.getElementById('mask')
const news = document.getElementById('news')
const newsContent = document.getElementById('newsContent')
const newsContentImg = document.getElementById('newsContent')

mask.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
mask.style.width = '100%'
mask.style.height = '100%'
mask.style.position = 'absolute'

document.body.style.background = 'url(./fontsBackgraund.png)'
document.body.style.backgroundSize = 'cover'

const blockNewsInfo = {
    title: "Новости в TOP'е",
    text: 'Сейчас Вы наблюдаете новостную ленту в которой могут быть новости',
    image: './location_news_14325.png'
}

const domHtml = `
    <div id="news">
        <p id="newsTitle">${blockNewsInfo.title}</p>
        <div id="newsContent">
            <p>${blockNewsInfo.text}</p>
            <img id="newsContentImg" src="${blockNewsInfo.image}">
        </div>
    </div>
`

news.innerHTML = domHtml