<template>
  <div>
    <h1>Page 2</h1>
    <br>
    <pre v-if="!pending">
      {{data}}
    </pre>
  </div>
</template>

<script setup>
const {data, pending} = useLazyAsyncData('page2', () => $fetch('posts', {
  baseURL: 'https://jsonplaceholder.typicode.com',
  credentials: 'include',
}))
</script>