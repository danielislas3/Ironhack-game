const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

//funcion de colision para la gravedad
function collisionCheck(char, plat) {
  const vectorX = char.x + char.width / 2 - (plat.x + plat.width / 2)
  const vectorY = char.y + char.height / 2 - (plat.y + plat.height / 2)

  const halfWidths = char.width / 2 + plat.width / 2
  const halfHeights = char.height / 2 + plat.height / 2

  let collisionDirection = null

  if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
    var offsetX = halfWidths - Math.abs(vectorX)
    var offsetY = halfHeights - Math.abs(vectorY)
    if (offsetX < offsetY) {
      if (vectorX > 0) {
        collisionDirection = 'left'
        char.x += offsetX
      } else {
        collisionDirection = 'right'
        char.x -= offsetX
      }
    } else {
      if (vectorY > 0) {
        collisionDirection = 'top'
        char.y += offsetY
      } else {
        collisionDirection = 'bottom'
        char.y -= offsetY
      }
    }
  }
  return collisionDirection
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  frames++
  scenario.draw()
  drawPlatforma()
  drawPlatforms()
  drawEnemi()
  checkCollitions()



  //si no hay movimiento lateral dibuja estatico
 // if(((keys[39]) === (undefined||false)) || ((keys[37]||keys[39])===undefined)){
  if (auxStatic) {
    if (!keys[39]) {
      player1.drawStatic()
    }
    if (!keys[37]) {
      player1.drawStatic()
    }
  }

  //jump
  if (keys[38] || keys[32]) {
//    player1.drawUpDer()// para animacion de brinco
  // console.log( player1.drawUpDer()) 
    if (!player1.jumping) {
      player1.velY = -player1.jumpStrength * 2
      player1.jumping = true
    }
  }

  //movimiento
  if (keys[39]) {
    if (player1.velX < player1.speed) {
      player1.drawRight()
      player1.velX++
    }
  }

  if (keys[37]) {
    if (player1.velX > -player1.speed) {
      player1.drawLeft()
      player1.velX--
    }
  }
  //movimientos del player 1
  //jump
  player1.y += player1.velY
  player1.velY += gravity

  //movimiento
  player1.x += player1.velX
  player1.velX *= friction

  //collition de plataforma base
  player1.grounded = false
  platforma.map(platform => {
    const direction = collisionCheck(player1, platform)
    if (direction == 'left' || direction == 'right') {
      player1.velX = 0
    } else if (direction == 'bottom') {
      player1.jumping = false
      player1.grounded = true
    } else if (direction == 'top') {
      player1.velY *= -1
    }
  })
  //colicionde plataforma con arboles
  platforms.map(platform => {
    const direction = collisionCheck(player1, platform)
    if (direction == 'left' || direction == 'right') {
      player1.velX = 0
    } else if (direction == 'bottom') {
      player1.jumping = false
      player1.grounded = true
    } else if (direction == 'top') {
      player1.velY *= -1
    }
  })

//checa si esta en el piso
  if (player1.grounded) {
    player1.velY = 0
  }  
  //if(keys[79]){
    enemigos.forEach(e=>{
      e.move()
    })
  
}


const scenario = new Board()
const player1 = new Ostrich()
const snake1= new Enemigos(100,400,50,50)
//const plataf1 = new Plataforms(300,480,platform_width,platform_height,"red")
const arbol1= new Tree(100,430,true)

//push pataforma del piso
platforma.push({
  x: -canvas.width,
  y: canvas.height - 30,
  width: canvas.width + canvas.width * 2,
  height: platform_height,
  color:"rgba(0, 0, 44, 0)"
})
platforms.push(arbol1)
enemigos.push(snake1)


//AL Ultimo
intro_screen()

