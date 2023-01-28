const canvas = document.querySelector('canvas')
  
//setting c to a 2d and not 3d
const c = canvas.getContext('2d')

//setting up the size of canvas and the numbers below show the aspect ratio for a 16 by 9 screen
// 
canvas.width = 1024
canvas.height = 576

//making basic square and c stands for context
 
let y = 100
// Y is height of the player 
let height = 100
let bottom = y + 100
// made a function called animate which request animation frame then uses the parameter animate then we call the function and just continues to loop 
// because this function will give the idea of movment we paste our player which is c.fillstyle and fillrect in there
function animate () {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'white'
  c.clearRect(0, 0, canvas.width, canvas.height)

  c.filStyle = 'red'
  c.fillRect(100, y, 100, 100)
y++

if (bottom < canvas.height) {
  y++ 
  bottom = y + 100
  }
}
animate()
