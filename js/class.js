class Board {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = images.niveles.bgTarde
    this.img.onload = () => {
      this.draw()
    }
   this.audio = new Audio()
   this.audio.src = 'http://23.237.126.42/ost/super-mario-bros/khbnvkqp/01%20-%20Super%20Mario%20Bros.mp3'
  }
  draw() {
    if (this.x < -canvas.width) this.x = 0
    //  this.x-- // para que el background se mueva a la izquierda
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x + canvas.width, this.y, this.width, this.height)
  }
}

class Ostrich {
  constructor() {
    this.x = 5
    this.y = canvas.height - 50
    this.width = 50
    this.height = 50
    
    this.standDer = new Image()
    

   
    this.standDer.src = images.ostrichs.standDer
  }
  draw() {
    this.y += 2
    if (frames % 5 === 0) {
      this.img =
        animateHelper === 0 ? this.flappyUp :
        animateHelper === 1 ? this.flappyMid :
        animateHelper === 2 ? this.flappyDown : this.flappyMid
      if (animateHelper < 4) {
        animateHelper++
      } else {
        animateHelper = 0
      }
    }
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  flap() {
    console.log("ADSasdas");

    this.y -= 25
  }
  isTouching(pipe) {
    return (this.x < pipe.x + pipe.width &&
      this.x + this.width > pipe.x &&
      this.y > pipe.y + pipe.height &&
      this.y + pipe.height > pipe.y)
  }
}
