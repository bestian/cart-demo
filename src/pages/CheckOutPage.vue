<template>
  <q-page>
    <q-list bordered separator>
      <q-item clickable v-ripple class="my-card" v-for="(i, k) in items" :key="k" v-show="inCart(i)">
        <q-item-section>
        {{ i.name }}($NT{{ i.price }})</q-item-section>
      </q-item>
    </q-list>

    <br/>

    <div> 總金額：$NT{{countTotal()}} </div>

    <br/>

    <!-- <div>
        <label>付款資訊</label>

        <div id='cardview-container'></div>
         <q-form
            class="q-gutter-md"
          >

            <q-field>
              <q-input
                filled
                v-model="name"
                label="您的姓名 *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
              <q-input
                filled
                v-model="phone"
                label="您的手機號碼 *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
              <q-input
                filled
                v-model="email1"
                label="您的Email *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
            </q-field>


            <q-field>
              <q-input
                filled
                v-model="addr"
                label="您的地址 *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
              <q-input
                filled
                v-model="zip"
                label="郵遞區號 *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
              <q-input
                filled
                v-model="id"
                label="您的身份證字號 *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
            </q-field>

            <div>
              <q-btn label="送出" color="primary" @click="pay()"/>
            </div>
          </q-form>
    </div> -->
    <q-btn label="送出" color="primary" @click="ecpay()"/>
    <div v-html = "form" v-show="form"></div>
  </q-page>
</template>


<script lang='ts'>
import { Meta } from 'components/models';
import { defineComponent, ref } from 'vue';
import { axios } from 'boot/axios'
// import InApp from 'detect-inapp';

export default defineComponent({
  name: 'CheckOutPage',
  props: ['me', 'users', 'uid', 'email', 'photoURL', 'isLogout', 'token', 'isInApp'],
  setup () {
    const meta = ref<Meta>({
      totalCount: 1200
    });

    const name = ref('')
    const phone = ref('')
    const email1 = ref('')
    const addr = ref('')
    const zip = ref('')
    const id = ref('')
    const form = ref('')
    
    const items = [
      { name: '好東西', price: 1000},
      { name: '棒東西', price: 2000},
      { name: '壞東西', price: 6000},
      { name: '狗東西', price: 4000},
      { name: '鳥東西', price: 10000}
    ]
    return { form, meta, items, name, phone, email1, addr, zip, id };
  },
  mounted () {
    /* var defaultCardViewStyle = {
        color: 'rgb(0,0,0)',
        fontSize: '15px',
        lineHeight: '24px',
        fontWeight: '300',
        errorColor: 'red',
        placeholderColor: '',

    } */

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
    /* TPDirect.card.setup('#cardview-container', defaultCardViewStyle, { 
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

    }) */
  },
  methods: {
    countTotal () {
      var ans = 0
      if (!this.uid || !this.users[this.uid]) {
        return 0
      }
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
    ecpay () {
      window.location = ('https://6093qyw829.execute-api.us-east-1.amazonaws.com/pay?des=EcpayPay_Test&name=Good_Items&amount=' + this.countTotal()
      )
    },
    pay () {
      if (!this.name || !this.email1 || !this.phone || !this.addr || !this.zip || !this.id) {
        window.alert('請輸入完整的付款資訊')
        return
      }
      TPDirect.card.getPrime((result) => {
          if (result.status !== 0) {
            console.error('getPrime error')
            window.alert('請輸入正確的卡號和日期與安全碼')
            return
          }
          var prime = result.card.prime
          console.log(result)
          console.log('getPrime success: ' + prime)
          axios.post('https://cart-demo.bestianhelp.workers.dev/', {
              'prime': prime,
              'details':'TapPay Test',
              'amount': this.countTotal(),
              'cardholder': {
                  'phone_number': this.phone,
                  'name': this.name,
                  'email': this.email1,
                  'zip_code': this.zip,
                  'address': this.addr,
                  'national_id': this.id
              },
              'remember': true
          }, {
            headers: {
              'content-type': 'text/json'
            }
          })
        .then((response) => {
          console.log(response);
          if (response.data.msg == 'Success') {
            var logs = (this.users[this.uid].logs || []).concat(this.users[this.uid].cart)
            var cart = []
            this.$emit('updateUser', cart, logs)
            window.alert('交易成功')
          } else {
            window.alert('交易失敗，請聯絡客服人員')
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      })
    }
  }
});
</script>

<style type='text/css'>
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
