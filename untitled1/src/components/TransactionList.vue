<script setup>
import { ref } from 'vue'
import {defineProps} from 'vue'
const props = defineProps({
  transactions: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['deleteTransaction']);

const deleteTransaction = (id) => {
  emit('deleteTransaction', id);
 }
</script>

<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li v-for="transaction in transactions" :key="transaction.id" class="transaction.amount > 0 ? 'minus' : 'plus'">
       <span> {{transaction.text}} </span>$ {{transaction.amount}} <button @click="deleteTransaction(transaction.id)" class="delete-btn">x</button>
    </li>
  </ul>

</template>

<style scoped>

</style>