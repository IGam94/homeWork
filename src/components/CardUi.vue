<template>
  <div>
    <img :src="data.img" alt="">
    <div></div>
    <div></div>
  </div>
</template>

<script setup>
const data = defineProps({
    id : {
      type:Number,
      required:true
    },
    img:{
      type:String,
    },
    label:{
      type:String,
    },
    title:{
      type:String,
    },
    cellPrice:{
      type:Number,
    },
    price:{
      type:Number,
    },
})

</script>

<style lang="scss" scoped>

</style>