<template>
  <view class="photo-slider-wrapper">
    <view
      class="photo-slider-mask"
      style="background: rgb(0, 0, 0);"
    />
    <view
      v-for="(item, currentIndex) in showItems"
      :key="item.key"
      class="photo-box"
      :style="{
        left: getItemLeft(currentIndex)
      }"
    >
      <PhotoView
        :src="item.src"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PhotoView from '../PhotoView/PhotoView.vue'
import type { PhotoItem } from '../types'
import { horizontalOffset } from '../constant'

const props = withDefaults(defineProps<{
  index: number
  items: PhotoItem[]
  loop?: boolean
}>(), {
  loop: false
})

const showItems = computed(() => {
  const len = props.items.length
  if (props.loop) {
    // 是否循环
    const connect = props.items.concat(props.items).concat(props.items)
    return connect.slice(len + props.index - 1, len + props.index + 2)
  }

  return props.items.slice(Math.max(props.index - 1, 0), Math.min(props.index + 2, len))
})

const virtualIndex = ref(0)
function getItemLeft (currentIndex: number) {
  let index = virtualIndex.value + currentIndex
  if (props.loop || props.index !== 0) {
    index -= 1
  }
  // TODO:替换为小程序兼容的
  return `${(innerWidth + horizontalOffset) * index}px`
}

</script>

<style lang="less" scoped>
.photo-slider-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2000;
  user-select: none;
  .photo-slider-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .photo-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    overflow: hidden;
  }
}
</style>
