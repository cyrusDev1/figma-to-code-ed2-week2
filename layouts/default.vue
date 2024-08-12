<template>
  <div class="flex flex-col min-h-screen">
    <!-- Alert Message -->
    <AlertMessage class=""></AlertMessage>

    <!-- Header (Desktop) -->
    <div class="mx-32 hidden xl:block">
      <Header></Header>
    </div>

    <!-- Header (Mobile) -->
    <div class="xl:hidden">
      <MobileHeader></MobileHeader>
    </div>

    <!-- Slot for Page Content -->
    <main class="flex-grow">
      <slot></slot>
    </main>

    <!-- Footer -->
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
