const grayHeart = document.querySelector(".gray-heart")
const redHeart = document.querySelector(".red-heart")

grayHeart.addEventListener('click' , function(){
    redHeart.classList.add('animation')
    grayHeart.classList.add('fill-color')
})
redHeart.addEventListener('click' , function(){
    redHeart.classList.remove('animation')
    grayHeart.classList.remove('fill-color')
})