<template>
  <div
    @click="selectMethod"
    class="flex items-center justify-between cursor-pointer border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200"
  >
    <div class="flex items-center">
      <div>
        <input
          :id="id"
          type="radio"
          :value="method"
          :checked="isChecked"
          class="hidden"
        />
        <div
          class="size-5 mr-3 border border-black rounded-full flex items-center justify-center"
        >
          <div v-if="isChecked" class="size-3 bg-black rounded-full"></div>
        </div>
      </div>
      <label :for="id" class="flex flex-col cursor-pointer w-full">
        <span class="text-lg font-medium">{{ label }}</span>
        <span class="text-sm text-black-gray">{{ deliveryTime }}</span>
      </label>
    </div>
    <div>
      <span class="text-base">{{ price }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  deliveryTime: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  selectedMethod: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["update:selectedMethod"]);

const isChecked = computed(() => props.selectedMethod === props.method);

const selectMethod = () => {
  emit("update:selectedMethod", props.method);
};
</script>

<style scoped></style>
