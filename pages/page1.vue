<template>
  <div>
    <h1>Page 1</h1>
    <div v-if="pending">Loading</div>
    <pre v-else>
      {{data}}
    </pre>
  </div>
</template>

<script setup>
const {$apiFetch} = useNuxtApp()
const {data, pending} = await useAsyncData('page1', () => $apiFetch('posts'))
</script>
