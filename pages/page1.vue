<template>
  <div>
    <h1>Page 1</h1>
    <br>
    <pre v-if="!pending">
      {{data}}
    </pre>
  </div>
</template>

<script setup>
const {$apiFetch} = useNuxtApp()
const {data, pending} = useLazyAsyncData('page1', () => $apiFetch('/posts'))
</script>