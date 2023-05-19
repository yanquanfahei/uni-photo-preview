import { ref, type Ref } from 'vue'
import type { PhotoItem, RegisterPhotoItem } from '../../types'

type useItemsReturnType = {
  items: Ref<PhotoItem[]>,
  registerPhotoItem: RegisterPhotoItem
}

export default function useItems (): useItemsReturnType {
  const items = ref<PhotoItem[]>([])

  // 注册照片项或者更新
  function registerPhotoItem (photoItem: PhotoItem) {
    const matchIdx = items.value.findIndex(item => item.key === photoItem.key)
    matchIdx !== -1 ? items.value.splice(matchIdx, 1, photoItem) : items.value.push(photoItem)
  }

  return {
    items,
    registerPhotoItem
  }
}
