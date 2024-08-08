<template>
  <li
    v-for="category in data"
    :key="category.name"
    @click="setActiveCategory(category.name)"
    @mouseover="setHoverCategory(category.name)"
    @mouseleave="clearHoverCategory"
    :class="getCategoryClasses(category.name)"
  >
    <Link to="" class="text-sm space-x-2">
      <span class="text-sm md:text-xl font-semibold">{{ category.name }}</span>
      <span v-if="category.count" class="text-base font-medium">{{
        category.count
      }}</span>
    </Link>
  </li>
</template>

<script setup>
import { defineProps, computed } from "vue";

import { ref } from "vue";
import Link from "~/components/ui/Link.vue";
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
});

const activeCategory = ref(props.data[0]?.name || null);
const hoverCategory = ref(null);

const setActiveCategory = (category) => {
  activeCategory.value = category;
};

const setHoverCategory = (category) => {
  hoverCategory.value = category;
};

const clearHoverCategory = () => {
  hoverCategory.value = null;
};

const getCategoryClasses = (category) => {
  return [
    "cursor-pointer border-[1.5px] border-black rounded-3xl whitespace-nowrap transition-colors duration-100",
    activeCategory.value === category || hoverCategory.value === category
      ? "text-neutral-50 bg-black"
      : "text-black",
    props.class,
  ];
};
</script>
