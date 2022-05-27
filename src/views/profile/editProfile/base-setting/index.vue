<template>
  <div class="base-setting">
    <div class="title">
      <span>基本设置</span>
    </div>
    <div class="body">
      <div class="body-left">
        <el-form :model="form" label-width="120px">
          <el-form-item label="昵称">
            <el-input v-model="form.name" clearable />
          </el-form-item>
          <el-form-item label="个人简介">
            <el-input v-model="form.intro" type="textarea" clearable />
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="form.phone" clearable />
          </el-form-item>
          <el-form-item label="所在地区">
            <el-input v-model="form.region" clearable />
          </el-form-item>
        </el-form>
      </div>
      <div class="body-right">
        <el-avatar src="https://s1.ax1x.com/2022/05/24/XPRY6S.png" class="update-avatar" :size="180"
          @click="dialogVisible = true" />
      </div>
    </div>
    <div class="footer">
      <el-button @click="handleUpdateInfo">
        更新基本信息
      </el-button>
    </div>
  </div>
  <!-- 修改头像 -->
  <el-dialog v-model="dialogVisible" title="Tips" width="50%">
    <input id="file" type="file" hidden ref="file" @change="handleChange" />
    <el-button class="select" @click="handleClick">select</el-button>
    <UpdateAvatar v-if="show" :img="img" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
  <!-- /修改头像 -->
</template>

<script setup>
import { ElMessage } from 'element-plus'
import UpdateAvatar from './update-avatar.vue'

const dialogVisible = ref(false)
const show = ref(false)

// do not use same name with ref
const form = reactive({
  name: '',
  intro: '',
  phone: '',
  region: '',
})

// 更新基本信息 按钮事件
const handleUpdateInfo = () => {
  ElMessage({
    duration: 1000,
    type: 'success',
    message: '修改基本信息成功',
  })
  document.querySelector('.el-button').blur()
}

/* 修改头像 */
const file = ref(null)
const img = ref(null)

const handleClick = () => {
  file.value.click();
  show.value = false
  document.querySelector('.select').blur()
}

const handleChange = (e) => {
  show.value = true
  const upload = file.value.files[0]
  img.value = window.URL.createObjectURL(upload)
  document.querySelector('#file').value = null
}
/* /修改头像 */
</script>

<style scoped lang="scss">
.base-setting {
  .title {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid var(--header-border-color);

    span {
      padding-left: 20px;
    }
  }

  .body {
    display: flex;
    justify-content: space-around;
    align-items: center;

    &-left {
      flex: 0.7;
      margin: 10px 30px 10px 15px;
    }

    &-right {
      flex: 1;
      text-align: center;

      .update-avatar {
        border: 4px solid var(--primary-color-green);

        &:hover {
          border-color: #0097d5;
          cursor: pointer;
        }
      }

    }
  }
}
</style>