<template>
  <Header />
  <div class = "container">
    <Balance :total="total"/>
    <Income :income="+income" :expenses="+expenses" />
    <TransactionList :transactions="transactions" @delete-transaction="handleTransactionDeleted"/>
    <AddTransaction @TransactionSubmitted="handleTransactionSubmitted"/>
  </div>
</template>

<script setup>

import Header from './components/Header.vue';
import Balance from "@/components/Balance.vue";
import Income from "@/components/Income.vue";
import TransactionList from "@/components/TransactionList.vue";
import AddTransaction from "@/components/AddTransaction.vue";
import {computed, ref, onMounted} from "vue";
import {useToast} from "vue-toastification";

const toast = useToast();

const transactions = ref([]);

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));

  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});

//Get total
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {return acc + transaction.amount;}, 0);
});

//Get income
const income = computed(() => {
  return transactions.value.filter((transaction) => transaction.amount > 0).reduce((acc, transaction) => {return acc + transaction.amount;}, 0).toFixed(2);
});

//get expenses
const expenses = computed(() => {
  return transactions.value.filter((transaction) => transaction.amount < 0).reduce((acc, transaction) => {return acc + transaction.amount;}, 0).toFixed(2);
});

//add Transaction
const handleTransactionSubmitted = (transaction) => { //how do u get the transaction from the child component?

  transactions.value.push(transaction); //pushes the transaction to the array
  toast.success('Transaction Added');
  saveToLocalStorage();
}

//delete transaction
const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter(transaction => transaction.id !== id);
  toast.success('Transaction Deleted');
  saveToLocalStorage();
}

const saveToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value));

}
</script>



<style scoped>

</style>