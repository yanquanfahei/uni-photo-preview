import { ref, type Ref } from 'vue'
import type { PhotoItem } from '../../types'

export default function useVisible (
  items: Ref<PhotoItem[]>,
  index: Ref<number>,
  onVisibleChange: () => void
) {
  const visible = ref(false)
  function handleShow () {
    visible.value = true
    onVisibleChange()
  }
  function handleHide (key: string) {
    const itemIndex = items.value.findIndex(item => item.key === key)
    if (itemIndex > -1) {
      index.value = itemIndex
      visible.value = true
      onVisibleChange()
    }
  }

  return {
    visible,
    handleShow,
    handleHide
  }
}
