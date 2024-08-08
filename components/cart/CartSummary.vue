<template>
  <div class="md:flex w-full xl:w-2/5 md:justify-center xl:block">
    <div
      class="w-full md:w-1/2 xl:w-full mt-5 xl:mt-0 fit-content border rounded-2xl py-4 px-6"
    >
      <div class="space-y-4">
        <h2 class="font-semibold text-lg">Order summary</h2>
        <div class="border-b space-y-1 text-black-gray pb-4">
          <div class="flex justify-between">
            <span>Sutotal</span>
            <span>$524.00</span>
          </div>
          <div class="flex justify-between">
            <span>Discount</span>
            <span>$0</span>
          </div>
        </div>
        <div class="space-y-2">
          <div class="flex font-semibold justify-between">
            <span>Order total</span>
            <span>$524.00</span>
          </div>
          <div>
            <Link
              to="/checkout"
              class="hover:opacity-90 bg-black w-full flex justify-center items-center space-x-2 border rounded-3xl font-extrabold text-sm text-white p-3"
            >
              <span class="">Checkout now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Link from "~/components/ui/Link.vue";
import Button from "~/components/ui/Button.vue";
</script>
<style>
.fit-content {
  height: fit-content;
}
</style>
