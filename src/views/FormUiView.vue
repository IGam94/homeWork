<template>
  <div class="flex h-screen justify-center items-center">
    <ul class="">
      <li><FormInputBox v-model="text1" :maxLength="maxLength" /></li>
      <li><FormInputBox v-model="text2" :maxLength="maxLength" readonly /></li>
      <li><FormInputBox v-model="text3" :maxLength="maxLength" disabled /></li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FormInputBox from '../components/form/FormInputBox.vue'

const text1 = ref('')
const text2 = ref('readonly FORM입니다.')
const text3 = ref('disabled FORM입니다.')
const maxLength = ref(500)
</script>

<style lang="scss" scoped></style>
