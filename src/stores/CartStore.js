import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      cart: [],
      items: 0,
      cartTotal: 0,
    };
  },
  actions: {
    addToCart(prod) {
      this.cart.push(prod);
      this.items += prod.count;
      this.cartTotal += prod.price * prod.count;
    },
    deleteFromCart(prod) {
      const index = this.cart.indexOf(prod);
      this.cart.splice(index, 1);
    },
  },
});
