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
      const alreadyExists = this.cart.some((element) => element.id === prod.id);
      if (alreadyExists) {
        this.updateToCart(prod);
        return;
      }
      this.cart.push(prod);
      this.items += prod.count;
      this.cartTotal += prod.price * prod.count;
    },
    updateToCart(prod) {
      const item = this.cart.find((item) => {
        return item.id === prod.id;
      });
      const index = this.cart.indexOf(item);
      this.cart[index].count += prod.count;
      this.cartTotal += prod.price * prod.count;
      this.items += prod.count;
    },
    updateStraightFromCart(prod) {
      const item = this.cart.find((item) => {
        return item.id === prod.id;
      });
      const countToBeAdded = prod.count - item.count;
      const index = this.cart.indexOf(item);
      this.cart[index].count += countToBeAdded;
      this.cartTotal += prod.price * countToBeAdded;
      this.items += countToBeAdded;
    },
    deleteFromCart(prod) {
      const item = this.cart.find((item) => {
        return item.id === prod.id;
      });
      this.items -= item.count;
      this.cartTotal -= item.price * item.count;
      this.cart.splice(this.cart.indexOf(item), 1);
    },
    clearCart() {
      this.cart = [];
      this.items = 0;
      this.cartTotal = 0;
    },
  },
});
