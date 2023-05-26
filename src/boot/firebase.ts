import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database' 
import { getAuth } from 'firebase/auth'
import { VueFire, VueFireAuth } from 'vuefire'

// Get a Firestore instance
export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCoY777ID9SQqz7UPyjha9YRycO2Y56bZ8',
  authDomain: 'payment-demo-14e75.firebaseapp.com',
  databaseURL: 'https://payment-demo-14e75-default-rtdb.firebaseio.com',
  projectId: 'payment-demo-14e75',
  storageBucket: 'payment-demo-14e75.appspot.com',
  messagingSenderId: '202896970342',
  appId: '1:202896970342:web:45fcadb0655ffc7c0bd3a7',
  measurementId: 'G-LSNJMNJM2F'
});


export const db = getDatabase(firebaseApp)
export const auth = getAuth(firebaseApp)


// 'async' is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {  //, router
  app
    .use(VueFire, {
      // imported above but could also just be created here
      firebaseApp,
      modules: [
        // we will see other modules later on
        VueFireAuth(),
      ],
    })
})
