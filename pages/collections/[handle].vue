<template>
  <div class="mx-5 xl:mx-32 py-10 mb-20">
    <h2 class="text-4xl capitalize font-bold font-chillax">{{ handle }}</h2>
    <div
      v-if="data"
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-12 xl:gap-y-20 mt-8"
    >
      <ProductItem
        v-for="product in data.products.edges"
        :product="product.node"
      ></ProductItem>
    </div>
    <div v-else>
      <Loader></Loader>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "#app";
import { useCollectionByHandle } from "~/composables/useCollectionByHandle";
import ProductItem from "~/components/product/ProductItem.vue";
import Loader from "~/components/common/Loader.vue";

const route = useRoute();
const handle = route.params.handle;

const data = ref(null);

onMounted(async () => {
  try {
    data.value = await useCollectionByHandle(handle);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<style scoped></style>
