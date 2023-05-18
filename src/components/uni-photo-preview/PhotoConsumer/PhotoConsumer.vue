<template>
  <view
    :class="key"
    style="display: inline-block; font-size: 0;"
  >
    <slot />
  </view>
</template>

<script setup lang="ts">
import { inject, watch, onMounted } from 'vue'
import { InjectionRegisterPhotoItem } from '../constant'
import uniqueId from '../utils/uniqueId'
import type { RectCb } from '../types'
const props = defineProps<{
  src: string
}>()

const key = uniqueId('photo-item-key-')

const registerPhotoItem = inject(InjectionRegisterPhotoItem)

const getPhotoItem = () => ({
  key,
  src: props.src,
  getPhotoItemRect
})

onMounted(() => {
  registerPhotoItem?.(getPhotoItem())
})

watch(() => props.src, () => {
  registerPhotoItem?.(getPhotoItem())
})

const query = uni.createSelectorQuery()
function getPhotoItemRect (callback?: RectCb) {
  query.select('.' + key).boundingClientRect((rect) => {
    callback?.(rect)
  }).exec()
}

defineExpose({
  getPhotoItemRect
})

</script>

<style lang="less" scoped>
</style>
