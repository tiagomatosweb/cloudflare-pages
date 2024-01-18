<template>
  <NuxtLayout>
    <NuxtPwaManifest/>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
const { $pwa } = useNuxtApp()
</script>
