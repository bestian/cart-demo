<template>
  <q-page>
    <q-list bordered separator>
      <q-item clickable v-ripple class="my-card" v-for="(i, k) in items" :key="k" v-show="inCart(i)">
        <q-item-section>
          <q-img :src="i.img"></q-img>
        {{ i.name }}($NT{{ i.price }})</q-item-section>

        <q-btn @click="removeFromCart(i)" v-show="inCart(i)">
          <q-icon name="delete"></q-icon>
          Remove
        </q-btn>
      </q-item>
    </q-list>

    <br/>

    <div> 總金額：$NT{{countTotal()}} </div>

    <br/>

    <q-btn class="full-width" @click="buy()">
      <q-icon name="shopping_cart"></q-icon>
      Buy Now
    </q-btn>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import InApp from 'detect-inapp';

export default defineComponent({
  name: 'CartPage',
  props: ['me', 'uid', 'email', 'photoURL', 'isLogout', 'token', 'isInApp', 'items'],
  setup () {
    return {  };
  },
  methods: {
    countTotal () {
      var ans = 0
      if (!this.uid || !this.me) {
        return 0
      }
      for (let k = 0; k < (this.me.cart || []).length; k++) {
        if (this.inCart(this.me.cart[k])) {
          ans += this.me.cart[k].price
        }
      }
      return ans
    },
    inCart (i) {
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
    },
    buy () {
      this.$router.push('/checkout')
    }
  }
});
</script>
