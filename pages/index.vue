<template>
  <section>
    <Banner></Banner>
  </section>
  <section>
    <div class="my-16 md:my-20 mx-5 xl:mx-32">
      <p class="font-chillax text-center font-semibold text-2xl md:text-3xl">
        Discover the latest trends in summer fashion. Shop now and refresh your
        wardrobe with our stylish summer shirts.
      </p>
      <ProductList></ProductList>
    </div>
  </section>
  <section>
    <OurCollection></OurCollection>
  </section>
</template>
<script setup>
import Link from "~/components/ui/Link.vue";
import Banner from "~/components/Banner.vue";
import OurCollection from "~/components/OurCollection.vue";
import ProductList from "~/components/product/ProductList.vue";
</script>

<style scoped></style>
