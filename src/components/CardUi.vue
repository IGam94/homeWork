<template>
  <div class="flex flex-col w-32">
    <img :src="cardItem.img" alt="">
    <div>
      <p>{{ cardItem.label }}</p>
      <p>{{ cardItem.title }}</p>
      <p>{{ cardItem.cellPrice }}</p>
      <p>{{ cardItem.price }}</p>
    </div>
    <div v-if=" 0 <= cardItem.star || cardItem.review">
      <div v-if="cardItem.star !== null"> 
        <button v-for="(item, index) in star" :key="index" @click="clickedStar(item)" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  :fill="{'#FFF00' : item <= selectedStar}" class="w-6 h-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
        </svg>
        </button>
      </div>
      <p>{{ cardItem.review }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const { cardItem } = defineProps({
  cardItem:{
    type:Object
  }
})
const star = ref([1,2,3,4,5])
const selectedStar=ref(cardItem.star)

const clickedStar = (index) =>{
  console.log(index)
  selectedStar.value = index

  // 실제라면 별점을 서버로 보낼 것 같습니다.
}
</script>

<style lang="scss" scoped>

</style>