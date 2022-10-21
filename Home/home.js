

function makeSlideshow (slidesId){
    const slides = document.getElementById(slidesId)
    const slidesInner = slides.querySelector(".slides-inner")
    const images = slidesInner.querySelectorAll("img")
  
    let index = 0 
  
    setInterval( function() {
      index += 1
      if(index === 5){
        index=0
      }
  
      slidesInner.style.transform = `translate3d(${index * -1100}px, 0, 0)`
  
    //   console.log(index * -1100)
    },3000)
  }
  makeSlideshow("slides")

  window.addEventListener("scroll",function(){
    var text = this.document.querySelector("text")
    text.classList.toggle("sticky",window.scrollY > 0)
  })