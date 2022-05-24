<template>
  <el-card>
    <template #header>
      <span> {{ title }} </span>
      <a href=""> {{ $t('msg.workBench.more') }} </a>
    </template>
    <!-- 项目卡片 -->
    <div class="card" v-if="isProjectCard">
      <div class="card-top">
        <CardItem title="Vue" content="you fit into me,like a hook into an eye;a fish hook,an open eye">
          <img src="@/assets/images/Vue.svg" alt="">
        </CardItem>
        <CardItem style="border-left: unset; border-right: unset;" title="React"
          content="Shall I compare thee to a summer's day?">
          <img src="@/assets/images/react.svg" alt="">
        </CardItem>
        <CardItem title="Github" content="So long as men can breathe, or eyes can see,So long lives this">
          <img src="@/assets/images/githubcat.svg" alt="">
        </CardItem>
      </div>
      <div class="card-bottom">
        <CardItem style="border-top: unset;" title="Google"
          content="All that see or seem is but a dream within a dream.">
          <img src="@/assets/images/google.svg" />
        </CardItem>
        <CardItem style="border-left: unset; border-right: unset; border-top: unset;" title="Angular"
          content="We all get through it with the fellowship of others.">
          <img src="@/assets/images/Angular.svg" />
        </CardItem>
        <CardItem style="border-top: unset;" title="element"
          content="I think that I shall never see A poem lovely as a tree.">
          <img src="@/assets/images/element.svg" />
        </CardItem>
      </div>
    </div>
    <!-- /项目卡片 -->
    <!-- 最新动态卡片 -->
    <div class="news" v-else>
      <NewsCardItem>
        <span class="team">在<span class="keyword">开源组</span> </span>
        <span class="action">创建了项目<span class="keyword">Vue3 Admin</span></span>
      </NewsCardItem>
      <NewsCardItem date="2022-05-22 11:03:00">
        <span class="action">推送代码到了<span class="keyword">Github</span></span>
      </NewsCardItem>
      <NewsCardItem name="Rich4$t" date="2022-05-21 14:08:52">
        <span class="team">回复了<span class="keyword">赵明诚</span> </span>
        <span class="action">的问题<span class="keyword">如何编写一个Vite插件</span></span>
      </NewsCardItem>
      <NewsCardItem name="区丽丽" date="2022-05-21 14:08:52">
        <span class="action">发布文章<span class="keyword">如何进行性能优化？</span></span>
      </NewsCardItem>
      <NewsCardItem name="@name" date="2022-05-21 14:08:52">
        <span class="team">回复了<span class="keyword">赵明诚</span> </span>
        <span class="action">的问题<span class="keyword">如何编写一个Vite插件</span></span>
      </NewsCardItem>
      <NewsCardItem name="区丽丽" date="2022-05-21 14:08:52">
        <span class="action">发布文章<span class="keyword">如何进行性能优化？</span></span>
      </NewsCardItem>
    </div>
    <!-- /最新动态卡片 -->
  </el-card>
</template>

<script setup lang="ts">
import CardItem from './project-card-item.vue'
import NewsCardItem from './news-card-item.vue'

const props = defineProps({
  // 是否是项目卡片
  isProjectCard: {
    type: Boolean,
    default: true,
  },
  // 标题
  title: {
    type: String,
    default: "项目"
  }
})

</script>

<style scoped lang="scss">
.card-top,
.card-bottom {
  display: flex;
}


.keyword {
  color: var(--primary-color-green);
  cursor: pointer;
  margin-left: 8px;
}

.team {
  margin-left: 8px;
}

.action {
  margin-left: 8px;

  span {
    margin-left: 8px;
  }
}

:deep(.el-card__header) {
  display: flex;
  justify-content: space-between;

  a {
    color: var(--primary-color-green);
  }
}
</style>