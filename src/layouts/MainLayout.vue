<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Cart Demo
        </q-toolbar-title>
        <p class="hidden">{{isLogout}}</p>
        <q-btn color="orange" v-show = "!uid" @click="loginGoogle()"><q-icon name="ion-logo-google"></q-icon>Login</q-btn>
        <q-btn color="orange" v-show = "uid" @click="logout()"><q-icon name="ion-logo-google"></q-icon>Logout</q-btn>
        <q-img loading="eager" class="avatar" v-show="photoURL" alt="photo" referrerpolicy="no-referrer" :src="photoURL" :key="photoURL"></q-img> 
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item to="/">Home</q-item>
        <q-item to="/cart">Cart</q-item>
        <q-item to="/checkout">Checkout</q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view :me="me" :uid="uid" :users="users" :email="email" :photoURL="photoURL" :token="token" @addToCart="addToCart" @removeFromCart="removeFromCart" @updateUser="updateUser"/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import InApp from 'detect-inapp';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useDatabase, useDatabaseObject, useFirebaseAuth } from 'vuefire'
import { ref as dbRef } from 'firebase/database'
import { set } from 'firebase/database'

const db = useDatabase()
const auth = useFirebaseAuth()

const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/userinfo.email')

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const inapp = new InApp(navigator.userAgent || navigator.vendor);
    const isInApp = ref(inapp.isInApp);
    const leftDrawerOpen = ref(false)
    const users = ref(useDatabaseObject(dbRef(db, 'users')))
    const me = ref({})
    const isLogout = ref<IsLogout>(true)
    const user = ref({});
    const email = ref('');
    const token = ref('');
    const uid = ref('');
    const photoURL = ref('');
    const appID = ref(127044);
    const appKey = ref('app_pENDXkVEoHhGT8DHLdyTetjnGSYaXCYPz7BDfqO9x9xWPyg4WKk9OQ0kEf5N');

    return {
      appID, appKey,
      me, users, isInApp, user, isLogout,
      email, token, uid, photoURL,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods: {
    addToCart (i) {
      if (!this.uid) {
        window.alert('Please Login at first')
      } else {
        var arr = this.users[this.uid].cart || []
        arr.push(i)
        set(dbRef(db, 'users/' + this.uid + '/cart'), arr).then(() => {
          console.log('item added')
        })
      }
    },
    removeFromCart (i) {
      if (!this.uid) {
        window.alert('Please Login at first')
      } else {
        var arr = (this.users[this.uid].cart || []).filter(function (o) {
          return o.name !== i.name
        })
        set(dbRef(db, 'users/' + this.uid + '/cart'), arr).then(() => {
          console.log('item removed')
        })
      }
    },
    updateUser (cart, logs) {
      set(dbRef(db, 'users/' + this.uid + '/cart'), cart).then(() => {
        console.log('cart updated')
      })
      set(dbRef(db, 'users/' + this.uid + '/logs'), logs).then(() => {
        console.log('logs updated')
      })
    },
    updateMe (credential, token, user) {
      this.email = user.providerData[0].email || ''
      this.token = token || ''
      this.uid = user.uid
      this.photoURL = decodeURI(user.photoURL || '')
      this.isLogout = true
      this.isLogout = false
      this.me = this.users[this.uid] || {}
      this.$forceUpdate()
    },
    loginGoogle () {
      this.isLogout = false
      if (this.isInApp) {
        window.alert('??????????????????facebook, line???app??????????????????????????????????????????????????????????????????')
      } else {
        signInWithPopup(auth, provider).then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = (credential || {accessToken: null}).accessToken
          // The signed-in user info.
          const user = result.user

          this.uid = user.uid

          console.log(this.uid)

          this.updateMe(credential, token, user)
          if (!this.users || !this.users[this.uid]) {
            set(dbRef(db, 'users/' + this.uid), {
              id: this.uid,
              email: this.email
            })
          }
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          // const email = error.customData.email;
          // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(errorCode)
          console.log(errorMessage)
        });
      }
    },
    logout () {
      this.isLogout = true;
      auth.signOut().then(() => {
        this.user = {};
        this.uid = '';
        this.photoURL = '';
        this.me = {};
        console.log('user logout')
        this.isLogout = false;
        this.isLogout = true;
        this.$forceUpdate()
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode)
        console.log(errorMessage)
      });
    }
  }
});
</script>
