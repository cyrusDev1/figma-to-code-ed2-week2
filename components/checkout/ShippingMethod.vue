<template>
  <div class="space-y-4">
    <h2 class="text-lg font-bold">Shipping method</h2>
    <div class="flex flex-col space-y-4">
      <ShippingMethodItem
        v-for="option in shippingOptions"
        :key="option.method"
        :id="option.id"
        :method="option.method"
        :label="option.label"
        :deliveryTime="option.deliveryTime"
        :price="option.price"
        :selectedMethod="selectedMethod"
        @update:selectedMethod="updateSelectedMethod"
      />
    </div>
  </div>
</template>
<script setup>
import Link from "~/components/ui/Link.vue";
import Button from "~/components/ui/Button.vue";
import ShippingMethodItem from "~/components/checkout/ShippingMethodItem.vue";

import { ref } from "vue";

const selectedMethod = ref("free");

const shippingOptions = [
  {
    id: "shipping-free",
    method: "free",
    label: "Free shipping",
    deliveryTime: "7-30 business days",
    price: "$0",
  },
  {
    id: "shipping-regular",
    method: "regular",
    label: "Regular shipping",
    deliveryTime: "3-14 business days",
    price: "$7.50",
  },
  {
    id: "shipping-express",
    method: "express",
    label: "Express shipping",
    deliveryTime: "1-3 business days",
    price: "$22.50",
  },
];

const updateSelectedMethod = (method) => {
  selectedMethod.value = method;
};
</script>
