<template>
  <view class="content">
    <PhotoProvider>
      <view
        v-for="(item, idx) in imgList"
        :key="idx"
        class="item"
      >
        <PhotoConsumer :src="item">
          <img
            class="photo"
            :src="item"
            alt="photo"
          >
        </PhotoConsumer>
      </view>
    </PhotoProvider>
  </view>
</template>

<script setup lang="ts">
import { PhotoProvider, PhotoConsumer } from '@/components/uni-photo-preview'
import photo1 from '@/static/images/1.jpg'
import photo2 from '@/static/images/2.jpg'
import photo3 from '@/static/images/3.jpg'
import photo4 from '@/static/images/4.png'
import photo5 from '@/static/images/5.jpg'
import photo6 from '@/static/images/6.png'
import photo7 from '@/static/images/7.jpg'
import photo8 from '@/static/images/8.jpg'

const imgList = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8]
</script>

<style scoped>
.photo {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
.item {
  display: inline-block;
  margin: 12px;
}
</style>
