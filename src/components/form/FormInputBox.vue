<template>
  <div class="relative flex">
    <textarea
      class="border w-[40rem] h-20 p-2 resize-none"
      type="textBox"
      placeholder="내용을 입력해주세요."
      v-model="modelValue"
      @input="inputHandler"
      :maxlength="maxLength"
      :readonly="readonly"
      :disabled="disabled"
    />
    <p class="absolute bottom-2 left-[38rem]">
      {{ maxLength - textLength < 0 ? 0 : maxLength - textLength }}
    </p>
    <div class="w-20 h-20"><button v-if="saveBtn" class="w-20 h-20 border">저장</button></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { maxLength, readonly } = defineProps({
  maxLength: {
    type: Number
  },
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const modelValue = defineModel()

const originText = ref(modelValue.value)
const textLength = ref(modelValue.value.length)
const saveBtn = ref(false)

const inputHandler = (e) => {
  const target = e.currentTarget
  textLength.value = target.value.length
  changeText(target.value)
}
const changeText = (text) => {
  console.log(text)
  originText.value === text ? (saveBtn.value = false) : (saveBtn.value = true)
}
</script>

<style lang="scss" scoped></style>
