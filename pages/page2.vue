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
import {useLazyAsyncData} from "#app";

const {data, pending} = useLazyAsyncData('page2', () => $fetch('https://jsonplaceholder.typicode.com/posts'))

</script>