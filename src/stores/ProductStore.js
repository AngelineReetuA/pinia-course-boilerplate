import { defineStore } from "pinia";

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [],
    };
  },
  actions: {
    async loadData() {
      this.products = (await import("@/data/products.json")).default;
    },
  },
});
