<template>
  <header class="py-5 border-b">
    <div class="flex justify-between">
      <div>
        <ul class="flex space-x-5">
          <li>
            <Link
              to="/collections/men"
              class="text-black text-base hover:text-neutral-700"
              >Men</Link
            >
          </li>
          <li>
            <Link
              to="/collections/women"
              class="text-black text-base hover:text-neutral-700"
              >Women</Link
            >
          </li>
          <li>
            <Link
              to="/collections/unisex"
              class="text-black text-base hover:text-neutral-700"
              >Unisex</Link
            >
          </li>
          <li>
            <Link
              to="/collections"
              class="text-black text-base hover:text-neutral-700"
              >Collections</Link
            >
          </li>
        </ul>
      </div>
      <div class="">
        <Link to="/">
          <img src="~/assets/images/logo.svg" />
        </Link>
      </div>
      <div>
        <ul class="flex items-center space-x-5">
          <li>
            <Link to="/" class="text-black text-base hover:text-neutral-700"
              >Shop</Link
            >
          </li>
          <li>
            <Link to="/" class="text-black text-base hover:text-neutral-700"
              >About Us</Link
            >
          </li>
          <li>
            <Link
              to="/"
              class="flex space-x-1 items-center text-black text-base hover:text-neutral-700"
            >
              <img src="~/assets/images/icons/user.svg" />
              <span>Account</span>
            </Link>
          </li>
          <li>
            <Link to="/cart" class="text-black text-base hover:text-neutral-700"
              >Cart(0)</Link
            >
          </li>
          <li>
            <Link
              to="/"
              class="flex space-x-1 items-center text-black text-base hover:text-neutral-700"
            >
              <img src="~/assets/images/icons/search.svg" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import Link from "~/components/ui/Link.vue";
</script>
