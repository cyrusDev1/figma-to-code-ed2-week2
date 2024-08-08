<template>
  <div class="flex justify-center text-center pt-36 pb-80">
    <div class="flex flex-col">
      <img
        class="w-12 mx-auto"
        src="~/assets/images/icons/circle-check.svg"
        alt=""
      />
      <span class="font-semibold text-lg">Thanks for your order !</span>
      <p class="text-black-gray">
        The order confirmation has been sent to johndoe@gmail.com
      </p>
    </div>
  </div>
</template>
<script setup>
import Link from "~/components/ui/Link.vue";
import Button from "~/components/ui/Button.vue";
import Input from "~/components/ui/Input.vue";

import { ref } from "vue";
</script>
<style></style>
