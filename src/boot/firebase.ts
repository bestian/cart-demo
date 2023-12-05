import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { VueFire, VueFireAuth } from 'vuefire';

// Get a Firestore instance
export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyADI3q1K1tKzsjPstpJoeDS9tRQpeidaOo',
  authDomain: 'cart-demo-f2340.firebaseapp.com',
  databaseURL: 'https://cart-demo-f2340-default-rtdb.firebaseio.com',
  projectId: 'cart-demo-f2340',
  storageBucket: 'cart-demo-f2340.appspot.com',
  messagingSenderId: '1055844402423',
  appId: '1:1055844402423:web:a42ceee1fa2dfb96ddfff2',
  measurementId: 'G-YZD66T2PR1',
});

export const db = getDatabase(firebaseApp);
export const auth = getAuth(firebaseApp);

// 'async' is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  //, router
  app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  });
});
