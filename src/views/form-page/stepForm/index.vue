<template>
  <el-alert title="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。" type="warning" />
  <div class="step-form">
    <el-steps :active="active" finish-status="success">
      <el-step title="填写转账信息">
        <template v-if="active === 0" #description>
          <el-form :model="form" label-width="auto" style="padding-top: 20px; padding-left: 50px;">
            <el-form-item label="付款账户">
              <el-input v-model="form.payAccount" />
            </el-form-item>
            <el-form-item label="收款账户">
              <el-input v-model="form.receiveAccount">
                <template #prepend>
                  <el-select v-model="form.payMethod" style="width: 100px;" placeholder="请选择">
                    <el-option label="微信" value="wechatPay" />
                    <el-option label="支付宝" value="alipay" />
                  </el-select>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item label="收款人姓名">
              <el-input v-model="form.receiveName" />
            </el-form-item>
            <el-form-item label="转账金额">
              <el-input v-model="form.payMoney">
                <template #prepend>
                  <span style="font-weight: bold;">￥</span>
                </template>
              </el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" style="margin-top: 12px;margin-left: 120px;" @click="next">下一步</el-button>
        </template>
      </el-step>
      <el-step title="确认转账信息">
        <template v-if="active === 1" #description>
          <Step2 />
          <el-button style="margin-top: 12px" @click="submit" type="primary" :loading="loading">提交</el-button>
          <el-button style="margin-top: 12px" @click="active -= 1">上一步</el-button>
        </template>
      </el-step>
      <el-step title="完成">
        <template v-if="active === 2" #description>
          <Step3 />
          <el-button @click="active = 0" style="position: relative;left: -200px;" type="primary">再转一笔</el-button>
          <el-button style="position: relative;left: -160px;">查看账单</el-button>
        </template>
      </el-step>
    </el-steps>
  </div>
</template>

<script setup lang="ts">
import Step2 from "./step2.vue";
import Step3 from "./step3.vue";

const active = ref(0) // step标志
// 第一步的表单
const form = reactive({
  payAccount: 'zmingcheng204@gmail.com',
  receiveAccount: 'test@example.com',
  receiveName: 'Rich4$t',
  payMethod: 'alipay',
  payMoney: '8000',
})
const loading = ref<boolean>(false) // 提交按钮的加载状态


const submit = () => {
  loading.value = true
  setTimeout(() => {
    if (active.value++ > 2) active.value = 0

    loading.value = false
  }, 2000);
}
const next = () => {
  if (active.value++ > 2) active.value = 0
}
</script>

<style scoped lang="scss" >
.step-form {
  width: 80vw;
  height: 60vh;
  margin: 100px auto;
  background-color: var(--card-bg-color);

  .el-steps {
    width: 50%;
    padding: 20px 0;
    margin: 0 auto;
  }
}

:deep(.is-process) {
  width: 28vw;
}
</style>