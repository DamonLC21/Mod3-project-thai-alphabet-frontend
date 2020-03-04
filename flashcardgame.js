console.log('Hit')

const cardContainer = document.querySelector('.card-container')
const cards = ('http://localhost:3000/cards')

var i;
for (i = 0; i < 16; i++) {
    
    const gameCardContainer= document.querySelector('.card-container')
    const cardFace = document.createElement('div')
    const cardBack = document.createElement('div')
    const li = document.createElement('li')
    const frontCardimg = document.createElement('img')

    li.id = "game-card"
    cardFace.className = "card__face card__face--front"
    cardBack.className = "card__face card__face--back"
    frontCardimg.id = "frontCard"
    frontCardimg.src = "./picture/couple.jpg"

    li.addEventListener('click',()=>{
        console.log(li)
        li.classList.toggle('flip')
     })

    cardFace.appendChild(frontCardimg)
    li.append(cardFace, cardBack)
    gameCardContainer.appendChild(li)
}

// fetch(cards)
//     .then(res => res.json())
//     .then(cards => {
//         const div_backcard = document.createElement('div')
//         const img = document.createElement('img')
//         img.src = card.image_url

//         li.addEventListener('click',()=>{
//             li.classList.toggle('flip')
//          })
//         div_backcard.appendChild(img)
//         li.appendChild(div_backcard)
//     })


