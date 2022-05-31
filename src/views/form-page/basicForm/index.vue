<template>
  <el-alert
    title="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"
    type="warning"
  />
  <div class="basic-form">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="200px"
      class="demo-ruleForm"
      :size="formSize"
    >
      <el-form-item label="标题" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="活动地点" prop="region">
        <el-select v-model="ruleForm.region" placeholder="活动地点">
          <el-option label="一楼" value="shanghai" />
          <el-option label="二楼" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="起止日期" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              v-model="ruleForm.date1"
              type="date"
              label="Pick a date"
              placeholder="选择日期"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col class="text-center" :span="2">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              v-model="ruleForm.date2"
              label="Pick a time"
              placeholder="选择时间"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="立刻交付" prop="delivery">
        <el-switch
          v-model="ruleForm.delivery"
          active-color="#13ce66"
          inactive-color="#ccc"
        />
      </el-form-item>
      <el-form-item label="活动类型" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="线上活动" name="type" />
          <el-checkbox label="晋升活动" name="type" />
          <el-checkbox label="线下活动" name="type" />
          <el-checkbox label="简单会议" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="目标描述" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea" />
      </el-form-item>
      <el-form-item label="衡量标准" prop="desc1">
        <el-input v-model="ruleForm.desc" type="textarea" />
      </el-form-item>
      <el-form-item label="目标公开" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="公开" />
          <el-radio label="部分公开" />
          <el-radio label="不公开" />
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >提交</el-button
        >
        <el-button type="danger" @click="resetForm(ruleFormRef)"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus';
import type Node from 'element-plus/es/components/tree/src/model/node';

const formSize = ref('default');
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: 'Hello',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
  desc1: '',
});

const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style scoped lang="scss">
.basic-form {
  width: 80vw;
  height: 72vh;
  background-color: var(--card-bg-color);
  margin: 20px auto;
  border-radius: 5px;

  .el-form {
    padding-top: 20px;
    width: 50vw;
    margin: 0 auto;
  }
}
</style>
