import type { InjectionKey } from 'vue'
import type { PhotoItem } from './types'

export const InjectionRegisterPhotoItem = Symbol('register-photo-item') as InjectionKey<(photoItem: PhotoItem) => void>

/**
 * 图片间隔
 */
export const horizontalOffset = 20
