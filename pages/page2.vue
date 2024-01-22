<template>
  <div>
    <h1>Page 2</h1>
    <div v-if="pending">Loading</div>
    <pre v-else>
      {{data}}
    </pre>
  </div>
</template>

<script setup>
const {$apiFetch} = useNuxtApp()
const {data, pending} = await useAsyncData('page2', () => $apiFetch('users'))
</script>
