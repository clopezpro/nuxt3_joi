<script setup>
const errorTest = ref({});
const email = ref('');
async function test() {
  const { error } = await useFetch('/api', {
    method: 'GET',
    query: { email: email.value },
  });
  alert(error.value);
  errorTest.value = error.value;
}
</script>
<template>
  <div>
    <input type="email" v-model="email" />
    <button @click="test">TEST</button>
  </div>
  <pre>
   ERR:{{ errorTest }}
  </pre>
</template>
