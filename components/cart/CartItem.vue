<template>
  <tr v-if="cart" class="block flex items-center justify-between py-5 border-b">
    <td>
      <div class="flex items-center space-x-2">
        <img class="size-11 md:size-20 object-cover" :src="cart.image.url" />
        <div class="flex flex-col">
          <span class="font-semibold text-xs md:text-sm">{{ cart.name }}</span>
          <span class="font-medium text-xs md:text-sm text-black-gray">{{
            cart.title
          }}</span>
          <span class="font-semibold text-xs md:text-sm">{{
            cart.price.currencyCode + " " + cart.price.amount
          }}</span>
        </div>
      </div>
    </td>
    <td>
      <div class="flex space-x-2 items-center">
        <div
          class="p-2 md:p-3 bg-[#e5e5e5] cursor-pointer rounded-full flex items-center p-2 md:space-x-5"
        >
          <img
            @click="subQuantity()"
            class="size-4"
            src="~/assets/images/icons/remove.svg"
          />
          <input
            type="number"
            v-model="cart.quantity"
            class="bg-[#e5e5e5] outline-none text-xs w-8 text-center"
          />
          <img
            @click="addQuantity()"
            class="size-4"
            src="~/assets/images/icons/plus.svg"
          />
        </div>
        <div
          @click="cartStore.removeItem(cart.id)"
          class="p-2 md:p-3 bg-[#e5e5e5] cursor-pointer rounded-full flex p-2 justify-between"
        >
          <img class="size-4" src="~/assets/images/icons/trash.svg" />
        </div>
      </div>
    </td>
    <td>
      <span class="font-semibold text-sm">{{
        cart.price.currencyCode + " " + cart.price.amount * cart.quantity
      }}</span>
    </td>
  </tr>
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

const addQuantity = () => {
  cartStore.addItem(props.cart, props.cart.name);
};

const subQuantity = () => {
  cartStore.subItem(props.cart);
};
</script>
