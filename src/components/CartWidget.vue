<script setup>
// imports
import { ref } from "vue";
import CartItem from "./CartItem.vue";
import { useCartStore } from "@/stores/CartStore";

const cartStore = useCartStore();

// data
const active = ref(false);
</script>
<template>
  <div class="relative">
    <!-- Icon that always shows -->
    <span class="cursor-pointer" @click="active = true">
      <fa icon="shopping-cart" size="lg" class="text-gray-700" />
      <div class="cart-count absolute">{{ cartStore.items }}</div>
    </span>
    <!-- Modal Overlay only shows when cart is clicked on -->
    <AppModalOverlay :active="active" @close="active = false">
      <div>
        <div v-if="cartStore.cart.length === 0">Cart is empty</div>
        <ul class="items-in-cart" v-for="prod in cartStore.cart">
          <CartItem
            :product="{ name: prod.name, price: prod.price, id: prod.id }"
            :count="prod.count"
            @updateCount=""
            @clear=""
          />
        </ul>
        <div class="flex justify-end text-2xl mb-5">
          Total: <strong> {{ cartStore.cartTotal }}</strong>
        </div>
        <div class="flex justify-end">
          <AppButton class="secondary mr-2">Clear Cart</AppButton>
          <AppButton class="primary">Checkout</AppButton>
        </div>
      </div>
      <!-- Uncomment and use condition to show when cart is empty -->
      <!-- <div><em>Cart is Empty</em></div> -->
    </AppModalOverlay>
  </div>
</template>
<style lang="pcss" scoped>
.items-in-cart{
  @apply mb-5;
}
.items-in-cart li{
  @apply flex justify-between p-2;
}
.items-in-cart li:nth-of-type(even){
  @apply bg-gray-300;
}
</style>
