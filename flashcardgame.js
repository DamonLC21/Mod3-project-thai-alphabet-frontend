console.log('Hit')

const cardContainer = document.querySelector('.card-container')
const cards = ('http://localhost:3000/cards')


let deck = [
    {image_url:"https://i.ibb.co/BNkYZs7/1.png"},
    {image_url:"https://i.ibb.co/BNkYZs7/1.png"},
    {image_url:"https://i.ibb.co/T1X8Cv3/2.png"},
    {image_url:"https://i.ibb.co/T1X8Cv3/2.png"},
    {image_url:"https://i.ibb.co/vVKYWQN/3.png"},
    {image_url:"https://i.ibb.co/vVKYWQN/3.png"},
    {image_url:"https://i.ibb.co/9qLq4qX/4.png"},
    {image_url:"https://i.ibb.co/9qLq4qX/4.png"},
    {image_url:"https://i.ibb.co/z7b6rSP/5.png"},
    {image_url:"https://i.ibb.co/z7b6rSP/5.png"},
    {image_url:"https://i.ibb.co/QCyBHD4/6.png"},
    {image_url:"https://i.ibb.co/QCyBHD4/6.png"},
    {image_url:"https://i.ibb.co/ZMwrr4W/7.png"},
    {image_url:"https://i.ibb.co/ZMwrr4W/7.png"},
    {image_url:"https://i.ibb.co/yQCvDS8/8.png"},
    {image_url:"https://i.ibb.co/yQCvDS8/8.png"},
]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array
  }
  console.log(shuffle(deck))

let shuffleDeck = shuffle(deck)
  shuffleDeck.map(card =>{
    console.log(card)
    
    const gameCardContainer= document.querySelector('.card-container')
    const cardFace = document.createElement('div')
    const cardBack = document.createElement('div')
    const li = document.createElement('li')
    const frontCardimg = document.createElement('img')
    const backCardimg = document.createElement('img')

    li.id = "game-card"
    cardFace.className = "card__face card__face--front"
    cardBack.className = "card__face card__face--back"
    frontCardimg.id = "frontCard"
    frontCardimg.src = "./picture/couple.jpg"
    backCardimg.src = card.image_url


    li.addEventListener('click',()=>{
        li.classList.toggle('flip')
        console.log(li)
     })

    cardFace.appendChild(frontCardimg)
    cardBack.appendChild(backCardimg)
    li.append(cardFace, cardBack)
    gameCardContainer.appendChild(li)
})


window.onload = startGame();

































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


