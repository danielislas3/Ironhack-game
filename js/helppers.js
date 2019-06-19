
function recargar(){
  return document.location.reload()
}
//para movimiento
document.body.addEventListener('keyup', e => {
  keys[e.keyCode] = false
})

document.body.addEventListener('keydown', e => {
    //para movimiento
  if (e.keyCode === 13 && !gameStarted) {
    startGame()
  } else if (e.keyCode === 80) {
    clearInterval(interval)
    interval = false
  }// else if (e.keyCode === 39) {
  //   player1.moveRight()
  // } 
  keys[e.keyCode] = true

})

  
