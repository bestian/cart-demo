<template>
  <q-page>
    <q-list bordered separator>
      <q-item clickable v-ripple class="my-card" v-for="(i, k) in items" :key="k" v-show="inCart(i)">
        <q-item-section>
          <q-img :src="i.img" style="max-height: 300px; max-width: 400px"></q-img>
          {{ i.name }}(單價：$NT{{ i.price }})
          <div class="q-mt-sm">
            <div>數量：{{ getItemCount(i) }}</div>
            <div>小計：$NT{{ getItemCount(i) * i.price }}</div>
          </div>
        </q-item-section>

        <q-item-section side>
          <div class="q-gutter-sm">
            <q-btn color="primary" size="sm" round @click="addToCart(i)" icon="add" />
            <q-btn color="orange" size="sm" round @click="decreaseQuantity(i)" icon="remove"
              :disable="getItemCount(i) <= 1" />
            <q-btn color="red-4" size="sm" round @click="removeFromCart(i)" icon="delete" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>

    <br />

    <div>總金額：$NT{{ countTotal() }}</div>

    <br />

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
  props: [
    'me',
    'uid',
    'email',
    'photoURL',
    'isLogout',
    'token',
    'isInApp',
    'items',
  ],
  setup() {
    return {};
  },
  methods: {
    countTotal() {
      var ans = 0;
      if (!this.uid || !this.me) {
        return 0;
      }
      for (let k = 0; k < (this.me.cart || []).length; k++) {
        ans += this.me.cart[k].price;
      }
      return ans;
    },
    inCart(i: any) {
      if (!this.uid) {
        return false;
      } else {
        var arr = (this.me.cart || []).filter(function (o: any) {
          return o.name === i.name;
        });
        return arr.length > 0;
      }
    },
    getItemCount(i: any) {
      if (!this.uid || !this.me) {
        return 0;
      }
      var arr = (this.me.cart || []).filter(function (o: any) {
        return o.name === i.name;
      });
      return arr.length;
    },
    addToCart(i: any) {
      this.$emit('addToCart', i);
    },
    removeFromCart(i: any) {
      this.$emit('removeFromCart', i);
    },
    decreaseQuantity(i: any) {
      if (this.getItemCount(i) > 1) {
        this.$emit('removeAnItemFromCart', i);
      }
    },
    buy() {
      this.$router.push('/checkout');
    },
  },
});
</script>
