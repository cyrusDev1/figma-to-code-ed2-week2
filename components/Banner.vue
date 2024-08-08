<template>
  <div
    class="banner flex justify-center rounded-2xl md:rounded-5xl py-11 md:py-24 px-2 xl:px-20 mt-10 mx-5 md:mx-11 xl:mx-32"
  >
    <div class="space-y-4 md:space-y-5 xl:space-y-10">
      <div class="flex space-x-2 md:space-x-3 justify-center items-center">
        <span class="block text-white border-b w-10 md:w-16"></span>
        <span class="text-white text-xs md:text-sm"
          >We bring new fashion to the world</span
        >
        <span class="block text-white border-b w-10 md:w-16"></span>
      </div>
      <div class="text-center">
        <span
          class="font-bold font-chillax text-3xl md:text-4xl xl:text-5xl text-white"
          >DISCOVER THE LATEST FASHION TRENDS HERE</span
        >
      </div>
      <div class="text-center xl:px-44">
        <p class="font-chillax text-sm md:text-base text-white">
          Discover a world of fashion with our meticulously curated outfits.
          Shop now to update your wardrobe with chic and stylish outfits.
        </p>
      </div>

      <div class="text-center flex justify-center items-center">
        <Link
          to="/"
          class="hover:opacity-90 bg-white py-3 px-5 font-semibold text-sm text-black rounded-3xl"
          >Start shopping</Link
        >
        <Link
          to="/"
          class="hover:opacity-90 bg-white p-3 font-semibold text-sm text-black rounded-full"
        >
          <img src="~/assets/images/icons/arrow.svg" />
        </Link>
      </div>
    </div>
  </div>
</template>
<script setup>
import Link from "~/components/ui/Link.vue";
</script>

<style scoped>
.banner {
  background-image: url("~/assets/images/banner.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
