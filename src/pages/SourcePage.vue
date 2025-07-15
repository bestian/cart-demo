<template>
  <div id="source" class="bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <h4>本專案採用MIT授權條款開源</h4>
      <q-btn class="q-mt-xl" color="white" text-color="blue" unelevated @click="goto_source()" label="Fork me on GitHub"
        no-caps />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound',
  methods: {
    goto_source() {
      window.open('https://www.github.com/bestian/cart-demo');
    },
  },
});
</script>

<style scoped>
#source {
  height: 100vh;
}
</style>
