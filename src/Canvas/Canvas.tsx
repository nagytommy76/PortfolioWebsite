'use client'
import { useRef, useEffect, useState } from 'react'

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
   array: IDotArray[]
}

class Dot {
   canvas: HTMLCanvasElement
   ctx: CanvasRenderingContext2D
   mousePosition: { x: number; y: number }
   /*dots: IDots*/
   x: number
   y: number
   vx: number
   vy: number
   radius: number
   colorDot: string[]
   color: any
   constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D /*dots: IDots*/) {
      this.canvas = canvas
      this.ctx = ctx
      this.mousePosition = {
         x: (30 * canvas.width) / 100,
         y: (30 * canvas.height) / 100,
      }
      /*this.dots = dots*/
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
   }

   create() {
      this.ctx.beginPath()
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      // make the dot colour fade out the further they are from the mouse
      const dotDistance = ((this.x - this.mousePosition.x) ** 2 + (this.y - this.mousePosition.y) ** 2) ** 0.5
      const distanceRatio = dotDistance / (1000 / 1.7)

      // this chops the bracket off the rgb colour and ads an opacity
      this.ctx.fillStyle = this.color.slice(0, -1) + `,${1 - distanceRatio})`

      this.ctx.fill()
   }

   animate(dot: IDots) {
      // dont animate the first dot, it will follow mouse
      //   let dots = { nb: 575, distance: 60, d_radius: 280, array: [] }
      for (let i = 1; i < dot.numberOfDots; i++) {
         console.log(dot.array)
         if (dot.array[i].y < 0 || dot.array[i].y > this.canvas.height) {
            dot.array[i].vx = dot.array[i].vx
            dot.array[i].vy = -dot.array[i].vy
         } else if (dot.array[i].x < 0 || dot.array[i].x > this.canvas.width) {
            dot.array[i].vx = -dot.array[i].vx
            dot.array[i].vy = dot.array[i].vy
         }
         dot.array[i].x += dot.array[i].vx
         dot.array[i].y += dot.array[i].vy
      }
   }

   line(dotArray: IDotArray, numberOfDots: number, distance: number, d_radius: number) {
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
                  distanceRatio -= 0.3
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
   const [mouse, setMouse] = useState({ x: 100, y: 100 })
   const [dots, setDots] = useState<IDots>({
      numberOfDots: 600,
      distance: 70,
      d_radius: 300,
      array: [
         {
            x: Math.random() * 1000,
            y: Math.random() * 1000,
            vx: -0.5 + Math.random(),
            vy: -0.5 + Math.random(),
            radius: Math.random() * 1.5,
            color: 'rgb(81, 162, 233)',
         },
      ],
   })
   const [dotArray, setDotArray] = useState<IDotArray[]>([
      {
         x: Math.random() * 1000,
         y: Math.random() * 1000,
         vx: -0.5 + Math.random(),
         vy: -0.5 + Math.random(),
         radius: Math.random() * 1.5,
         color: 'rgb(81, 162, 233)',
      },
   ])

   function createDots() {}

   useEffect(() => {
      const canvas = canvasRef.current
      if (canvas == null) return // current may be null
      const ctx = canvas.getContext('2d')
      if (ctx == null) return // context may be null
      //Our first draw

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      //   console.time('idő: ')
      for (let i = 0; i < dots.numberOfDots; i++) {
         //  console.count('For ciklus lefutva: ')
         const createdDot = new Dot(canvas, ctx)
         console.log(createdDot)

         setDotArray([
            ...dotArray,
            {
               color: 'rgb(199, 55, 23)',
               radius: createdDot.radius,
               vx: createdDot.vx,
               vy: createdDot.vy,
               x: createdDot.x,
               y: createdDot.y,
            },
         ])
         createdDot.create()
      }
      console.log(dotArray)
      //   console.timeLog('idő: ')
      //   setTimeout(() => {
      //      const createdDot = new Dot(canvas, ctx)

      //      createdDot.line(dots.array[0], dots.numberOfDots, dots.distance, dots.d_radius)
      //      createdDot.animate(dots)
      //   }, 1000)
   }, [])

   return (
      <canvas
         ref={canvasRef}
         className='w-full h-screen absolute top-0 bottom-0 right-0 left-0'
         height={1000}
         width={1000}
      ></canvas>
   )
}

export default Canvas
