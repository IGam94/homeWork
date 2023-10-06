<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.id">
       <Card :id="item.id" :img="item.img" :label="item.label" :title="item.title" :cellPrice="item.cellPrice" :price="item.price" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from '@/components/CardUi.vue'

const data = ref([
  {id:1,img:'../src/assets/image/productImg.png',label:'라벨1',title:'상품명1',cellPrice:10000,price:20000,star:5,review:''},
  {id:2,img:'',label:'라벨2',title:'상품명2',cellPrice:20000,price:30000,star:3},
  {id:3,img:'',label:'라벨3',title:'상품명3',cellPrice:30000,price:40000,star:null},
  {id:4,img:'',label:'라벨4',title:'상품명4',cellPrice:40000,price:50000,star:5,name:'Lee Joosang'},
])
</script>

<style lang="scss" scoped>

</style>