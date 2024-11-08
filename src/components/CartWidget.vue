<script setup>
// imports
import { ref } from "vue";
import CartItem from "./CartItem.vue";
import { useCartStore } from "@/stores/CartStore";

const cartStore = useCartStore();

// data
const active = ref(false);

function updateCountOnProd(event, prod) {
  cartStore.updateStraightFromCart({
    id: prod.id,
    name: prod.name,
    price: prod.price,
    count: event,
  });
}
</script>
<template>
  <div class="relative">
    <span class="cursor-pointer" @click="active = true">
      <fa icon="shopping-cart" size="lg" class="text-gray-700" />
      <div class="cart-count absolute">{{ cartStore.items }}</div>
    </span>
    <AppModalOverlay :active="active" @close="active = false">
      <div>
        <div v-if="cartStore.cart.length === 0">Cart is empty</div>
        <ul class="items-in-cart" v-for="prod in cartStore.cart">
          <CartItem
            :product="{ name: prod.name, price: prod.price, id: prod.id }"
            :count="prod.count"
            @updateCount="updateCountOnProd"
          />
        </ul>
        <div class="flex justify-end text-2xl mb-5">
          Total: <strong>Rs.{{ cartStore.cartTotal }}/-</strong>
        </div>
        <div class="flex justify-end">
          <AppButton
            class="secondary mr-2"
            v-if="cartStore.items !== 0"
            @click="cartStore.clearCart()"
            >Clear Cart</AppButton
          >
          <AppButton v-if="cartStore.items !== 0" class="primary"
            >Checkout</AppButton
          >
        </div>
      </div>
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
