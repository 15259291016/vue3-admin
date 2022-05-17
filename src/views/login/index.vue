
<template>
  <div class="login">
    <div class="login-left">
      <div class="title">
        <h1>VUE3 ADMIN TEMPLATE</h1>
      </div>
      <div class="svg">
        <img src="@/assets/images/login-left.svg" alt="">
      </div>
      <div class="info">
        <h3>开箱即用的中后台管理系统</h3>
        <span>输入您的个人详细信息开始使用！</span>
      </div>
    </div>
    <div class="login-right">
      <div class="form">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="ruleForm" size="default">
          <el-form-item>
            <h1>登录</h1>
          </el-form-item>
          <!-- 登录账号区域 -->
          <el-form-item prop="name">
            <el-input placeholder="账号" clearable v-model="ruleForm.name">
              <template #prefix>
                <i class="r4 r4-user"></i>
              </template>
            </el-input>
          </el-form-item>
          <!-- 登录密码区域 -->
          <el-form-item prop="password">
            <el-input placeholder="密码" show-password v-model="ruleForm.password">
              <template #prefix>
                <i class="r4 r4-password"></i>
              </template>
            </el-input>
          </el-form-item>
          <!-- 记住密码和忘记密码区域 -->
          <el-form-item>
            <div class="remember">
              <el-checkbox>记住我</el-checkbox>
              <router-link to="/login">忘记密码？</router-link>
            </div>
          </el-form-item>
          <!-- 登录按钮区域 -->
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
          </el-form-item>
          <!-- 登录方式区域 -->
          <el-form-item class="login-method">
            <el-button :style="{ width: '31%' }">手机登录</el-button>
            <el-button :style="{ width: '31%' }">二维码登录</el-button>
            <el-button :style="{ width: '31%' }">注册</el-button>
          </el-form-item>
          <el-form-item>
            <div class="other-login"><span>—————————————————————— 其他登录方式 ——————————————————————</span></div>
            <ul>
              <li><a href=""><i class="r4 r4-github"></i></a></li>
              <li><a href=""><i class="r4 r4-weixin"></i></a></li>
              <li><a href=""><i class="r4 r4-alipay"></i></a></li>
              <li><a href=""><i class="r4 r4-gitee"></i></a></li>
              <li><a href=""><i class="r4 r4-twitter"></i></a></li>
            </ul>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>() // 定义表单验证规则

/* 表单内容 */
const ruleForm = reactive({
  name: 'admin',
  password: '123456'
})
/* /表单内容 */

/* 表单验证规则 */
const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 3, max: 5, message: '账号长度应该在3到5位之间', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 8, max: 16, message: '密码长度应该在8到16位之间', trigger: 'blur' },
  ],
})
/* /表单验证规则 */

/* 登录按钮点击事件 */
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
/* /登录按钮点击事件 */

/* 重置表单按钮事件 */
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
/* /重置表单按钮事件 */
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>