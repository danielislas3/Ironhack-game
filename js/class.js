class Board {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = "./img/tarde.png"
    this.img.onload = () => {
      this.draw()
    }
    // this.audio = new Audio()
    // this.audio.src = 'http://23.237.126.42/ost/super-mario-bros/khbnvkqp/01%20-%20Super%20Mario%20Bros.mp3'
  }
  draw() {
    if (this.x < -canvas.width) this.x = 0
    this.x--
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x + canvas.width, this.y, this.width, this.height)
  }
}
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  frames++
  scenario.draw()

}
function startGame() {
  if (interval) return
  scenario.audio.play()
  interval = setInterval(update, 1000 / 120)
}

addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    startGame()
  } else if (e.keyCode === 32) {
    clearInterval(interval)
    interval = false
  } else if (e.keyCode === 39) {
    mario.moveRight()
  } else if (e.keycode === 82) {
    location.reload(true)
  }
})
