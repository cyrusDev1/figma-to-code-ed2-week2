<template>
  <div class="mx-5 xl:mx-32 py-10 mb-20">
    <h2 class="text-4xl font-bold font-chillax">Collections</h2>
    <div
      v-if="collections"
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-20 mt-8"
    >
      <div v-for="collection in collections.edges" class="space-y-4">
        <div class="rounded-2xl h-full shadow-xl">
          <Link class="" :to="`/collections/${collection.node.handle}`">
            <img
              class="w-full h-full object-cover rounded"
              :src="collection.node.image.url"
              :alt="collection.node.title"
            />
          </Link>
        </div>
        <div>
          <Link
            class="text-xl space-x-2 items-center group flex font-medium"
            :to="`/collections/${collection.node.handle}`"
          >
            <span>{{ collection.node.title }}</span>
            <img
              class="transition transition-duration-1000 group-hover:w-6"
              src="~/assets/images/icons/arrow-right-black.svg"
            />
          </Link>
        </div>
      </div>
    </div>
    <div v-else>
      <Loader></Loader>
    </div>
  </div>
</template>

<script setup>
import Link from "~/components/ui/Link.vue";
import { ref, onMounted } from "vue";
import { useCollections } from "~/composables/useCollections";
import Loader from "~/components/common/Loader.vue";

const collections = ref(null);

onMounted(async () => {
  try {
    collections.value = await useCollections();
  } catch (error) {
    console.error("Error fetching collections:", error);
  }
});
</script>
