<template>
  <div class="guide hover-effect" @click="handleGuide">
    <i class="r4 r4-guide" style="font-size: 20px;"></i>
  </div>
</template>

<script setup lang="ts">
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { useI18n } from 'vue-i18n'
import steps from './index'

const { t } = useI18n()
const i18n = useI18n()

let driver = ref<any>(null);
onMounted(() => {
  driver = new Driver({
    // 禁止点击蒙版关闭
    allowClose: false,
    closeBtnText: i18n.t('msg.guide.close'),
    nextBtnText: i18n.t('msg.guide.next'),
    prevBtnText: i18n.t('msg.guide.prev'),
    doneBtnText: i18n.t('msg.guide.done'),
  })
})

const handleGuide = () => {
  driver.defineSteps(steps(i18n))
  driver.start()
}
</script>

<style scoped>
</style>