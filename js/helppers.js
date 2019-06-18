

addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    startGame()
  } else if (e.keyCode === 32) {
    clearInterval(interval)
    interval = false
  } else if (e.keyCode === 39) {
    gamer1.moveRight()
  } else if (e.keycode === 82) {
    location.reload(true)
  }
})
