<template>
  <nuxt-link :to="to" :class="class">
    <slot />
  </nuxt-link>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  class: {
    type: [String, Object],
    required: false,
  },
});
</script>
