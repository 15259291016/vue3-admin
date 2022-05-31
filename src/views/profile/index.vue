<template>
  <div class="profile">
    <el-card class="profile-left">
      <!-- 个人资料区域 -->
      <Info />
      <!-- 个人标签区域 -->
      <div class="tags">
        <p>标签</p>
        <div class="tags-item">
          <el-tag
            v-for="tag in dynamicTags"
            :key="tag"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
          <el-input
            v-if="inputVisible"
            ref="InputRef"
            v-model="inputValue"
            class="ml-1 w-20"
            size="small"
            @keyup.enter="handleInputConfirm"
            @blur="handleInputConfirm"
          />
          <el-button
            v-else
            class="button-new-tag ml-1"
            size="small"
            @click="showInput"
          >
            + New Tag
          </el-button>
        </div>
      </div>
      <div class="team">
        <p>团队</p>
        <Team>
          <template #vue>
            <img src="@/assets/images/Vue.svg" alt="" />
          </template>
          <template #react>
            <img src="@/assets/images/react.svg" alt="" />
          </template>
          <template #github>
            <img src="@/assets/images/githubcat.svg" alt="" />
          </template>
          <template #google>
            <img src="@/assets/images/google.svg" alt="" />
          </template>
          <template #element>
            <img src="@/assets/images/element.svg" alt="" />
          </template>
          <template #angular>
            <img src="@/assets/images/Angular.svg" alt="" />
          </template>
        </Team>
      </div>
    </el-card>
    <el-card class="profile-right">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <!-- 文章区域 -->
        <el-tab-pane label="文章" name="first">
          <Article />
        </el-tab-pane>
        <el-tab-pane label="应用" name="second">
          <Application />
        </el-tab-pane>
        <el-tab-pane label="项目" name="third">
          <Project />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';
import type { ElInput, TabsPaneContext } from 'element-plus';
import Info from './info/index.vue';
import Team from './team/index.vue';
import Article from './article/index.vue';
import Application from './application/index.vue';
import Project from './project/index.vue';

const inputValue = ref('');
const dynamicTags = ref([
  '很有想法的',
  '专注设计',
  'hip pop',
  '热爱学习新技术',
  'xxxx',
]);
const inputVisible = ref(false);
const InputRef = ref<InstanceType<typeof ElInput>>();

// 删除标签
const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

// 显示输入框
const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    InputRef.value!.input!.focus();
  });
};

// 确认添加标签
const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = '';
};

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
