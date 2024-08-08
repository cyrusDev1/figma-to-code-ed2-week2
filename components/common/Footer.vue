<template>
  <div class="bg-black py-6 xl:py-14 px-5 xl:px-32 space-y-8 bottom-0 w-full">
    <div class="xl:flex space-y-5 xl:space-y-0 justify-between">
      <div class="space-y-5">
        <img src="~/assets/images/logo-white.svg" alt="" />
        <p class="text-white text-gray-white">
          Subscribe to our newsletter for upcoming products and best discount
          for all items
        </p>
        <div class="flex w-full md:w-2/3 xl:w-full space-x-2">
          <Input
            placeholder="Your email"
            type="text"
            class="placeholder-white w-full text-sm border border-white bg-black text-white px-3 py-2 md:p-3 md:p-4 rounded-full outline-none"
          ></Input>
          <Button
            type="text"
            class="hover:opacity-90 px-6 py-2 md:p-3 text-sm md:text-base md:px-10 bg-white font-semibold rounded-full"
            >Suscribe</Button
          >
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 md:gap-14 text-white">
        <div class="space-y-2">
          <h3 class="text-sm md:text-lg font-semibold">Product</h3>
          <ul class="">
            <li
              class="text-xs md:text-base text-gray-white hover:text-white hover:scale-95 transition transition-duration-200"
            >
              <Link to="/">Jacket</Link>
            </li>
            <li
              class="text-xs md:text-base text-gray-white hover:text-white hover:scale-95 transition transition-duration-200"
            >
              <Link to="/">T-Shirt</Link>
            </li>
            <li
              class="text-xs md:text-base text-gray-white hover:text-white hover:scale-95 transition transition-duration-200"
            >
              <Link to="/">Jacket</Link>
            </li>
            <li
              class="text-xs md:text-base text-gray-white hover:text-white hover:scale-95 transition transition-duration-200"
            >
              <Link to="/">Shoses</Link>
            </li>
            <li
              class="text-xs md:text-base text-gray-white hover:text-white hover:scale-95 transition transition-duration-200"
            >
              <Link to="/">Sunglasses</Link>
            </li>
          </ul>
        </div>
        <div class="space-y-2">
          <h3 class="text-sm md:text-lg font-semibold">Categories</h3>
          <ul class="">
            <li
              class="text-xs md:text-base text-gray-white hover:text-white hover:scale-95 transition transition-duration-200"
            >
              <Link to="/">Man</Link>
            </li>
            <li
              class="text-xs md:text-base text-gray-white hover:text-white hover:scale-95 transition transition-duration-200"
            >
              <Link to="/">Woman</Link>
            </li>
            <li
              class="text-xs md:text-base text-gray-white hover:text-white hover:scale-95 transition transition-duration-200"
            >
              <Link to="/">Kids</Link>
            </li>
            <li
              class="text-xs md:text-base text-gray-white hover:text-white hover:scale-95 transition transition-duration-200"
            >
              <Link to="/">Gift</Link>
            </li>
            <li
              class="text-xs md:text-base text-gray-white hover:text-white hover:scale-95 transition transition-duration-200"
            >
              <Link to="/">New arrival</Link>
            </li>
          </ul>
        </div>
        <div class="space-y-2">
          <h3 class="text-sm md:text-lg font-semibold">Our Social Media</h3>
          <ul class="">
            <li
              class="text-xs md:text-base text-gray-white hover:text-white hover:scale-95 transition transition-duration-200"
            >
              <Link to="/">Instagram</Link>
            </li>
            <li
              class="text-xs md:text-base text-gray-white hover:text-white hover:scale-95 transition transition-duration-200"
            >
              <Link to="/">Facebook</Link>
            </li>
            <li
              class="text-xs md:text-base text-gray-white hover:text-white hover:scale-95 transition transition-duration-200"
            >
              <Link to="/">YouTube</Link>
            </li>
            <li
              class="text-xs md:text-base text-gray-white hover:text-white hover:scale-95 transition transition-duration-200"
            >
              <Link to="/">X</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <p class="text-black-gray text-sm text-center">
        © BALLAMAS 2024 by waris
      </p>
    </div>
  </div>
</template>
<script setup>
import Link from "~/components/ui/Link.vue";
import Button from "~/components/ui/Button.vue";
import Input from "~/components/ui/Input.vue";
</script>
