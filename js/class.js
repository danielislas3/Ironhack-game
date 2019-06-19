class Board {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = images.niveles.bgTarde
    // this.img.onload = () => {
    //   this.draw()
    // }
   this.audio = new Audio()
   this.audio.src = 'http://23.237.126.42/ost/super-mario-bros/khbnvkqp/01%20-%20Super%20Mario%20Bros.mp3'
  }
  draw() {
    //if (this.x < -canvas.width) this.x = 0
    //  this.x-- // para que el background se mueva a la izquierda
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x + canvas.width, this.y, this.width, this.height)
  }
}

class Ostrich {
  constructor() {
    this.x = 50
    this.y = canvas.height-100
    this.width = 50
    this.height = 50
    this.speed= 5
    this.velX= 0
    this.velY= 0
    //fisica
    this.jumping= false,
    this.jumpStrength= 7,
    this.grounded= false,
    //imagen
    this.standDer = new Image()
    this.standDer.src = images.ostrichs.standDer
    // this.standDer.onload = () => {
    //   this.draw()
    // }
    this.caminarDer= new Image()
    this.caminarDer.src = images.ostrichs.caminandoDer
    
   
   
  }
  draw() {
    //ctx.drawImage(this.standDer, this.x, this.y, this.width, this.height )
    if(frames % 8 === 0){
      animate++
      if(animate === 4) animate = 0
    }
    //ctx.clearRect(0,0,canvas.width, canvas.height)
    ctx.drawImage(
      this.caminarDer, //imagen
      cycleLoopCoDer[animate] *92.8, // posición en x, de la imagen
      // iteramos entre los estados de la imagen: 0, 16, 32
      0, // posición en y, de la imagen sobre canvas
     // iteramos entre los estados de la imagen: 0, 16, 32
      92.4, // ancho de la fuente (imagen)
      50, //alto de la fuente (imagen)
     this.x, // el punto x de destino en el canvas
      this.y, // el punto y de destino en el canvas
      92.4, // ancho de la imagen en canvas
      50 // alto de la imagen en canvas
    );
  }
  
  moveRight() {
    console.log("ADSasdas", this.x);

    this.x += 50
  }
  isTouching(pipe) {
    return (this.x < pipe.x + pipe.width &&
      this.x + this.width > pipe.x &&
      this.y > pipe.y + pipe.height &&
      this.y + pipe.height > pipe.y)
  }
}
