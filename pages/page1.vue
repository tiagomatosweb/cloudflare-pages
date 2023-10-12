<template>
  <div>
    <h1>Page 1</h1>
    <br>
    <pre>
      {{data}}
    </pre>
  </div>
</template>

<script setup>
import {useLazyAsyncData} from "#app";

const { data } = useLazyAsyncData('page1', () => $fetch('https://jsonplaceholder.typicode.com/posts'))
</script>