
<template>
  <div class="login">
    <div class="login-left">
      <div class="title" :class="[ANIMATION_SWITCH ? 'animate__animated animate__fadeInLeft' : '']">
        <h1>VUE3 ADMIN TEMPLATE</h1>
      </div>
      <div class="svg" :class="[ANIMATION_SWITCH ? 'animate__animated animate__fadeInLeft' : '']">
        <img src="@/assets/images/login-left.svg" alt="">
      </div>
      <div class="info" :class="[ANIMATION_SWITCH ? 'animate__animated animate__fadeInLeft' : '']">
        <h3>开箱即用的中后台管理系统</h3>
        <span>输入您的个人详细信息开始使用！</span>
      </div>
    </div>
    <div class=" login-right">
      <!-- 中英切换组件 -->
      <LangSelect />
      <div class="form" :class="[ANIMATION_SWITCH ? 'animate__animated animate__fadeInRight' : '']">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="ruleForm" size="default">
          <el-form-item>
            <h1> {{ $t('msg.login.title') }} </h1>
          </el-form-item>
          <!-- 登录账号区域 -->
          <el-form-item prop="name">
            <el-input :placeholder="$t('msg.login.usernamePlaceholder')" clearable v-model="ruleForm.name">
              <template #prefix>
                <i class="r4 r4-user"></i>
              </template>
            </el-input>
          </el-form-item>
          <!-- 登录密码区域 -->
          <el-form-item prop="password">
            <el-input :placeholder="$t('msg.login.passwordPlaceholder')" show-password v-model="ruleForm.password">
              <template #prefix>
                <i class="r4 r4-password"></i>
              </template>
            </el-input>
          </el-form-item>
          <!-- 记住密码和忘记密码区域 -->
          <el-form-item>
            <div class="remember">
              <el-checkbox> {{ $t('msg.login.rememberMe') }} </el-checkbox>
              <router-link to="/login"> {{ $t('msg.login.forgetPassword') }} </router-link>
            </div>
          </el-form-item>
          <!-- 登录按钮区域 -->
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)"> {{ $t('msg.login.signInButton') }}
            </el-button>
          </el-form-item>
          <!-- 登录方式区域 -->
          <el-form-item class="login-method">
            <el-button :style="{ width: '34%' }"> {{ $t('msg.login.mobileSignIn') }} </el-button>
            <el-button :style="{ width: '34%' }"> {{ $t('msg.login.qrCodeSingIn') }} </el-button>
            <el-button :style="{ width: '24%' }"> {{ $t('msg.login.register') }} </el-button>
          </el-form-item>
          <el-form-item>
            <div class="other-login"><span>—————————————————————— {{ $t('msg.login.signInWith') }}
                ——————————————————————</span></div>
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
import { ANIMATION_SWITCH } from '@/constant/index'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()
const ruleFormRef = ref<FormInstance>() // 定义表单验证规则

/* 表单内容 */
const ruleForm = reactive({
  name: 'admin',
  password: '123456789'
})
/* /表单内容 */

/* 表单验证规则 */
const rules = computed(() => {
  const formRule = reactive<FormRules>({
    name: [
      { required: true, message: t('msg.login.usernameTip'), trigger: 'blur' },
      { min: 3, max: 5, message: t('msg.login.usernameRule'), trigger: 'blur' },
    ],
    password: [
      { required: true, message: t('msg.login.passwordTip'), trigger: 'blur' },
      { min: 8, max: 16, message: t('msg.login.passwordRule'), trigger: 'blur' },
    ],
  })
  return formRule;
})
/* /表单验证规则 */

/* 登录按钮点击事件 */
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      router.push('/home')
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
/* /登录按钮点击事件 */
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>