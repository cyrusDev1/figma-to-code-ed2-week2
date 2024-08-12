<template>
  <div class="space-y-4 w-full">
    <div>
      <h2 class="text-lg font-bold">Your Order</h2>
      <p class="text-black-gray text-sm">
        By placing your order, you agree to Ballamas
        <Link class="text-black underline" to="#">Privacy</Link>
        and
        <Link class="text-black underline" to="#">Policy</Link>.
      </p>
    </div>
    <div class="space-y-3">
      <OrderItem v-for="cart in cartStore.items" :cart="cart"></OrderItem>
    </div>
    <div class="space-y-1">
      <span class="text-sm">Discount Code</span>
      <div class="flex w-full md:w-3/5 xl:w-4/5 space-x-2">
        <Input
          placeholder="Add discount code"
          type="text"
          class="w-full placeholder-black text-sm border border-black-gray py-2 px-4 xl:p-3 rounded-full outline-none"
        ></Input>
        <Button
          type="text"
          class="hover:opacity-90 py-2 px-4 xl:p-3 xl:px-5 bg-black text-white font-semibold rounded-full"
          >Apply</Button
        >
      </div>
      <p class="text-black text-sm font-medium">
        New customer?
        <Link class="text-black underline" to="#">Signup</Link>
        <span class="text-black-gray"> to get better offer</span>.
      </p>
    </div>
    <div class="border-b space-y-1 text-black-gray pb-4">
      <div class="flex justify-between">
        <span>Sutotal</span>
        <span>CAD {{ cartStore.totalPrice }}</span>
      </div>
      <div class="flex justify-between">
        <span>Discount</span>
        <span>CAD 0</span>
      </div>
    </div>
    <div class="flex font-semibold justify-between">
      <span>Order total</span>
      <span>CAD {{ cartStore.totalPrice }}</span>
    </div>
  </div>
</template>
<script setup>
import Link from "~/components/ui/Link.vue";
import Button from "~/components/ui/Button.vue";
import OrderItem from "~/components/checkout/OrderItem.vue";
import { ref } from "vue";
import { useCartStore } from "~/stores/cart";
const cartStore = useCartStore();
</script>
