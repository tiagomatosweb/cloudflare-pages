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
import {useLazyAsyncData} from "#app";

const { data, pending } = useLazyAsyncData('page1', () => $fetch('https://staging-api.laravue.com.br/api/courses'))
</script>