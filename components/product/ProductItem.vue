<template>
  <div class="space-y-4 w-full">
    <div class="relative group cursor-pointer w-full">
      <div
        class="rounded-3xl transition transition-duration-400 absolute opacity-30 group-hover:bg-gray-800 w-full h-full"
      ></div>
      <div
        class="absolute top-4 left-4 text-xs font-semibold rounded-3xl bg-white p-2 text-black"
      >
        GET OFF 20%
      </div>
      <img
        class="rounded-3xl w-full object-cover"
        src="~/assets/images/product.png"
      />
      <div class="flex justify-center w-full">
        <div
          class="transition transition-duration-400 absolute hidden group-hover:flex bottom-3 px-5 space-x-1"
        >
          <Link
            to="/cart"
            class="flex items-center space-x-2 bg-white rounded-3xl font-extrabold font-mono text-sm text-black p-2 px-2"
          >
            <img class="" src="~/assets/images/icons/cart-two.svg" />
            <span class="mt-1">ADD TO CART</span>
          </Link>
          <Button
            class="hover:opacity-90 flex items-center space-x-2 border rounded-3xl font-extrabold text-sm text-white p-2 px-6"
          >
            <span class="">BUY NOW</span>
          </Button>
        </div>
      </div>
    </div>
    <div class="">
      <Link to="/product" class="block text-3xl font-semibold"
        >SUMMER SHIRT</Link
      >
      <span class="text-2xl font-semibold text-black-gray">$99</span>
    </div>
  </div>
</template>
<script setup>
import Button from "~/components/ui/Button.vue";
import Link from "~/components/ui/Link.vue";
</script>
