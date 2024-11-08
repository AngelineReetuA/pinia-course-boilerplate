<script setup>
import { useCartStore } from "@/stores/CartStore";
const cartStore = useCartStore();

defineProps({
  product: { type: Object, required: true },
  count: { type: Number, required: true },
});

defineEmits(["updateCount", "clear"]);
</script>
<template>
  <li>
    <span>{{ product.name }} - Rs {{ product.price }}</span>
    <span class="whitespace-nowrap">
      <AppCountInput
        :model-value="count"
        @update:modelValue="$emit('updateCount', $event, product)"
        :count="count"
      />
      <span class="inline-block w-12 text-right"
        >Rs {{ count * product.price }}</span
      >
      <span class="ml-4" @click="cartStore.deleteFromCart(product)">
        <fa icon="trash-alt" />
      </span>
    </span>
  </li>
</template>
