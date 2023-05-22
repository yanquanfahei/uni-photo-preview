import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import preLoadImage from '../../utils/preLoadImage'
import getSuitableImageSize from '../../utils/getSuitableImageSize'

export default function useLoadImage (src: Ref<string>) {
  const naturalWidth = ref(0)
  const naturalHeight = ref(0)
  const width = ref(0)
  const height = ref(0)
  const loaded = ref(false)

  function setSuitableImageSize (actualWidth: number, actualHeight: number, rotate: number) {
    const imageSize = getSuitableImageSize(actualWidth, actualHeight, rotate)
    width.value = imageSize.width
    height.value = imageSize.height
  }

  function initImage () {
    preLoadImage(src.value).then((res) => {
      naturalWidth.value = res.width
      naturalHeight.value = res.height
      setSuitableImageSize(naturalWidth.value, naturalHeight.value, 0)
      loaded.value = true
    })
  }

  initImage()

  watch(src, () => {
    initImage()
  })

  return {
    width,
    height,
    loaded,
    naturalWidth,
    naturalHeight,
    setSuitableImageSize
  }
}
