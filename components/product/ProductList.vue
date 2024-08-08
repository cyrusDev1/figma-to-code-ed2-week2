<template>
  <div class="md:flex justify-center mt-12 md:mt-20">
    <ul class="flex flex-wrap gap-y-3 gap-x-1">
      <Filter :data="data" class="py-2 px-3"></Filter>
    </ul>
  </div>
  <div class="space-y-8">
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10 xl:px-28"
    >
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
    </div>
    <div class="flex justify-center">
      <Link
        to="/"
        class="hover:bg-black hover:text-white block items-center space-x-2 border border-black rounded-full font-semibold text-base text-black p-3 px-8"
      >
        <span class="">View More</span>
      </Link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Link from "~/components/ui/Link.vue";
import ProductItem from "~/components/product/ProductItem.vue";
import Filter from "~/components/product/Filter.vue";

const names = ["All", "Accessories", "Unisex", "Featured"];
const counts = [132, 13, 52, 67];
const data = names.map((name, index) => ({
  name,
  count: counts[index] || 0,
}));
</script>
