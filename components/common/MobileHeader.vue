<template>
  <header>
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
        class="flex justify-center absolute w-full py-10 bg-white"
      >
        <div class="space-y-10">
          <ul class="text-center space-y-4">
            <li>
              <Link to="/" class="text-black text-xl hover:text-neutral-700"
                >Men</Link
              >
            </li>
            <li>
              <Link to="/" class="text-black text-xl hover:text-neutral-700"
                >Women</Link
              >
            </li>
            <li>
              <Link to="/" class="text-black text-xl hover:text-neutral-700"
                >Kids</Link
              >
            </li>
            <li>
              <Link to="/" class="text-black text-xl hover:text-neutral-700"
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
          <ul class="text-center space-y-4">
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

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
