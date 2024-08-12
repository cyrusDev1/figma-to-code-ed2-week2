import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items:
      process.client && localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    totalPrice:
      process.client && localStorage.getItem("cartTotalPrice")
        ? JSON.parse(localStorage.getItem("cartTotalPrice"))
        : 0,
    totalItem:
      process.client && localStorage.getItem("cartTotalItem")
        ? JSON.parse(localStorage.getItem("cartTotalItem"))
        : 0,
  }),
  actions: {
    addItem(product, name) {
      product.name = name;
      const item = this.items.find((item) => item.id === product.id);
      if (item) {
        item.quantity += 1;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
      this.updateCart();
    },
    subItem(product) {
      const item = this.items.find((item) => item.id === product.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      this.updateCart();
    },
    removeItem(productId) {
      this.items = this.items.filter((item) => item.id !== productId);
      this.updateCart();
    },
    removeAllItems() {
      this.items = [];
      this.updateCart();
    },
    calculateTotalPrice() {
      this.totalPrice = this.items.reduce(
        (totalPrice, item) => totalPrice + item.price.amount * item.quantity,
        0,
      );
    },
    itemsCount() {
      this.totalItem = this.items.reduce(
        (count, item) => count + item.quantity,
        0,
      );
    },
    updateCart() {
      this.itemsCount();
      this.calculateTotalPrice();
      if (process.client) {
        this.saveCartToLocalStorage();
      }
    },
    saveCartToLocalStorage() {
      if (process.client) {
        localStorage.setItem("cartItems", JSON.stringify(this.items));
        localStorage.setItem("cartTotalPrice", JSON.stringify(this.totalPrice));
        localStorage.setItem("cartTotalItem", JSON.stringify(this.totalItem));
      }
    },
  },
});
