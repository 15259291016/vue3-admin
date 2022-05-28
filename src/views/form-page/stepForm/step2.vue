<template>
  <div class="step2">
    <el-alert title="确认转账后，资金将直接打入对方账户，无法退回。" type="warning" style="margin-bottom:20px" />
    <div class="item">
      <span class="label">付款账户:</span>
      <span class="info">zmingcheng204@gmail.com</span>
    </div>
    <div class="item">
      <span class="label">收款账户:</span>
      <span class="info">test@example.com</span>
    </div>
    <div class="item">
      <span class="label">收款人姓名:</span>
      <span class="info">Rich4$t</span>
    </div>
    <div class="item">
      <span class="label">转账金额:</span>
      <span class="info">￥ 5,000.00</span>
    </div>
    <div class="payPassword">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" size="default">
        <el-form-item label="支付密码" prop="payPassword">
          <el-input v-model="ruleForm.payPassword" type="password" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  payPassword: 'Hello',
})

const rules = reactive<FormRules>({
  payPassword: [
    { required: true, message: '请输入支付密码', trigger: 'blur' },
    { min: 3, max: 5, message: '密码长度应为3到5位', trigger: 'blur' },
  ],
})
</script>

<style scoped lang="scss">
.step2 {
  position: relative;
  left: -50px;

  & .item:nth-child(5) {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--header-border-color);
  }

  .item {
    font-size: 15px;
    margin: 20px 0;
    text-align: left;


    .info {
      margin-left: 15px;
    }
  }
}
</style>