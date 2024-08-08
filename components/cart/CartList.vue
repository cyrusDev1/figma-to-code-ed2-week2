<template>
  <div class="xl:w-3/4">
    <div class="flex justify-between items-center w-full">
      <span class="font-semibold font-chillax text-2xl">Cart(3)</span>
      <div class="bg-[#e5e5e5] cursor-pointer rounded-full flex p-2 space-x-1">
        <img src="~/assets/images/icons/trash-gray.svg" />
        <span class="text-sm text-black-gray">Clear Cart</span>
      </div>
    </div>
    <div class="">
      <table class="w-full">
        <thead>
          <tr class="block flex justify-between py-3 border-b">
            <td class="text-sm text-black-gray">Product</td>
            <td class="text-sm text-black-gray">Quantity</td>
            <td class="text-sm text-black-gray">Price</td>
          </tr>
        </thead>
        <tbody>
          <CartItem v-for="i in 3"></CartItem>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductItem from "~/components/cart/CartItem.vue";
</script>
