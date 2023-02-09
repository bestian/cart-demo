<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="my-card" v-for="(i, k) in items" :key="k" v-show="inCart(i)">
      <q-card-section>
        <div class="text-h6 center aligned">{{ i.name }}</div>
        <q-img src="https://i.imgur.com/ADEVjSv.jpg" v-if="k % 2 == 0"
      style="height: 170px; max-width: 300px"></q-img>
        <q-img src="https://i.imgur.com/9g8Snz6.jpg" v-else 
      style="height: 170px; max-width: 300px"></q-img>
      </q-card-section>
      <q-card-section class="right aligned">
        $NT{{ i.price }}
      </q-card-section>
      <q-btn class="full-width" @click="buy(i)">
        <q-icon name="shopping_cart"></q-icon>
        Buy Now
      </q-btn>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { Meta } from 'components/models';
import { defineComponent, ref } from 'vue';
// import InApp from 'detect-inapp';

export default defineComponent({
  name: 'CartPage',
  props: ['me', 'users', 'uid', 'email', 'photoURL', 'isLogout', 'token', 'isInApp'],
  setup () {
    const meta = ref<Meta>({
      totalCount: 1200
    });
    
    const items = [
      { name: '好東西', price: 1000},
      { name: '棒東西', price: 2000},
      { name: '壞東西', price: 6000},
      { name: '狗東西', price: 4000},
      { name: '鳥東西', price: 10000}
    ]
    return { meta, items };
  },
  methods: {
    inCart (i) {
      if (!this.uid) {
        return false
      } else {
        var arr = (this.users[this.uid].cart || []).filter(function (o) {
          return o.name === i.name
        })
        return arr.length > 0
      }
    },
    addToCart (i) {
      this.$emit('addToCart', i)
    },
    buy () {
      this.$router.push('/checkout')
      /// 
    }
  }
});
</script>
