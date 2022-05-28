<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" :size="formSize">
    <el-form-item label="任务名" prop="name">
      <el-input v-model="ruleForm.name" placeholder="请输入任务名" />
    </el-form-item>
    <el-form-item label="任务描述" prop="region">
      <el-input v-model="ruleForm.region" placeholder="请输入任务描述" />
    </el-form-item>
    <el-form-item label="执行人" prop="charge">
      <el-select v-model="ruleForm.charge" placeholder="请选择">
        <el-option label="赵明诚" value="zmc" />
        <el-option label="Rich4$t" value="r4" />
      </el-select>
    </el-form-item>
    <el-form-item label="责任人" prop="approver">
      <el-select v-model="ruleForm.approver" placeholder="请选择">
        <el-option label="赵明诚" value="zmc" />
        <el-option label="Rich4$t" value="r4" />
      </el-select>
    </el-form-item>
    <el-form-item label="生效日期" prop="date1">
      <el-date-picker style="width: 20vw;" v-model="ruleForm.date1" type="daterange" range-separator="至"
        start-placeholder="开始日期" end-placeholder="结束日期" />
    </el-form-item>
    <el-form-item label="任务类型" prop="depotType">
      <el-select v-model="ruleForm.depotType" placeholder="请选择">
        <el-option label="公开" value="public" />
        <el-option label="私有" value="private" />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: '',
  region: '',
  charge: '',
  approver: '',
  date1: '',
  depotType: '',
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入任务名', trigger: 'blur' },
    { min: 3, max: 5, message: '任务名长度应为3到5位', trigger: 'blur' },
  ],
  region: [
    { required: true, message: '请输入任务描述', trigger: 'blur' },
    { min: 3, max: 5, message: '任务描述长度应为3到5位', trigger: 'blur' },
  ],
  charge: [
    { required: true, message: '请输入执行人', trigger: 'blur' },
  ],
  approver: [
    { required: true, message: '请选择负责人', trigger: 'blur' },
  ],
  date1: [
    { required: true, message: '请选择日期', trigger: 'blur' },
  ],
  depotType: [
    { required: true, message: '请选择任务类型', trigger: 'blur' },
  ],
})
</script>

<style scoped lang="scss">
.el-form {
  display: flex;
  flex-wrap: wrap;

  .el-form-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 30%;

    .el-input,
    .el-select {
      width: 20vw;
    }
  }

}
</style>