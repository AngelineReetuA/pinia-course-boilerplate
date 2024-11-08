<script setup>
// imports
import { ref } from "vue";
import AppCountInput from "./AppCountInput.vue";
import { useCartStore } from "@/stores/CartStore";
import Swal from "sweetalert2";

const cartStore = useCartStore();

// props
const props = defineProps({
  product: Object,
});

// data
const count = ref(0);

function addToCart(prodName, price, countP, id) {
  count.value = 0;
  cartStore.addToCart({
    id: id,
    name: prodName,
    price: price,
    count: countP,
  });
  Swal.fire({
    position: "center",
    width: 300,
    title: "Item added",
    showConfirmButton: false,
    timer: 500,
  });
}
</script>
<template>
  <li class="card" :key="product">
    <img :src="`/images/${product.image}`" class="mb-3" width="300" />
    <div>
      {{ product.name }} -
      <span class="text-green-500">Rs {{ product.price }} /-</span>
      <div class="text-center m-4">
        <AppCountInput v-model="count" />
      </div>
      <AppButton
        class="primary"
        @click="addToCart(product.name, product.price, count, product.id)"
        >Add to Cart</AppButton
      >
    </div>
  </li>
</template>
