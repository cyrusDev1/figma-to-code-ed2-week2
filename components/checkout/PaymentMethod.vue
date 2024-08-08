<template>
  <div class="w-full space-y-4">
    <div class="space-y-3">
      <h2 class="text-lg font-bold">Select payment method</h2>
      <div class="flex w-full space-x-2 md:space-x-5">
        <div
          class="hover:bg-gray-100 transition transition-duration-400 cursor-pointer w-full py-4 px-3 border border-black-gray rounded-xl flex flex-col space-y-2"
        >
          <img class="size-5" src="~/assets/images/icons/card.svg" />
          <span class="font-medium">Debit / Credit Card</span>
        </div>
        <div
          class="hover:bg-gray-100 transition transition-duration-400 cursor-pointer w-full py-4 px-3 border border-black-gray rounded-xl flex flex-col space-y-2"
        >
          <img class="size-5" src="~/assets/images/icons/home.svg" />
          <span class="font-medium">Virtual account</span>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div
          :class="{ 'md:col-span-2': index === 0, 'space-y-2': true }"
          class="space-y-2"
          v-for="(input, index) in deliveryForm"
          :key="index"
        >
          <Input
            :type="input.type"
            :placeholder="input.placeholder"
            v-model="input.value"
            class="focus:border-black w-full placeholder-black text-sm border border-black-gray py-2 px-4 xl:p-3 rounded-full outline-none"
          ></Input>
        </div>
      </div>
      <div class="flex items-center">
        <input
          id="custom-checkbox"
          type="checkbox"
          class="hidden"
          v-model="checked"
        />
        <label for="custom-checkbox" class="flex items-center cursor-pointer">
          <span
            class="size-5 inline-block border border-gray-300 rounded flex-shrink-0 mr-2 flex items-center justify-center"
            :class="{ 'bg-gray-800': checked }"
          >
            <svg
              v-if="checked"
              class="size-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </span>
          <span class="text-sm font-medium"
            >Use shipping address as billing address</span
          >
        </label>
      </div>
      <div class="flex justify-center">
        <Link
          to="/payment"
          class="hover:opacity-90 flex w-full md:w-2/3 items-center space-x-2 justify-center p-3 px-20 bg-black text-white font-semibold rounded-full"
        >
          <span>Pay $524.00</span>
          <img class="" src="~/assets/images/icons/arrow-right.svg" />
        </Link>
      </div>
    </div>
  </div>
</template>
<script setup>
import Link from "~/components/ui/Link.vue";
import Button from "~/components/ui/Button.vue";
import Input from "~/components/ui/Input.vue";

import { ref } from "vue";

const deliveryForm = ref([
  {
    id: "firstName",
    label: "",
    type: "number",
    placeholder: "Card number",
    value: "",
  },
  {
    id: "lastName",
    label: "",
    type: "text",
    placeholder: "Expiration date (MM/YY)",
    value: "",
  },
  {
    id: "email",
    label: "",
    type: "number",
    placeholder: "Security code",
    value: "",
  },
]);
const checked = ref(false);
</script>
<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
