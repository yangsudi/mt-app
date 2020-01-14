<template>
  <div>
    <el-input v-model="text"></el-input>
    <el-button @click="handleImg">选择图片</el-button>
    <div class="preview" ref="preview">
      <div class="first" ref="first"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImgToCanvas',
  data () {
    return {
      text: '水印'
    }
  },
  methods: {
    // blobToImg
    blobToImg (blob) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader()
        reader.addEventListener('load', () => {
          let img = new Image()
          img.src = reader.result
          img.addEventListener('load', () => resolve(img))
        })
        reader.readAsDataURL(blob)
      })
    },
    // imgToCanvas
    imgToCanvas (img) {
      let canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      let ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      return canvas
    },
    // watermark
    watermark (canvas, text) {
      return new Promise((resolve, reject) => {
        let ctx = canvas.getContext('2d')
        ctx.font = '24px 宋体'
        ctx.fillStyle = '#ffc82c'
        ctx.textAlign = 'right'
        ctx.fillText(text, canvas.width - 20, canvas.height - 20)
        canvas.toBlob(blob => resolve(blob))
      })
    },

    handleImg () {
      let input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.setAttribute('accept', 'image/*')
      input.onchange = async () => {
        let img = await this.blobToImg(input.files[0])
        let canvas = this.imgToCanvas(img)
        let blob = await this.watermark(canvas, this.text)
        let newImg = await this.blobToImg(blob)
        this.$refs.preview.insertBefore(newImg, this.$refs.preview.firstChild)
      }
      input.click()
    }
  }
}
</script>
