<template>
  <AlertMessage class=""></AlertMessage>
  <div class="mx-32 hidden xl:block">
    <Header></Header>
  </div>
  <div class="xl:hidden">
    <MobileHeader></MobileHeader>
  </div>
  <slot></slot>
  <div class="">
    <Footer></Footer>
  </div>
</template>

<script setup>
import AlertMessage from "~/components/common/AlertMessage.vue";
import Header from "~/components/common/Header.vue";
import MobileHeader from "~/components/common/MobileHeader.vue";
import Footer from "~/components/common/Footer.vue";
import { useHead } from "nuxt/app";

useHead({
  title: "BALLAMAS",
});
</script>

<style scoped></style>
