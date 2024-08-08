<template>
  <div class="w-full space-y-4">
    <div>
      <h2 class="text-lg font-bold">Payment details</h2>
      <p class="text-black-gray text-sm">
        Complete your purchase by providing your payment details.
      </p>
    </div>
    <div class="space-y-3">
      <h2 class="text-lg font-bold">Shipping Address</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div
          class="space-y-2"
          v-for="(input, index) in deliveryForm"
          :key="index"
        >
          <label :for="input.id" class="text-sm font-medium">{{
            input.label
          }}</label>
          <Input
            :type="input.type"
            :placeholder="input.placeholder"
            v-model="input.value"
            class="focus:border-black w-full placeholder-black text-sm border border-black-gray py-2 px-4 xl:p-3 rounded-full outline-none"
          ></Input>
        </div>
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
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    value: "",
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    value: "",
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email address",
    value: "",
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter your phone number",
    value: "",
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    placeholder: "Enter your address",
    value: "",
  },
  {
    id: "city",
    label: "City",
    type: "text",
    placeholder: "Enter your city",
    value: "",
  },
  {
    id: "state",
    label: "Region",
    type: "text",
    placeholder: "Enter your region",
    value: "",
  },
  {
    id: "postalCode",
    label: "Postal Code",
    type: "text",
    placeholder: "Enter your postal code",
    value: "",
  },
]);
</script>
