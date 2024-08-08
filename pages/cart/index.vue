<template>
  <section class="mx-5 xl:mx-32 my-16">
    <div class="xl:flex xl:space-x-10">
      <CartList></CartList>
      <CartSummary></CartSummary>
    </div>
  </section>
</template>
<script setup>
import CartList from "~/components/cart/CartList.vue";
import CartSummary from "~/components/cart/CartSummary.vue";
</script>

<style scoped></style>
