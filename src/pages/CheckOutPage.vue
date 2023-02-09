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
    </q-card>

    <div> {{countTotal()}} </div>

    <div>
        <label>CardView</label>
        <div id="cardview-container"></div>

        <q-btn @click="pay()">支付</q-btn>
    </div>
  </q-page>
</template>


<script lang="ts">
import { Meta } from 'components/models';
import { defineComponent, ref } from 'vue';
// import InApp from 'detect-inapp';

export default defineComponent({
  name: 'CheckOutPage',
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
  mounted () {
    var defaultCardViewStyle = {
        color: 'rgb(0,0,0)',
        fontSize: '15px',
        lineHeight: '24px',
        fontWeight: '300',
        errorColor: 'red',
        placeholderColor: '',

    }

    // 帶入第三個參數, config.isUsedCcv 為以下兩種參數代表不同意思
    // false 為 CCV 非必填
    // true 為 CCV 必填

    // 卡號輸入完畢，驗證成功後會將設定的起始位元至結束位元以 * 做遮蔽
    // 若遮蔽後，點擊到信用卡欄位做變更(輸入或刪除卡號)，會將遮蔽卡號 * 清除
    // 若結束位元超過信用卡卡號長度，會以信用卡卡號長度上限做遮蔽

    // isMaskCreditCardNumber: boolean
    // 設定是否要啟用遮蔽卡號功能
    // beginIndex: Int
    // 起始遮蔽卡號位元
    // endIndex: Int
    // 結束遮蔽卡號位元
    TPDirect.card.setup('#cardview-container', defaultCardViewStyle, { 
        isUsedCcv: true,
        // 此設定會顯示卡號輸入正確後，會顯示前六後四碼信用卡卡號
        isMaskCreditCardNumber: true,
        maskCreditCardNumberRange: {
            beginIndex: 6, 
            endIndex: 11
        }
    })

    TPDirect.card.onUpdate(function(update){
      if (update.canGetPrime) {
        console.log('good!')
      }

      /*   ... */
    })
  },
  methods: {
    countTotal () {
      var ans = 0
      for (let k = 0; k < (this.users[this.uid].cart || []).length; k++) {
        if (this.inCart(this.users[this.uid].cart[k])) {
          ans += this.users[this.uid].cart[k].price
        }
      }
      return ans
    },
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
    buy (i) {
      /// 
      console.log(i)
    },
    pay () {
      TPDirect.card.getPrime(function(result) {
          if (result.status !== 0) {
            console.error('getPrime error')
            window.alert('請輸入正確的卡號和日期與安全碼')
            return
          }
          var prime = result.card.prime
          console.log('getPrime success: ' + prime)
      })
    }
  }
});
</script>

<style type="text/css">
  #cardview-container {
    color: 'rgb(0,0,0)';
    fontSize: '15px';
    lineHeight: '24px';
    fontWeight: '300';
    errorColor: 'red';
    placeholderColor: '';
    width: 400px;
  }
</style>
