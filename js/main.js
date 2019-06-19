const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const scenario = new Board()
const gamer1= new Ostrich()

function intro_screen() {
  ctx.font = '20px Arial'
  ctx.fillText('Press Enter To Start',( canvas.width/2)-100, (canvas.height / 2) )
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  frames++
  scenario.draw()
  gamer1.draw()
  
  
}
function startGame() {
  if (interval) return
  scenario.audio.play()
  interval = setInterval(update, 1000 / 60)
}
intro_screen()
