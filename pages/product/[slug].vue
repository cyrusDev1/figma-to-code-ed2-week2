<template>
  <section class="mb-24">
    <ProductDetail v-if="data" :detail="data"></ProductDetail>
    <Loader v-else></Loader>
  </section>
</template>

<script setup>
import Loader from "~/components/common/Loader.vue";
import { useRoute } from "#app";
import { useProduct } from "~/composables/useProduct";
import ProductDetail from "~/components/product/ProductDetail.vue";

const route = useRoute();
const slug = route.params.slug;

const data = ref(null);

onMounted(async () => {
  try {
    data.value = await useProduct(slug);
    console.log(data.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<style scoped></style>
