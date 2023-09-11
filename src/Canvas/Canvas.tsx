'use client'
import { useRef, useEffect, useState, useCallback } from 'react'
interface IDotArray {
   [index: number]: IDotArray
   x: number
   y: number
   vx: number
   vy: number
   radius: number
   color: string
}

interface IDots {
   numberOfDots: number
   distance: number
   d_radius: number
}

interface IMousePosition {
   x: number
   y: number
}

function createFN(dotArray: IDotArray[], ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
   ctx.beginPath()
   for (let i = 0; i < 600; i++) {
      let x = dotArray[i].x
      let y = dotArray[i].y
      // if the particle goes off screen, re-assign the co-ordinates
      if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
         x = Math.floor(Math.random() * canvas.width)
         y = Math.floor(Math.random() * canvas.height)
      }
      // move to those co-ordinates and create the arcs
      ctx.moveTo(x, y)
      // x, y, radius, startingAngle, endingAngle
      ctx.arc(x, y, 2, 0, Math.PI * 2)
      ctx.fillStyle = dotArray[i].color
   }

   ctx.fill()
}

function line(
   dotArray: IDotArray[],
   ctx: CanvasRenderingContext2D,
   numberOfDots: number,
   distance: number,
   d_radius: number,
   mousePosition: IMousePosition
) {
   for (let i = 0; i < numberOfDots; i++) {
      for (let j = 0; j < numberOfDots; j++) {
         const i_dot = dotArray[i] as IDotArray | undefined
         const j_dot = dotArray[j] as IDotArray | undefined
         if (
            i_dot !== undefined &&
            j_dot !== undefined &&
            i_dot.x - j_dot.x < distance &&
            i_dot.y - j_dot.y < distance &&
            i_dot.x - j_dot.x > -distance &&
            i_dot.y - j_dot.y > -distance
         ) {
            if (
               i_dot.x - mousePosition.x < d_radius &&
               i_dot.y - mousePosition.y < d_radius &&
               i_dot.x - mousePosition.x > -d_radius &&
               i_dot.y - mousePosition.y > -d_radius
            ) {
               ctx.beginPath()
               ctx.moveTo(i_dot.x, i_dot.y)
               ctx.lineTo(j_dot.x, j_dot.y)
               // make the fill color fade out the further you are from the mouse
               const dotDistance =
                  ((i_dot.x - mousePosition.x) ** 2 + (i_dot.y - mousePosition.y) ** 2) ** 0.5
               let distanceRatio = dotDistance / d_radius

               // make it so it doesnt fade out completely
               distanceRatio -= 0.5
               if (distanceRatio < 0) {
                  distanceRatio = 0
               }

               ctx.strokeStyle = `rgb(81, 162, 233, ${1 - distanceRatio})`

               ctx.stroke()
               ctx.closePath()
            }
         }
      }
   }
}

function animate(dot: IDotArray[], canvas: HTMLCanvasElement, numberOfDots: number) {
   // dont animate the first dot, it will follow mouse
   for (let i = 1; i < numberOfDots; i++) {
      if (dot[i].y < 0 || dot[i].y > canvas.height) {
         dot[i].vx = dot[i].vx
         dot[i].vy = -dot[i].vy
      } else if (dot[i].x < 0 || dot[i].x > canvas.width) {
         dot[i].vx = -dot[i].vx
         dot[i].vy = dot[i].vy
      }
      dot[i].x += dot[i].vx
      dot[i].y += dot[i].vy
   }
}

