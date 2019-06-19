
function recargar(){
  return document.location.reload()
}
addEventListener('keydown', (e) => {
  keys[e.keyCode] = true
  if (e.keyCode === 13) {
    startGame()
  } else if (e.keyCode === 32) {
    clearInterval(interval)
    interval = false
  } else if (e.keyCode === 39) {
    gamer1.moveRight()
  } else if (e.keycode === 48) {
    recargar()
  }
})
