<template>
  <div v-if="cart" class="block flex items-center justify-between">
    <div>
      <div class="flex items-center space-x-2">
        <img
          class="size-20 object-cover cursor-pointer"
          :src="cart.image.url"
        />
        <div class="flex flex-col">
          <span class="font-semibold text-sm">{{ cart.name }}</span>
          <span class="font-medium text-sm text-black-gray">{{
            cart.title
          }}</span>
          <span class="font-semibold text-sm">{{
            cart.price.currencyCode + " " + cart.price.amount
          }}</span>
        </div>
      </div>
    </div>
    <div>
      <span class="font-semibold text-sm">{{
        cart.price.currencyCode + " " + cart.price.amount * cart.quantity
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { ref } from "vue";
import ProductItem from "~/components/cart/CartItem.vue";
import { useCartStore } from "~/stores/cart";
const cartStore = useCartStore();
const props = defineProps({
  cart: {
    type: Array,
    required: false,
  },
});
</script>
