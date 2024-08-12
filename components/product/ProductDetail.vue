<template>
  <div v-if="detail">
    <div
      class="xl:flex xl:space-x-11 space-y-8 xl:space-y-0 mx-5 xl:mx-32 my-10 md:my-20 h-auto"
    >
      <div class="w-full flex-1 items-stretch h-auto">
        <div class="w-full h-auto flex items-stretch">
          <img
            class="w-full h-full object-cover rounded-2xl md:rounded-4xl"
            :src="activeVariant.node.image.url"
            alt="Product Image"
          />
        </div>
      </div>
      <div class="w-full flex-1 space-y-3 md:space-y-5 h-auto">
        <h3 class="text-3xl font-chillax md:text-5xl font-semibold">
          {{ detail.title }}
        </h3>
        <p class="text-2xl md:text-3xl font-semibold flex space-x-2">
          <span>{{ detail.variants?.edges[0].node.price.currencyCode }}</span>
          <span>{{ detail.variants?.edges[0].node.price.amount }}</span>
        </p>
        <div
          v-if="
            detail.variants.edges.length >= 2 &&
            getColorFromVariant(activeVariant.node.title) != '#000'
          "
          class="space-y-4"
        >
          <span class="text-2xl md:text-3xl font-medium"
            >Color:
            {{
              activeVariant.node.title.split(" / ")[1] ||
              activeVariant.node.title
            }}</span
          >
          <div class="flex space-x-2">
            <div
              class="transform trasition transition-duration-100 p-1 rounded-full"
              v-for="variant in detail.variants.edges"
              :class="{ 'border border-black': variant == activeVariant }"
            >
              <span
                :style="{
                  backgroundColor: getColorFromVariant(variant.node.title),
                }"
                class="transform trasition transition-duration-100 block cursor-pointer w-4 h-4 bg-green-900 rounded-full"
                @click="selectVarient(variant)"
              ></span>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <span class="text-2xl md:text-3xl font-medium">Size:</span>
          <div>
            <ul class="flex flex-wrap gap-x-2 gap-y-2">
              <Filter :data="data" class="py-1 px-5"></Filter>
            </ul>
          </div>
        </div>
        <div class="flex space-x-3">
          <Button
            type="button"
            class="hover:opacity-80 bg-black text-white rounded-full py-3 md:py-6 text-sm text-center w-full"
            >BUY NOW</Button
          >
          <Link
            to="/cart"
            class="hover:bg-black hover:text-white transition-colors duration-100 border border-black rounded-full py-3 md:py-6 text-sm text-center w-full"
          >
            ADD TO CART</Link
          >
        </div>
        <div class="space-y-4">
          <span class="text-3xl font-medium font-chillax">Description</span>
          <p v-if="detail.description" class="text-black-gray text-lg">
            {{ detail.description }}
          </p>
          <p v-else class="text-black-gray text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>
        </div>
      </div>
    </div>

    <div class="space-y-8 mx-5 xl:mx-32">
      <h2 class="text-3xl font-semibold font-chillax">You may also like</h2>
      <div
        class="md:flex space-y-5 md:space-y-0 gap-4 overflow-x-auto scrollbar-hide md:flex-nowrap"
      >
        <ProductItem
          v-for="product in detail.collections.edges[0].node.products.edges"
          :product="product.node"
          class="min-w-[320px]"
        >
        </ProductItem>
      </div>
    </div>
  </div>

  <div v-else>
    <Loader></Loader>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Link from "~/components/ui/Link.vue";
import Loader from "~/components/common/Loader.vue";
import Button from "~/components/ui/Button.vue";
import ProductItem from "~/components/product/ProductItem.vue";
import Filter from "~/components/product/Filter.vue";
import { defineProps, computed } from "vue";
const names = ["XS", "S", "M", "L", "XL"];

const counts = [];
const data = names.map((name, index) => ({
  name,
  count: counts[index] || 0,
}));

const props = defineProps({
  detail: {
    type: Array,
    required: false,
  },
});

const activeVariant = ref(props.detail?.variants?.edges[0] || null);
const getColorFromVariant = (title) => {
  const colorMap = {
    Green: "#009688",
    Olive: "#8a9a5b",
    Ocean: "#006994",
    Purple: "#6a1b9a",
  };

  return colorMap[title] || colorMap[title.split(" / ")[1]] || "#000";
};

const selectVarient = (variant) => {
  activeVariant.value = variant;
};

onMounted(async () => {});
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
