<template>
  <slot />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { InjectionRegisterPhotoItem } from '../constant'
import type { PhotoItem } from '../types'

const images = ref<PhotoItem[]>([])

provide(InjectionRegisterPhotoItem, registerPhotoItem)
// 注册照片项或者更新
function registerPhotoItem (photoItem: PhotoItem) {
  const matchIdx = images.value.findIndex(item => item.key === photoItem.key)
  if (matchIdx !== -1) {
    images.value.splice(matchIdx, 1, photoItem)
    return
  }
  images.value.push(photoItem)
}

</script>

<style lang="less" scoped>

</style>
