const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const scenario = new Board()


function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  frames++
  scenario.draw()

}
function startGame() {
  if (interval) return
  scenario.audio.play()
  interval = setInterval(update, 1000 / 600)
}
