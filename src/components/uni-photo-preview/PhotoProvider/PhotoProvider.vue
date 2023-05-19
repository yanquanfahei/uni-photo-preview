<template>
  <slot />
  <PhotoSlider
    :visible="visible"
    :index="index"
    :items="items"
  />
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { InjectionRegisterPhotoItem } from '../constant'
import PhotoSlider from '../PhotoSlider/PhotoSlider.vue'
import useIndex from './hooks/useIndex'
import useItems from './hooks/useItems'
import useVisible from './hooks/useVisible'

const emit = defineEmits(['indexChange', 'visibleChange'])

const onIndexChange = () => {
  emit('indexChange', { index, items, visible })
}
const onVisibleChange = () => {
  emit('visibleChange', { index, items, visible })
}

const { index } = useIndex(onIndexChange)
const { items, registerPhotoItem } = useItems()
const { visible } = useVisible(items, index, onVisibleChange)

provide(InjectionRegisterPhotoItem, registerPhotoItem)

</script>

<style lang="less" scoped>

</style>
