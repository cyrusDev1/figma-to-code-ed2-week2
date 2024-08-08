<template>
  <div
    class="xl:flex xl:space-x-11 space-y-8 xl:space-y-0 mx-5 xl:mx-32 my-20 h-auto"
  >
    <div class="w-full flex-1 items-stretch h-auto">
      <div class="w-full h-auto flex items-stretch">
        <img
          class="w-full h-full object-cover rounded-4xl"
          src="~/assets/images/product-detail.png"
          alt="Product Image"
        />
      </div>
    </div>
    <div class="w-full flex-1 space-y-3 md:space-y-5 h-auto">
      <h3 class="text-3xl font-chillax md:text-5xl font-semibold">
        Badacore Tshirt
      </h3>
      <p class="text-3xl md:text-4xl font-semibold">CAD $80</p>
      <div class="space-y-4">
        <span class="text-2xl md:text-3xl font-medium">Color: Green</span>
        <div class="flex space-x-2">
          <span
            class="block cursor-pointer w-7 h-7 bg-green-900 rounded-full"
          ></span>
          <span
            class="block cursor-pointer w-7 h-7 bg-purple-900 rounded-full"
          ></span>
          <span
            class="block cursor-pointer w-7 h-7 bg-yellow-800 rounded-full"
          ></span>
          <span
            class="block cursor-pointer w-7 h-7 bg-red-800 rounded-full"
          ></span>
        </div>
      </div>
      <div class="space-y-4">
        <span class="text-2xl md:text-3xl font-medium">Size:</span>
        <div>
          <ul class="flex flex-wrap gap-x-2 gap-y-2">
            <Filter :data="data" class="py-1 px-5"></Filter>
          </ul>
        </div>
      </div>
      <div class="flex space-x-3">
        <Button
          type="button"
          class="hover:opacity-80 bg-black text-white rounded-full py-3 md:py-6 text-sm text-center w-full"
          >BUY NOW</Button
        >
        <Link
          to="/cart"
          class="hover:bg-black hover:text-white transition-colors duration-100 border border-black rounded-full py-3 md:py-6 text-sm text-center w-full"
          >ADD TO CART</Link
        >
      </div>
      <div class="space-y-4">
        <span class="text-3xl font-medium font-chillax">Description</span>
        <p class="text-black-gray text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>
      </div>
    </div>
  </div>

  <div class="space-y-8 mx-5 xl:mx-32">
    <h2 class="text-3xl font-semibold font-chillax">You may also like</h2>
    <div
      class="md:flex space-y-5 md:space-y-0 gap-4 overflow-x-auto scrollbar-hide md:flex-nowrap"
    >
      <ProductItem v-for="i in 6" :key="i" class="min-w-[320px]"></ProductItem>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Link from "~/components/ui/Link.vue";
import Button from "~/components/ui/Button.vue";
import ProductItem from "~/components/product/ProductItem.vue";
import Filter from "~/components/product/Filter.vue";
const names = ["XS", "S", "M", "L", "XL"];
const counts = [];
const data = names.map((name, index) => ({
  name,
  count: counts[index] || 0,
}));
</script>

<style scoped>
/* Styles pour masquer les barres de défilement */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
