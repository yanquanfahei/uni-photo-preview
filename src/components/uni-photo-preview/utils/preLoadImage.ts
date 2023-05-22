export default function preLoadImage (url: string) {
  return new Promise<UniApp.GetImageInfoSuccessData>((resolve, reject) => {
    uni.getImageInfo({
      src: url,
      success (res) {
        // #ifndef MP-WEIXIN
        resolve(res)
        // #endif

        // #ifdef MP-WEIXIN
        resolve(res)
        // #endif
      },
      fail (e) {
        reject(e)
      }
    })
  })
}
