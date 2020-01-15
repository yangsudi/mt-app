<template>
  <div>
    <canvas width="500" height="500" style="background: #eeeeee" id="canvas"
            @mousemove="handleMouseMove"
            @mouseup="handleMouseLeave"
            @mousedown="handleMouseDown">
    </canvas>
    <span>{{curPoint}}</span>
    <span>{{movePoint}}</span>
    <span>{{lastPoint}}</span>
  </div>
</template>
<script>
export default {
  name: 'DragCanvas',
  data () {
    return {
      curPoint: {},
      movePoint: {},
      lastPoint: {}
    }
  },
  methods: {
    init () {
      // let canvas = document.querySelector('canvas')
      // let ctx = canvas.getContext('2d')
    },
    handleMouseDown (event) {
      let x = event.clientX
      let y = event.clientY
      this.curPoint = {
        x, y
      }
    },
    handleMouseMove (event) {
      let moveX = event.clientX
      let moveY = event.clientY
      this.movePoint = { x: moveX, y: moveY }
      this.drawLine(this.curPoint.x, this.curPoint.y, this.lastPoint.x, this.lastPoint.y)
      this.curPoint = this.movePoint
    },
    handleMouseLeave (event) {
      let leaveX = event.clientX
      let leaveY = event.clientY
      this.lastPoint = { x: leaveX, y: leaveY }
    },
    drawLine (x1, y1, x2, y2) {
      let canvas = document.querySelector('canvas')
      let ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineWidth = 10
      ctx.lineTo(x2, y2)
      ctx.stroke()
      ctx.closePath()
    }
  }
}
</script>
