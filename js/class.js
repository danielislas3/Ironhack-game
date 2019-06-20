class Board {
  constructor() {
    this.score=0
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = images.niveles.bgAmanecer
    // this.img.onload = () => {
    //   this.draw()
    // }
    this.audio = new Audio()
    this.audio.src = 'http://23.237.126.42/ost/sonic-lost-world/iuyyhqnw/01%20Wonder%20World%20-%20Title%20Theme.mp3'
  }
  draw() {
    //if (this.x < -canvas.width) this.x = 0
    //  this.x-- // para que el background se mueva a la izquierda
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x + canvas.width, this.y, this.width, this.height)
    ctx.font = '20px Arial'
    ctx.fillStyle="white"
    ctx.fillText(`: ${this.score}`, canvas.width-100,50)
    
    vidas == 3 ?  ctx.fillText("❤️❤️❤️", canvas.width-100,80) : 
    vidas == 2 ?  ctx.fillText("❤️❤️", canvas.width-100,80) :
    vidas == 1 ?  ctx.fillText("❤️", canvas.width-100,80) : tx.fillText("😭", canvas.width-100,80)
    
  }
}

class Ostrich {
  constructor() {
    this.x = 5
    this.y = canvas.height - 100
    this.width = 60
    this.height = 50
    this.speed = 5
    this.velX = 0
    this.velY = 0
    //fisica
    this.jumping = false,
      this.jumpStrength = 7,
      this.grounded = false,
      //imagen para stand
      this.standDer = new Image()
    this.standIz = new Image()
    this.standDer.src = images.ostrichs.standDer
    this.standIz.src = images.ostrichs.standIzq
    // this.standDer.onload = () => {
    //   this.draw()
    // }
    //sprites animados 
    this.caminarDer = new Image()
    this.caminarIz = new Image()

    this.standImg = new Image()

    this.brincoI = new Image()
    this.brincoD = new Image()

    this.caminarDer.src = images.ostrichs.caminandoDer
    this.caminarIz.src = images.ostrichs.caminandoIz
    //sprites salto

    this.brincoI.src = images.ostrichs.saltoIzq
    this.brincoD.src = images.ostrichs.saltoDer

    this.direction = true

  }
  drawRight() {
    auxStatic = false
    this.direction = true
    //ctx.drawImage(this.standDer, this.x, this.y, this.width, this.height )
    if (frames % 10 === 0) {
      animate++
      if (animate === 4) animate = 0
    }
    //ctx.clearRect(0,0,canvas.width, canvas.height)
    ctx.drawImage(
      this.caminarDer, //imagen
      cycleLoopCoDer[animate] * 93.8, // posición en x, de la imagen
      0, // posición en y, de la imagen sobre canvas
      // iteramos entre los estados de la imagen: 0, 16, 32
      92.8, // ancho de la fuente (imagen)
      50, //alto de la fuente (imagen)
      this.x, // el punto x de destino en el canvas
      this.y, // el punto y de destino en el canvas
      92.8, // ancho de la imagen en canvas
      50 // alto de la imagen en canvas
    );
  }
  drawLeft() {
    auxStatic = false
    this.direction = false
    //ctx.drawImage(this.standDer, this.x, this.y, this.width, this.height )
    if (frames % 11 === 0) {
      animate++
      if (animate === 4) animate = 0
    }
    //ctx.clearRect(0,0,canvas.width, canvas.height)
    ctx.drawImage(
      this.caminarIz, //imagen
      cycleLoopCoIz[animate] * 95.4, // posición en x, de la imagen
      // iteramos entre los estados de la imagen: 0, 16, 32
      0, // posición en y, de la imagen sobre canvas
      // iteramos entre los estados de la imagen: 0, 16, 32
      93.4, // ancho de la fuente (imagen)
      54, //alto de la fuente (imagen)
      this.x, // el punto x de destino en el canvas
      this.y, // el punto y de destino en el canvas
      93.4, // ancho de la imagen en canvas
      54 // alto de la imagen en canvas
    );


  }
  drawUpDer() {
    auxStatic = false
    this.direction = true
    // this.direction = true
    //ctx.drawImage(this.standDer, this.x, this.y, this.width, this.height )
    if (frames % 20 === 0) {
      animate++
      if (animate === 4) animate = 0
    }
    //ctx.clearRect(0,0,canvas.width, canvas.height)

    ctx.drawImage(
      this.brincoD, //imagen
      cycleLoopUpDer[animate] * 77.8, // posición en x, de la imagen
      // iteramos entre los estados de la imagen: 0, 16, 32
      0, // posición en y, de la imagen sobre canvas
      // iteramos entre los estados de la imagen: 0, 16, 32
      77.8, // ancho de la fuente (imagen)
      104, //alto de la fuente (imagen)
      this.x, // el punto x de destino en el canvas
      this.y, // el punto y de destino en el canvas
      77.8, // ancho de la imagen en canvas
      104 // alto de la imagen en canvas
    );


  }
  drawStaticRight() {
    ctx.drawImage(this.standDer, this.x, this.y, this.width, this.height)
  }
  drawStaticLeft() {
    ctx.drawImage(this.standIz, this.x, this.y, this.width, this.height)
  }
  drawStatic() {
    if (this.direction) {
      ctx.drawImage(this.standDer, this.x, this.y, this.width, this.height)
    } else {
      ctx.drawImage(this.standIz, this.x, this.y, this.width, this.height)
    }
  }
  // moveRight() {
  //   console.log("mover derecha", this.x);
  //   this.x += 50
  // }


