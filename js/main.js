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
function drawPlatforms()  {
  ctx.fillStyle = platforms[0].color
  platforms.map(platform =>{
    ctx.fillStyle=platform.color 
   return ctx.fillRect(platform.x, platform.y, platform.width, platform.height)
  }
  )
}
function intro_screen() {
  ctx.font = '20px Arial'
  ctx.fillText('Press Enter To Start',( canvas.width/2)-100, (canvas.height / 2) )
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  frames++
  scenario.draw()
  drawPlatforms()

  //si no hay movimiento lateral dibuja estatico
   if(((keys[37]||keys[39]) === (undefined||false)) || ((keys[37]||keys[39])===undefined)){
    player1.drawStaticRight()
   }
  
  //jump
  if (keys[38] || keys[32]) {
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

  //collition de plataformas
  player1.grounded = false
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
}
function startGame() {
  gameStarted = true
  if (interval) return
  scenario.audio.play()
  interval = setInterval(update, 1000 / 60)
}

const scenario = new Board()
const player1= new Ostrich()
const plataf1= new Plataforms(400,400,platform_width,platform_height,"red")

  //push pataforma del piso
platforms.push({
  x: -canvas.width,
  y: canvas.height - 30,
  width: canvas.width + canvas.width * 2,
  height: platform_height,
  color:"rgba(0, 0, 44, 0)"
})
platforms.push(plataf1)
//AL Ultimo
intro_screen()
