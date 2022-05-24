<template>
  <el-card>
    <template #header>
      <span> {{ $t('msg.workBench.team') }} </span>
    </template>
    <ul class="team">
      <li><i class="r4 r4-github" style="font-size: 32px;"></i><span>Rich4$t</span></li>
      <li><i class="r4 r4-github" style="font-size: 32px;"></i><span>Rich4$t</span></li>
      <li><i class="r4 r4-github" style="font-size: 32px;"></i><span>Rich4$t</span></li>
      <li><i class="r4 r4-github" style="font-size: 32px;"></i><span>Rich4$t</span></li>
      <li><i class="r4 r4-github" style="font-size: 32px;"></i><span>Rich4$t</span></li>
    </ul>
  </el-card>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.team {
  display: flex;
  flex-wrap: wrap;

  li {
    width: 50%;
    padding: 10px 0;
    display: flex;
    align-items: center;
  }
}
</style>