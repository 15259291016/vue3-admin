<template>
  <div>
    <el-result icon="success" title="提交成功"
      sub-title="提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。">
      <template #extra>
        <div class="extra-wrap">
          <div class="buttons">
            <el-button type="primary">返回首页</el-button>
            <el-button plain>查看项目</el-button>
            <el-button plain>打印</el-button>
          </div>
          <div class="steps">
            <h1>项目名称</h1>
            <el-steps :active="2" align-center>
              <el-step title="创建项目">
                <template #description>
                  <div>
                    <p>Rich4$t</p>
                    <span>2022-05-10</span>
                  </div>
                </template>
              </el-step>
              <el-step title="部门初审">
                <template #description>
                  <div>
                    <p>区丽丽</p>
                    <span>2022-05-14</span>
                  </div>
                </template>
              </el-step>
              <el-step title="财务复核">
                <template #description>
                  <div>
                    <span>2022-05-18 赵明诚</span>
                    <p class="action">催一下</p>
                  </div>
                </template>
              </el-step>
              <el-step title="完成" description="" />
            </el-steps>
          </div>
        </div>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.extra-wrap {
  .steps {

    margin-top: 40px;
    background-color: var(--el-color-primary-light-9);
    height: 28vh;
    width: 80vw;

    h1 {
      margin-bottom: 40px;
    }

    .action {
      color: var(--primary-color-green);
      cursor: pointer;
    }

  }
}
</style>