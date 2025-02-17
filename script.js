// const BODY = document.querySelector('body')
// const COLOR_SHOW_BTN = document.querySelector('#buttonColorShow')
// const LOGIN_BTN = document.querySelector('#login')
// const USER_LOGIN = document.querySelector('#userLogin')
// const colorArr = ['red', 'green', 'yellow', 'blue', 'black', 'grey']
// BODY.style.backgroundColor = colorArr[0]

// COLOR_SHOW_BTN.addEventListener('click', () => {

//     colorArr.forEach((item, index) => {

//         setTimeout(() => {

//             console.log('Прошло 2 секунды')
//             COLOR_SHOW_BTN.style.backgroundColor = item

//         }, index * 2000)

//     })

// })

// LOGIN_BTN.addEventListener('click', () => {
//     if (LOGIN_BTN.textContent === 'Login') {
//         LOGIN_BTN.textContent = 'LogOut'
//         USER_LOGIN.textContent = 'userPass'
//     } else {
//         LOGIN_BTN.textContent = 'Login'
//         USER_LOGIN.style.display = 'none'
//     }
// }) 





const NEWS = document.querySelector('#newsBlock')
// console.log(NEWS)

const newsArr = [
    {
        title: 'Новости о котах1',
        newsText: 'Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Меня инициал безорфографичный, запятых до, сбить точках назад путь правилами его одна океана продолжил коварных. Букв реторический о мир первую?',
        newsImg: './JsStyle/cat.jpeg',
    },

    {
        title: 'Новости о котах2',
        newsText: 'Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Меня инициал безорфографичный, запятых до, сбить точках назад путь правилами его одна океана продолжил коварных. Букв реторический о мир первую?',
        newsImg: './JsStyle/cat.jpeg',
    },

    {
        title: 'Новости о котах3',
        newsText: 'Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Меня инициал безорфографичный, запятых до, сбить точках назад путь правилами его одна океана продолжил коварных. Букв реторический о мир первую?',
        newsImg: './JsStyle/cat.jpeg',
    }
]

newsArr.forEach((element) => {

    NEWS.innerHTML += `
        <h1>${element.title}</h1> <br>
        <img id='imagesNews' src='${element.newsImg}'></img> <br>
        <p>${element.newsText}</p>
        `

})



// console.log (newsArr)