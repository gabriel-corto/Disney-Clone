
function Card_Plataform(imgUrl, imgAlt) {
  return(
    `<div class="card-item">
      <img src="assets/plataforms/${imgUrl}.png" alt="${imgAlt}">
    </div>`
  )
}
const RenderCards = document.querySelector(".cards-plataforms")

RenderCards.innerHTML += 
  Card_Plataform(
    "disney", "disney Logo"
  ) +
  Card_Plataform(
    "pixar", "pixar Logo"
  ) + 
  Card_Plataform(
    "marvel", "marvel Logo"
  ) +
  Card_Plataform(
    "star-wars", "star-wars Logo"
  ) + Card_Plataform(
    "national-geographic", "national Logo"
  )