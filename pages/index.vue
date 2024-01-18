<template>
  <div>
    Welcome1
    <br/>

    Is PWA working?
    <pre>{{ $pwa }}</pre>

    <div
        v-show="$pwa.needRefresh"
        class="fixed bottom-0 right-0 p-2"
    >
      <div class="px-4 py-2 bg-brand-navy rounded-xl text-white">
      <span>
        New content available, click on reload button to update.
      </span>

        <button @click="$pwa.updateServiceWorker()">
          Reload
        </button>
      </div>
    </div>
    test 13
  </div>
</template>

<script setup>
const { $pwa } = useNuxtApp()
</script>
