
function recargar(){
  return document.location.reload()
}
function intro_screen() {
  ctx.font = "50px 'Ubuntu'"
  ctx.fillStyle="white"
  ctx.fillText('Press Enter To Start 💩',130,280 )
  
 
}
function startGame() {
  gameStarted = true
  if (interval) return
  scenario.audio.play()
  interval = setInterval(update, 1000 / 60)
}
//para movimiento
document.body.addEventListener('keyup', e => {
  keys[e.keyCode] = false
  auxStatic = true
  
})

document.body.addEventListener('keydown', e => {
    //para movimiento
  if (e.keyCode === 13 && !gameStarted) {
    startGame()
    //gameStarted=true;
    
  } else if (e.keyCode === 80) {
    clearInterval(interval)
    interval = false
  }// else if (e.keyCode === 39) {
  //   player1.moveRight()
  // } 
  keys[e.keyCode] = true

})
//coliciones para enemigo
function checkCollitions() {
  enemigos.map((e) => {
    if (player1.isTouching(e)){ 
      vidas--
      if(vidas===0)
      gameOver()
    }})

  huevosArr.map((h) => {
    if (player1.isTouching(h)){ 
      scenario.score++
      puntos=scenario.score
      huevosArr.pop()
    }

  })
  
}

function drawPlatforma()  {
  
  ctx.fillStyle = platforma[0].color
  platforma.map((platform,) =>{
   ctx.fillStyle=platform.color 
  return ctx.fillRect(platform.x, platform.y, platform.width, platform.height)
  }
  )
}
function drawPlatforms() {
  platforms.forEach(arbol => {
    arbol.draw()
  })
}
function drawEnemi() {
  enemigos.forEach(ene => {
    ene.draw()
  })
}
function drawHuevos() {
  huevosArr.forEach(h => {
    h.draw()
  })
}

function gameOver() {
  
  clearInterval(interval)
  ctx.font = '60px Arial'
  ctx.fillStyle="white"
  ctx.fillText("😭 - GAME OVER - 😭", 120,280)
  interval=null
  scenario.audio.pause()
  
  return true
}

  
