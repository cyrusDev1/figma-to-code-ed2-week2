<template>
  <input :type="type" :class="class" />
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  type: {
    type: [String, Object],
    required: true,
  },
  class: {
    type: [String, Object],
    required: false,
  },
});
</script>