class Dot {
   canvas: HTMLCanvasElement
   ctx: CanvasRenderingContext2D
   mousePosition: { x: number; y: number }
   x: number
   y: number
   vx: number
   vy: number
   radius: number
   colorDot: string[]
   color: string
   constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, mousePosition: IMousePosition) {
      this.canvas = canvas
      this.canvas.width = document.body.scrollWidth
      this.canvas.height = window.innerHeight
      this.canvas.style.display = 'block'

      this.ctx = ctx
      this.ctx.lineWidth = 0.3
      this.ctx.strokeStyle = 'rgb(81, 162, 233)'
      this.mousePosition = mousePosition
      this.colorDot = [
         'rgb(81, 162, 233)',
         'rgb(81, 162, 233)',
         'rgb(81, 162, 233)',
         'rgb(81, 162, 233)',
         'rgb(255, 77, 90)',
      ] // 80% of dots are blue. 20% pink
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.vx = -0.5 + Math.random()
      this.vy = -0.5 + Math.random()
      this.radius = Math.random() * 1.5

      this.color = this.colorDot[Math.floor(Math.random() * this.colorDot.length)]

      // console.log(this.colorDot[Math.floor(Math.random() * this.colorDot.length)])

      // this.ctx.fillStyle = this.color
   }

   create(dotArray: IDotArray[]) {
      this.ctx.beginPath()
      // this.ctx.fillStyle = '#FFF'
      // this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      // make the dot colour fade out the further they are from the mouse
      // const dotDistance = ((this.x - this.mousePosition.x) ** 2 + (this.y - this.mousePosition.y) ** 2) ** 0.5
      // const distanceRatio = dotDistance / (1000 / 1.7)

      // // this chops the bracket off the rgb colour and ads an opacity
      // this.ctx.fillStyle = this.color.slice(0, -1) + `,${1 - distanceRatio})`

      // console.log(this.ctx.fillStyle)
      for (let i = 0; i < 600; i++) {
         let x = dotArray[i].x
         let y = dotArray[i].y
         // if the particle goes off screen, re-assign the co-ordinates
         if (x < 0 || x > this.canvas.width || y < 0 || y > this.canvas.height) {
            x = Math.floor(Math.random() * this.canvas.width)
            y = Math.floor(Math.random() * this.canvas.height)
         }

         // move to those co-ordinates and create the arcs
         this.ctx.moveTo(x, y)
         // x, y, radius, startingAngle, endingAngle
         this.ctx.arc(x, y, 2, 0, Math.PI * 2)
      }

      this.ctx.fill()
   }

   animate(dot: IDotArray[], numberOfDots: number) {
      // dont animate the first dot, it will follow mouse
      for (let i = 1; i < numberOfDots; i++) {
         if (dot[i].y < 0 || dot[i].y > this.canvas.height) {
            dot[i].vx = dot[i].vx
            dot[i].vy = -dot[i].vy
         } else if (dot[i].x < 0 || dot[i].x > this.canvas.width) {
            dot[i].vx = -dot[i].vx
            dot[i].vy = dot[i].vy
         }
         dot[i].x += dot[i].vx
         dot[i].y += dot[i].vy
      }
   }

   line(dotArray: IDotArray[], numberOfDots: number, distance: number, d_radius: number) {
      for (let i = 0; i < numberOfDots; i++) {
         for (let j = 0; j < numberOfDots; j++) {
            const i_dot = dotArray[i] as IDotArray | undefined
            const j_dot = dotArray[j] as IDotArray | undefined
            if (
               i_dot !== undefined &&
               j_dot !== undefined &&
               i_dot.x - j_dot.x < distance &&
               i_dot.y - j_dot.y < distance &&
               i_dot.x - j_dot.x > -distance &&
               i_dot.y - j_dot.y > -distance
            ) {
               if (
                  i_dot.x - this.mousePosition.x < d_radius &&
                  i_dot.y - this.mousePosition.y < d_radius &&
                  i_dot.x - this.mousePosition.x > -d_radius &&
                  i_dot.y - this.mousePosition.y > -d_radius
               ) {
                  this.ctx.beginPath()
                  this.ctx.moveTo(i_dot.x, i_dot.y)
                  this.ctx.lineTo(j_dot.x, j_dot.y)
                  // make the fill color fade out the further you are from the mouse
                  const dotDistance =
                     ((i_dot.x - this.mousePosition.x) ** 2 + (i_dot.y - this.mousePosition.y) ** 2) ** 0.5
                  let distanceRatio = dotDistance / d_radius

                  // make it so it doesnt fade out completely
                  distanceRatio -= 0.5
                  if (distanceRatio < 0) {
                     distanceRatio = 0
                  }

                  this.ctx.strokeStyle = `rgb(81, 162, 233, ${1 - distanceRatio})`

                  this.ctx.stroke()
                  this.ctx.closePath()
               }
            }
         }
      }
   }
}

