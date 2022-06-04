<template>
  <div class="upload">
    <div class="clickUpload">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="handleChange"
        :file-list="fileList"
      >
        <el-button type="primary">上传文件</el-button>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500kb
          </div>
        </template>
      </el-upload>
    </div>
    <div class="dropUpload">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i
          class="r4 r4-upload"
          style="font-size: 64px; color: var(--primary-color-green)"
        ></i>
        <div class="el-upload__text">
          将文件拖拽到此处 <em>点击上传文件</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500kb
          </div>
        </template>
      </el-upload>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UploadProps, UploadUserFile } from 'element-plus';

const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
]);

const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
  fileList.value = fileList.value.slice(-3);
};
</script>

<style scoped lang="scss">
.upload {
  display: flex;
  justify-content: center;
  align-items: center;
}
:deep(.el-upload__text) {
  margin-top: 30px;
}
</style>
