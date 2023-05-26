<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="my-card" v-for="(i, k) in items" :key="k">
      <q-card-section>
        <div class="text-h6 center aligned">{{ i.name }}</div>
        <q-img :src="i.img"></q-img>
      </q-card-section>
      <q-card-section class="right aligned">
        $NT{{ i.price }}
      </q-card-section>
      <q-btn class="full-width" @click="addToCart(i)" v-show="!inCart(i)">
        <q-icon name="shopping_cart"></q-icon>
        Add to Cart
      </q-btn>
      <q-btn class="full-width" @click="removeFromCart(i)" v-show="inCart(i)">
        <q-icon name="delete"></q-icon>
        Remove
      </q-btn>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { Meta } from 'components/models';
import { defineComponent, ref } from 'vue';
// import InApp from 'detect-inapp';

export default defineComponent({
  name: 'IndexPage',
  props: ['me', 'uid', 'email', 'photoURL', 'isLogout', 'token', 'isInApp', 'items'],
  setup () {
    return {  };
  },
  methods: {
    inCart (i) {
      console.log(this.me.cart)
      if (!this.uid) {
        return false
      } else {
        var arr = (this.me.cart || []).filter(function (o) {
          return o.name === i.name
        })
        return arr.length > 0
      }
    },
    addToCart (i) {
      this.$emit('addToCart', i)
    },
    removeFromCart (i) {
      this.$emit('removeFromCart', i)
    }
  }
});
</script>
