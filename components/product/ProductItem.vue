<template>
  <div v-if="product" class="space-y-4 w-full">
    <div
      :to="`/product/${product.handle}`"
      class="inline-block relative group cursor-pointer w-full"
    >
      <div
        class="rounded-3xl transition transition-duration-400 absolute opacity-30 group-hover:bg-gray-800 w-full h-full"
      ></div>
      <div
        class="absolute top-4 left-4 text-xs font-semibold rounded-3xl bg-white p-2 text-black"
      >
        GET OFF 20%
      </div>

      <img
        class="rounded-3xl w-full h-full object-cover"
        :src="product.featuredImage.url"
      />
      <div class="flex bg-red-500 z-100 justify-center w-full">
        <div
          class="transition transition-duration-400 absolute hidden px-1 group-hover:flex bottom-3 space-x-1"
        >
          <Button
            @click="addToCart(product.variants?.edges[0])"
            class="flex items-center space-x-2 bg-white rounded-full font-extrabold md:font-mono text-xs md:text-sm text-black py-1 md:p-2 px-3"
          >
            <img class="size-4" src="~/assets/images/icons/cart-two.svg" />
            <span class="md:mt-1">ADD TO CART</span>
          </Button>
          <Button
            @click="buyNow(product.variants?.edges[0])"
            class="hover:opacity-90 flex items-center space-x-2 border rounded-full font-extrabold text-sm text-white p-2 px-6"
          >
            <span class="">BUY NOW</span>
          </Button>
        </div>
      </div>
    </div>
    <div class="">
      <Link
        :to="`/product/${product.handle}`"
        class="block text-2xl md:text-3xl font-semibold"
        >{{ product.title }}</Link
      >
      <p class="text-2xl flex space-x-2 font-semibold text-black-gray">
        <span>{{ product.variants?.edges[0].node.price.currencyCode }}</span>
        <span>{{ product.variants?.edges[0].node.price.amount }}</span>
      </p>
    </div>
  </div>
</template>
<script setup>
import Button from "~/components/ui/Button.vue";
import Link from "~/components/ui/Link.vue";
import { ref, onMounted } from "vue";
import { useCartStore } from "~/stores/cart";
import { useRouter } from "vue-router";

const router = useRouter();

import { defineProps, computed } from "vue";

const props = defineProps({
  product: {
    type: Array,
    required: false,
  },
});
onMounted(async () => {
  console.log(props.product);
});
const cartStore = useCartStore();

const addToCart = (product) => {
  cartStore.addItem(product.node, props.product.title);
  router.push("/cart");
};
const buyNow = (product) => {
  cartStore.addItem(product.node, props.product.title);
  router.push("/checkout");
};
</script>
