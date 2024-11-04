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
      console.log("prod", prod);
      const index = this.cart.find((item) => {
        return item.id === prod.id;
      });
      console.log("obj", index);
      this.cart.splice(index, 1);
      const minus = index.price * index.count;
      this.cartTotal -= minus;
    },
  },
});