const Canvas = () => {
   const canvasRef = useRef<HTMLCanvasElement>(null)
   const [htmlCanvas, setHtmlCanvas] = useState<HTMLCanvasElement | null>(null)
   const [ctxState, setCtxState] = useState<CanvasRenderingContext2D | null>(null)
   const [mouse, setMouse] = useState<IMousePosition>({
      x: Math.random() * 1000,
      y: Math.random() * 1000,
   })
   const [dots, setDots] = useState<IDots>({
      numberOfDots: 600,
      distance: 70,
      d_radius: 300,
   })
   const [dotArray, setDotArray] = useState<IDotArray[]>([
      {
         x: Math.random() * 1000,
         y: Math.random() * 1000,
         vx: -0.5 + Math.random(),
         vy: -0.5 + Math.random(),
         radius: 500.5,
         color: 'rgb(200, 200, 200)',
      },
   ])

   const InitDots = useCallback(
      (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
         let createdArray: IDotArray[] = []
         for (let i = 0; i < dots.numberOfDots; i++) {
            const createdDot = new Dot(canvas, ctx, mouse)
            createdArray.push({
               color: createdDot.color,
               radius: createdDot.radius,
               vx: createdDot.vx,
               vy: createdDot.vy,
               x: createdDot.x,
               y: createdDot.y,
            })
            // createdDot.create()
         }
         return createdArray
      },
      [dots.numberOfDots, mouse]
   )

   const createDots = useCallback(() => {
      if (htmlCanvas !== null && ctxState !== null && dotArray.length > 2) {
         ctxState.clearRect(0, 0, htmlCanvas.width, htmlCanvas.height)
         createFN(dotArray, ctxState, htmlCanvas)
         // const createdDot = new Dot(htmlCanvas, ctxState, mouse)
         // createdDot.color = '#51a2e9'
         // createdDot.color = '#38d433'
         // createdDot.create(dotArray)
         // createdDot.line(dotArray, dots.numberOfDots, dots.distance, dots.d_radius)
         // createdDot.animate(dotArray, dots.numberOfDots)
         line(dotArray, ctxState, dots.numberOfDots, dots.distance, dots.d_radius, mouse)
         animate(dotArray, htmlCanvas, dots.numberOfDots)
      }
   }, [ctxState, htmlCanvas, dots.distance, dots.d_radius, dots.numberOfDots, mouse, dotArray])

   useEffect(() => {
      const canvas = canvasRef.current
      if (canvas == null) return // current may be null
      const ctx = canvas.getContext('2d')
      if (ctx == null) return // context may be null
      setHtmlCanvas(canvas)
      setCtxState(ctx)
      // // Create Dots
      // setDotArray([...dotArray, ...InitDots(canvas, ctx)])
      setDotArray([...InitDots(canvas, ctx)])
      // createDots(canvas, ctx)
      // console.count('LEFUTOK USEEFFECT: ')
      // console.log(dotArray)
      // // console.log(dotArray)
      // const draw = setInterval(createDots, 1000 / 30)
      // return () => clearInterval(draw)
   }, [InitDots])

   useEffect(() => {
      if (htmlCanvas == null) return
      if (ctxState == null) return
      // Create Dots

      // setDotArray([...dotArray, ...InitDots(htmlCanvas, ctxState)])
      // createDots(htmlCanvas, ctxState)
      createDots()
      console.count('LEFUTOK USEEFFECT: ')
      // console.log(dotArray)
      // console.log(dotArray)
      const draw = setInterval(createDots, 1000 / 30)
      return () => clearInterval(draw)
   }, [htmlCanvas, ctxState, mouse, createDots])

   // useEffect(() => {
   //    if (ctxState == null) return
   //    if (htmlCanvas == null) return
   //    createDots()
   //    // const draw = setInterval(createDots, 1000 / 30)
   //    // return () => clearInterval(draw)
   // }, [createDots, ctxState, htmlCanvas])

   const onMouseMove = (event: React.MouseEvent) => {
      setMouse({
         x: event.pageX,
         y: event.pageY,
      })
      try {
         // want the first dot to follow the mouse
         const handleMarkComplete = () => {
            // 1. Find the todo with the provided id
            const currentTodoIndex = 0
            // 2. Mark the todo as complete
            const updatedDot = Object.assign({}, dotArray[currentTodoIndex])
            updatedDot.x = event.pageX
            updatedDot.y = event.pageY
            // 3. Update the todo list with the updated todo
            const newDots = dotArray.slice()
            newDots[currentTodoIndex] = updatedDot
            setDotArray(newDots)
         }
         handleMarkComplete()
      } catch {}
   }

   return (
      <canvas
         ref={canvasRef}
         onMouseMove={onMouseMove}
         className='w-full h-screen absolute top-0 bottom-0 right-0 left-0 z-0'
         height={1500}
         width={1500}
      ></canvas>
   )
}

export default Canvas
// https://github.com/bscottnz/portfolio-site/blob/main/src/heroCanvas.js
// https://levelup.gitconnected.com/create-your-own-particles-js-9fc8b719548a
