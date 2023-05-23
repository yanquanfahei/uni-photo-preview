<template>
  <view
    v-if="loaded"
    class="photo-view-wrapper"
    :style="{
      width: `${width}px`,
      height: `${height}px`
    }"
  >
    <view
      class="photo-view"
      style="width: 100%"
    >
      <view
        class="photo-wrap"
        :style="{
          width: `${width}px`,
          height: `${height}px`
        }"
      >
        <image
          class="photo"
          :src="src"
          :style="{
            width: `${width}px`,
            height: `${height}px`
          }"
        />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import useLoadImage from './hooks/useLoadImage'

const props = defineProps<{
  src: string
}>()

const { src } = toRefs(props)

const { width, height, loaded } = useLoadImage(src)

</script>

<style lang="less" scoped>
.photo-view-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  .photo-view {
    width: 0;
    height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .photo {
      touch-action: none;
      cursor: grab;
      display: block;
    }
  }
}
</style>
