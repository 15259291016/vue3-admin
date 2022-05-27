<template>
  <div class="update-avatar">
    <!-- <div class="preview" style="width:100px;height:100px;" /> -->
    <img :src="img" class="img" />
  </div>
</template>

<script setup>
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'

const props = defineProps({
  img: {
    type: [String, Object],
    default: '',
  }
})


const cropper = ref(null)
const init = () => {
  const image = document.querySelector('.img')
  cropper.value = new Cropper(image, {
    viewMode: 1,
    dragMode: 'move',
    aspectRatio: 1,
    preview: '.preview',
    autoCropArea: 1,
    cropBoxMovable: false,
    cropBoxResizable: false,
    background: false
  })
}

onMounted(() => {
  init()
})
</script>

<style scoped>
img {
  display: block;
  max-width: 100%;
  height: 300px;
}
</style>