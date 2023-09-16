
const images = document.querySelectorAll("#images img")

const time = 2600
let currentImage = 0
let maxImage = images.length

const angles = document.querySelectorAll(".angle")
const grid_movies = document.querySelectorAll(".grid-movies")

function start() {
  setInterval(() => {
    images[currentImage].classList.remove("show")

    currentImage++
    
    if(currentImage >= maxImage){
      currentImage = 0
    }
    images[currentImage].classList.add("show")
  }, time);
}

grid_movies.forEach((grid) => {
  grid.addEventListener("click", (event) => {

    const angletoLeft = grid.querySelector(".angle-ToLeft")
    const angletoRight = grid.querySelector(".angle-ToRight")
    const card_movie = grid.querySelector(".cards-movies")

    if(event.target.classList.contains("fa-angle-right")){
      card_movie.scroll(700, 0)

        angletoRight.style.opacity = "0"
        angletoLeft.style.opacity = "1"

      angletoLeft.addEventListener("click", () => {
        card_movie.scroll(0, 0)
        angletoRight.style.opacity = "1"
        angletoLeft.style.opacity = "0"
      })
    }
  })
})
  
window.addEventListener("load", start())
