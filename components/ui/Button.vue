<template>
  <button :type="type" :class="class">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  type: {
    type: [String, Object],
    required: false,
  },
  class: {
    type: [String, Object],
    required: false,
  },
});
</script>
