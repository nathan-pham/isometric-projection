import { colors, size, h } from "./iso/constant.js"
import { vertex, polygon } from "./iso/geometry.js"
import projection, { P3 } from "./iso/projection.js"
import fit from "./fit.js"

const canvas = document.getElementById("app")
const ctx = canvas.getContext("2d")

const vertices = [
  vertex(-h, -h, -h),
  vertex( h, -h, -h),
  vertex( h,  h, -h),
  vertex(-h,  h, -h),
  vertex(-h, -h,  h),
  vertex( h, -h,  h),
  vertex( h,  h,  h),
  vertex(-h,  h,  h),
]

const polygons = [
  polygon([ 1, 2, 6, 5 ], colors.shade),
  polygon([ 2, 3, 7, 6 ], colors.bright),
  polygon([ 4, 5, 6, 7 ], colors.bright)
]

const render = () => {
  let x, y, z
  for(z = 0; z < 4; z++){
    const hz = z / 2;
    for(y = hz; y < 4 - hz; y++){
      for(x = hz; x < 4 - hz; x++){
        const translated = vertices.map(vert => {
          return P3(vert.x + x * size, vert.y + y * size, vert.z + z * size)
        })
                    
        const projVerts = translated.map(vert => projection.project(vert))
        polygons.forEach(poly => {
          ctx.fillStyle = poly.color
          ctx.strokeStyle = poly.color
          ctx.lineWidth = 1
          ctx.beginPath()
          poly.indexes.forEach(index => ctx.lineTo(projVerts[index].x , projVerts[index].y))
          ctx.stroke()
          ctx.fill()
        })
      }
    }
  }
}

fit(canvas, render)