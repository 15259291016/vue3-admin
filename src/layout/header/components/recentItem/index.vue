<template>
  <div class="recent">
    <div class="recent-item" v-for="item in 3" :key="item">
      <el-card class="" :class="[item === active ? 'active' : '']" @click="handleItemClick(item)">
        <div class="card-item">
          <div class="card-item-left">
            <div class="history">
              <i class="r4 r4-history"></i>
            </div>
            <div class="content">
              <span>{{ item }}</span>
            </div>
          </div>
          <div class="card-item-right">
            <div class="collection">
              <i class="r4 r4-collection"></i>
            </div>
            <div class="delete">
              <i class="r4 r4-close"></i>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
const active = ref<number>(1)

onMounted(() => {
  // 键盘上建触发的事件
  onKeyStroke('ArrowDown', (e) => {
    active.value++
    e.preventDefault()
  })
  // 键盘下键触发的事件
  onKeyStroke('ArrowUp', (e) => {
    active.value--
    e.preventDefault()
  })

  const recent = document.querySelector('.recent')
  // 鼠标进入 recent 元素时候将 active.value 置为-1
  recent!.addEventListener('mouseenter', () => {
    active.value = -1
  })
  // 鼠标离开 recent 元素时将 active.value 置为1
  recent!.addEventListener('mouseleave', () => {
    active.value = 1
  })

})



// 监听 active.value 值的变化
watch(() => active.value, newVal => {
  // 回车事件
  onKeyStroke('Enter', (e) => {
    handleItemClick(newVal);
  })
  if (newVal === 0) {
    active.value = 3
  }
  if (newVal === 4) {
    active.value = 1
  }
})


// 搜索记录点击事件
const emit = defineEmits(['update:item'])
const handleItemClick = (item: number) => {
  emit('update:item', item)
}


</script>

<style scoped lang="scss">
.recent {
  .recent-item {
    margin: 5px 0;

    .el-card {
      background-color: var(--search-bg-color);
      color: var(--search-text-color);
      border: unset;

      &:hover {
        background-color: #42b883;
        cursor: pointer;
      }

      .card-item {
        i {
          font-size: 20px;
        }

        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &-left {
          display: flex;
          align-items: center;
        }

        &-right {
          display: flex;
          align-items: center;
        }
      }

      .content,
      .delete {
        margin-left: 10px;
      }

      .delete,
      .collection {
        &:hover {
          border-radius: 50%;
          background-color: #349368;
        }
      }
    }
  }
}

.active {
  background-color: #42b883 !important;
}
</style>