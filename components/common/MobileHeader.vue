<template>
  <header class="">
    <div class="mx-5 py-5 border-b">
      <div class="flex justify-between items-center">
        <div class="cursor-pointer" v-if="active" @click="closeMenu()">
          <img src="~/assets/images/icons/close.svg" />
        </div>
        <div class="cursor-pointer" v-else @click="openMenu()">
          <img src="~/assets/images/icons/hambuger-menu.svg" />
        </div>

        <div class="">
          <Link to="/">
            <img class="w-40" src="~/assets/images/logo.svg" />
          </Link>
        </div>
        <div>
          <ul class="flex items-center space-x-4">
            <li>
              <Link
                to="/"
                class="flex space-x-1 items-center text-black text-xl hover:text-neutral-700"
              >
                <img src="~/assets/images/icons/search.svg" />
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                class="flex space-x-1 items-center text-black text-xl hover:text-neutral-700"
              >
                <img src="~/assets/images/icons/cart.svg" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <div
        v-if="active"
        class="flex z-10 transform transition-transform duration-100 ease-in-out shadow justify-center absolute w-full py-5 bg-white"
      >
        <div class="space-y-6">
          <ul class="text-center space-y-2">
            <li>
              <Link
                to="/collections/men"
                class="text-black text-xl hover:text-neutral-700"
                >Men</Link
              >
            </li>
            <li>
              <Link
                to="/collections/women"
                class="text-black text-xl hover:text-neutral-700"
                >Women</Link
              >
            </li>
            <li>
              <Link
                to="/collections/unisex"
                class="text-black text-xl hover:text-neutral-700"
                >Unisex</Link
              >
            </li>
            <li>
              <Link
                to="/collections"
                class="text-black text-xl hover:text-neutral-700"
                >Collection</Link
              >
            </li>
            <li>
              <Link to="/" class="text-black text-xl hover:text-neutral-700"
                >Shop</Link
              >
            </li>
            <li>
              <Link to="/" class="text-black text-xl hover:text-neutral-700"
                >About Us</Link
              >
            </li>
            <li>
              <Link
                to="/"
                class="flex space-x-1 items-center text-black text-xl hover:text-neutral-700"
              >
                <img src="~/assets/images/icons/user.svg" />
                <span>Account</span>
              </Link>
            </li>
          </ul>
          <ul class="text-center space-y-2">
            <li>
              <Link to="/" class="text-black text-xl hover:text-neutral-700"
                >FAQ</Link
              >
            </li>

            <li>
              <Link to="/" class="text-black text-xl hover:text-neutral-700"
                >Contact us</Link
              >
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import Link from "~/components/ui/Link.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const active = ref(false);

const openMenu = () => {
  active.value = true;
};
const closeMenu = () => {
  active.value = false;
};

watch(
  () => route.path,
  () => {
    active.value = false;
  },
);
</script>

<style scoped></style>
