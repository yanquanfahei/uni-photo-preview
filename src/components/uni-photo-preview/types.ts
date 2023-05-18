type RectInfo = UniApp.NodeInfo | UniApp.NodeInfo[];

export type RectCb = (rect: RectInfo) => void

export type PhotoItem = {
  key: string
  src: string
  getPhotoItemRect: (callback?: RectCb) => void
}
