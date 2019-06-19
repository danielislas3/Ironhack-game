let frames = 0
let gameStarted = false
const keys = []
const friction = 0.55
const gravity = 0.98
const platforms = []

let auxStatic = true

const platform_width = 120
const platform_height = 10
let interval
let animate = 0
 let cycleLoopCoDer= [0,1,2,4]
 let cycleLoopCoIz= [4,3,2,1,0]

const images={
    niveles:{
      bgAmanecer: "./img/tarde.png",
      bgMedioDia: "./img/medio-dia-png.jpg",
      bgTarde: "./img/tarde.png",
      bgNoche: "./img/noche.png",
    },
   ostrichs:{
     caminandoDer:"./img/thumbnail_Caminando.png",
     caminandoIz:"./img/thumbnail_CaminandoIz.png",
     brincoDer:"./img/thumbnail_brinco.png",
     brincoIz:"./img/thumbnail_brincoIz.png",
     standDer:"./img/standD.png",
     standIzq:"./img/standIz.png"

   }
  }


