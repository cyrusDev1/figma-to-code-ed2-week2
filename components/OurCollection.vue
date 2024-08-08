<template>
  <div class="mx-5 xl:mx-60 space-y-9 mb-20">
    <div class="text-center">
      <h1 class="text-4xl font-semibold">OUR COLLECTION</h1>
      <p class="font-medium text-lg text-black-gray">
        Our latest collection, where classic and contemporary styles converge in
        perfect harmony.
      </p>
    </div>
    <div
      class="md:flex w-full md:flex-row-reverse gap-x-4 space-y-4 md:space-y-0"
    >
      <div
        class="py-48 px-2 w-full banner rounded-2xl md:rounded-4xl flex justify-center items-center"
      >
        <div class="text-center">
          <h3 class="text-white text-center text-4xl font-chillax font-bold">
            CLASSIC MEN
          </h3>
          <p class="text-center text-white text-lg font-normal">
            We’re changing the way things get made
          </p>
        </div>
      </div>
      <div class="w-full xl:w-1/2 rounded-2xl xl:rounded-none relative">
        <img
          class="relative w-full rounded-2xl xl:rounded-none h-full"
          src="~/assets/images/our-collection/2.png"
          alt=""
        />
        <div class="flex justify-center">
          <div class="absolute bottom-6">
            <Link
              to="/"
              class="hover:opacity-90 flex space-x-2 bg-white py-3 px-5 font-semibold text-sm text-black rounded-3xl"
            >
              <span>LEARN MORE</span>
              <img src="~/assets/images/icons/arrow.svg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from "~/components/ui/Button.vue";
import Link from "~/components/ui/Link.vue";
</script>
<style>
.banner {
  background-image: url("~/assets/images/our-collection/1.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
