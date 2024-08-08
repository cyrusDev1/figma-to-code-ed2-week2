<template>
  <section class="mx-5 xl:mx-32 my-16">
    <div class="space-y-5">
      <h2 class="text-2xl font-bold">Checkout</h2>
      <div class="xl:flex xl:space-x-28 w-full space-y-10 xl:space-y-0">
        <div class="xl:w-3/4 space-y-6">
          <Order></Order>
          <ShippingMethod></ShippingMethod>
        </div>
        <div class="xl:w-2/3 space-y-6">
          <ShippingAddress></ShippingAddress>
          <PaymentMethod></PaymentMethod>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Order from "~/components/checkout/Order.vue";
import ShippingMethod from "~/components/checkout/ShippingMethod.vue";
import ShippingAddress from "~/components/checkout/ShippingAddress.vue";
import PaymentMethod from "~/components/checkout/PaymentMethod.vue";
</script>