  isTouching(enemigos) {
    return (this.x < enemigos.x + enemigos.width &&
      this.x + this.width > enemigos.x &&
      this.y < enemigos.y + enemigos.height &&
      this.y + this.height > enemigos.y)
  }
}

class Plataforms {
  constructor(x, y, platformWidth, platformHeight, color) {
    this.x = x,
    this.y = y,
    this.width = platformWidth,
    this.height = platformHeight
    this.color = color
    this.plataformImg= new Image()
    this.plataformImg.src=images.platforms.sabanaTree
  }
  draw() {

    //ctx.fillStyle = this.color
  ctx.drawImage(this.standDer, this.x, this.y, this.width, this.height )

   // ctx.fillRect(this.x, this.y, this.width, this.height)
  }

}
class Tree {

  constructor( x,y,type,width=200) { 
    //type true= rama, false= arbol
    
    this.x = x
    this.y = y
    this.width = width
    this.height = 40
    this.imgArbol = new Image()
    this.imgRama = new Image()
    this.imgArbol.src = images.platforms.sabanaTree
    this.imgRama.src = images.platforms.rama
   this.type = type
   if(this.type){
    this.height=40
   }
   if(this.width<100) this.height=30

  }
  move() {
    this.x--
  }
  draw() {
   if(this.type){
    ctx.drawImage(this.imgRama, this.x, this.y, this.width, this.height)
   }else{
    this.height=130
    this.width=230
    ctx.drawImage(this.imgArbol, this.x, this.y, this.width, this.height)

   }

      
    //this.move()
  }
}

class Enemigos {

  constructor( x,y,an=145) { 
    //type true= rama, false= arbol
    this.oPosition=x
    this.x = x
    this.y = y
    this.width = 45
    this.height = 45
    this.snake1 = new Image()
    this.snake1.src = images.enemigos.snake
    this.direction=true
    this.anchoP=an
  }
  move() {
    if(this.direction){
      this.x+=1.3
      if(this.x>this.oPosition+this.anchoP)this.direction=false
    }else{
      this.x-=1.3
      if(this.x<this.oPosition)this.direction=true
    }
  }
  draw() {
    ctx.drawImage(this.snake1, this.x, this.y, this.width, this.height)
   }
      
    //this.move()
  }
class Huevos {

    constructor(x,y) { 
      //type true= rama, false= arbol
      this.oPosition=x
      this.x = x
      this.y = y
      this.width = 45
      this.height = 45
      this.huevo1 = new Image()
      this.huevo1.src = images.huevo
    }
  
    draw() {
      ctx.drawImage(this.huevo1, this.x, this.y, this.width, this.height)
     }
        
      //this.move()
 }