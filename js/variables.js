pygameq= document.querySelector('#pygame')
pygameq.onclick=()=>{
  startGame()
}
player1btn= document.querySelector('#player')
player1btn.onclick=()=>{
 player=1
}
player2btn= document.querySelector('#player2')
player2btn.onclick=()=>{
 player=2
}

let frames = 0
let gameStarted = false
const keys = []
const friction = 0.65
const gravity = 0.68
const platforms = []
const platforma = []
const enemigos = []
const huevosArr = []
const salida = []
let puntos=0
let vidas=2
let auxStatic = true
let player = 1

const platform_width = 120
const platform_height = 10
let interval
let animate = 0
 let cycleLoopCoDer= [0,1,2,4]
 let cycleLoopCoIz= [4,3,2,1,0]
 let cycleLoopUpDer=[0,2,3,4,2]

const images={
    niveles:{
      bgAmanecer: "./img/amanecer.png",
      bgMedioDia: "./img/medio-dia-png.jpg",
      bgTarde: "./img/tarde.png",
      bgNoche: "./img/noche.png",
    },
   ostrichs:{
     caminandoDer:"./img/thumbnail_Caminando.png",
     caminandoIz:"./img/thumbnail_CaminandoIz.png",
     //brinco
     saltoDer:"./img/thumbnail_saltoDer.png",
     saltoIzq:"./img/thumbnail_saltoIzq.png",
     //stand
     standDer:"./img/standD.png",
     standIzq:"./img/standIz.png"

   },
   platforms:{
    sabanaTree:"./img/sabana.png",
    rama:"./img/rama.png",
    ramaChica:"./img/rama.png"
   },
   enemigos:{
    snake:"./img/snake.png"
   },
   huevo:"./img/huevo.png"
  }
  let nivelesImagen=[images.niveles.bgAmanecer,images.niveles.bgMedioDia,images.niveles.bgTarde,images.niveles.bgNoche]


