<template>
  <tr class="block flex items-center justify-between py-5 border-b">
    <td>
      <div class="flex items-center space-x-2">
        <img
          class="size-11 md:size-20 object-cover"
          src="~/assets/images/product.png"
        />
        <div class="flex flex-col">
          <span class="font-semibold text-xs md:text-sm">T-Shirt</span>
          <span class="font-medium text-xs md:text-sm text-black-gray"
            >Green-Large</span
          >
          <span class="font-semibold text-xs md:text-sm">$87</span>
        </div>
      </div>
    </td>
    <td>
      <div class="flex space-x-2 items-center">
        <div
          class="p-2 md:p-3 bg-[#e5e5e5] cursor-pointer rounded-full flex items-center p-2 md:space-x-5"
        >
          <img class="size-4" src="~/assets/images/icons/remove.svg" />
          <input
            type="number"
            value="2"
            class="bg-[#e5e5e5] outline-none text-xs w-8 text-center"
          />
          <img class="size-4" src="~/assets/images/icons/plus.svg" />
        </div>
        <div
          class="p-2 md:p-3 bg-[#e5e5e5] cursor-pointer rounded-full flex p-2 justify-between"
        >
          <img class="size-4" src="~/assets/images/icons/trash.svg" />
        </div>
      </div>
    </td>
    <td>
      <span class="font-semibold text-sm">$87</span>
    </td>
  </tr>
</template>
