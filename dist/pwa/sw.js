if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const r=e=>a(e,n),f={module:{uri:n},exports:o,require:r};i[n]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(s(...e),o)))}}define(["./workbox-17c5f633"],(function(e){"use strict";e.setCacheNameDetails({prefix:"cart-demo"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.429ea689.js",revision:"4d29cb2289321363c44de760be34ee81"},{url:"assets/capacitor.ff240dcd.js",revision:"f04a82086f28034e04cb4d76f0b35591"},{url:"assets/CartPage.ecb2155a.js",revision:"4615968be0a2015d36ef42870a0276b0"},{url:"assets/CheckOutPage.3de2847e.js",revision:"957190c045c7ba06a99e389cf85b76d6"},{url:"assets/CheckOutPage.a54079b5.css",revision:"85118882e4b18053ab452251d4ce7e94"},{url:"assets/css-shim-8775d9ad-556f0cc2.08197ff8.js",revision:"0abd3b0ba3a20ca96d85b184c4584f77"},{url:"assets/ErrorNotFound.93409036.js",revision:"80f723d45fff61b4188932ee72bd4d60"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/firebase.e45a932b.js",revision:"74bc92df3136923375531496142eff39"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.83be7b2f.woff2",revision:"393b5d8b3fd798486652801f3ee8c6ea"},{url:"assets/index.64ce4d58.js",revision:"9de80e442fa63e6aa26e47bbb00be4fd"},{url:"assets/index.8cce4332.css",revision:"40bbd2a8a66999f36b2213d78d25e07b"},{url:"assets/index.dc59b4ae.js",revision:"f67fdb89e5d41263a824ce197e261bab"},{url:"assets/IndexPage.ee118545.js",revision:"295826192dd05eafa6b98a3ededce87d"},{url:"assets/ionicons.00c2b506.woff",revision:"99b863497156d4478ec3489fefb3815c"},{url:"assets/ionicons.2d02d165.woff2",revision:"96f1c901c087fb64019f7665f7f8aca6"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.84ef088e.js",revision:"f8ce8af33932c3ef4ee6406760987f3a"},{url:"assets/QBtn.6e4a71d1.js",revision:"6ddd3338d75784ee2145a5451ae5f2f6"},{url:"assets/QImg.7ee6ea43.js",revision:"548c29460e7ea49fc3fffa19d2d860f8"},{url:"assets/QItemSection.bf31cc16.js",revision:"45fe7a6a4fcf22dc30368e34c53a7821"},{url:"assets/QList.00d0e96e.js",revision:"f44a967c0aa20ac977686f793c460ecd"},{url:"assets/QPage.a771854b.js",revision:"d76ba647ba5639ed623964f5f2da0ff1"},{url:"assets/shadow-css-d7d058ec-d59cb009.1456af87.js",revision:"992d1340b73c17c4ec96e4686095183b"},{url:"assets/SourcePage.3eaa34b1.js",revision:"ecb5223658bdf6c26316763d08f89d76"},{url:"assets/use-dark.908df917.js",revision:"34ca9d9f1f54ecb3ce51e25d49fd4e2c"},{url:"cart-demo/img/1.jpg",revision:"5217149b40c5de70a831208bd9c5d1d0"},{url:"cart-demo/img/2.jpg",revision:"c8a7baa59c068520b762c6a884d544f6"},{url:"cart-demo/img/3.jpg",revision:"f03efa8a2a69b9acdc5aa678f0787187"},{url:"cart-demo/img/4.jpg",revision:"245ca92067b54768c5ba37a543d8e054"},{url:"cart-demo/img/5.jpg",revision:"59b63b35f5ef689ec08a22bcef22ce7d"},{url:"cart-demo/img/icons/android-chrome-192x192.png",revision:"f588d73e0b761764e9a8346e921bb0b3"},{url:"cart-demo/img/icons/android-chrome-512x512.png",revision:"a7fd5babc67977faa8eddf4da855162f"},{url:"cart-demo/img/icons/android-chrome-maskable-192x192.png",revision:"f588d73e0b761764e9a8346e921bb0b3"},{url:"cart-demo/img/icons/android-chrome-maskable-512x512.png",revision:"a7fd5babc67977faa8eddf4da855162f"},{url:"cart-demo/img/icons/apple-touch-icon-120x120.png",revision:"9c1cbaf7404267e3bb13bca8545fd5b0"},{url:"cart-demo/img/icons/apple-touch-icon-152x152.png",revision:"f2bc062907151fa82e26e732fd80e517"},{url:"cart-demo/img/icons/apple-touch-icon-180x180.png",revision:"37f74d7bea70bfadef79baa2f7277ccd"},{url:"cart-demo/img/icons/apple-touch-icon-60x60.png",revision:"c35797f2678e131f23e5af27c80023a4"},{url:"cart-demo/img/icons/apple-touch-icon-76x76.png",revision:"aaa09af8eef39e389b1b22b18c7fdf4a"},{url:"cart-demo/img/icons/apple-touch-icon.png",revision:"37f74d7bea70bfadef79baa2f7277ccd"},{url:"cart-demo/img/icons/favicon-16x16.png",revision:"db568a68b6041680675070c789ff170e"},{url:"cart-demo/img/icons/favicon-32x32.png",revision:"b43a40bb299fdd22161611cec8d1f5f3"},{url:"cart-demo/img/icons/favicon.ico",revision:"9c1dd955f02ea19a103fcb649135a11c"},{url:"cart-demo/img/icons/manifest.json",revision:"ca9b72d123a80d2915c1292b975dfec1"},{url:"cart-demo/img/icons/msapplication-icon-144x144.png",revision:"5223daee27d73c730e9aadf060cc2242"},{url:"cart-demo/img/icons/mstile-150x150.png",revision:"509802b403ed5cd4e14d8beb82efda10"},{url:"cart-demo/img/icons/safari-pinned-tab.svg",revision:"1d9bb8e7a60dd0bbbc1f676e6deeecd0"},{url:"cart-demo/img/pizza_1.jpg",revision:"87ad6cacd9cfbff7e5e40c2b55572ba7"},{url:"cart-demo/img/pizza_2.jpg",revision:"368b0eb875a4230c9ac93ecc3b558f40"},{url:"cart-demo/img/pizza_3.jpg",revision:"faf5249e924238e40ba1d97772939663"},{url:"cart-demo/img/pizza_4.jpg",revision:"080bcb4b2026bba8861c96d126116852"},{url:"cart-demo/img/pizza_5.jpg",revision:"31468f09a6dd401b2cbe5e92679f0792"},{url:"CNAME",revision:"eaa98d307c3946e94cbecbfbb09d2d3f"},{url:"favicon.ico",revision:"9c1dd955f02ea19a103fcb649135a11c"},{url:"icons/apple-icon-120x120.png",revision:"a24b0637bc673a58b22fb905b5b18dd0"},{url:"icons/apple-icon-152x152.png",revision:"1903af651ef0d2eed72f26b85cefc1d6"},{url:"icons/apple-icon-167x167.png",revision:"5c120e00321e4ff3ccb5c67d47722b72"},{url:"icons/apple-icon-180x180.png",revision:"4e6a72f2d17a109eaa816aefae9e4b1c"},{url:"icons/apple-launch-1080x2340.png",revision:"5097fa6631ce109a5187269dd3b9e18e"},{url:"icons/apple-launch-1125x2436.png",revision:"5546f54aa4d02babf2fc5a8b2a6e66f0"},{url:"icons/apple-launch-1170x2532.png",revision:"2bf52e97f2bae0e9f4ffca57f0b4a6c6"},{url:"icons/apple-launch-1179x2556.png",revision:"678ea42e533b02304fe616c11e266231"},{url:"icons/apple-launch-1242x2208.png",revision:"adee7a38ec0ef5073a7c2ba2f3a50165"},{url:"icons/apple-launch-1242x2688.png",revision:"9b0b917aaa319ba05aff310839ce1682"},{url:"icons/apple-launch-1284x2778.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"icons/apple-launch-1290x2796.png",revision:"26e0ac09525bfa7697b2dbd01db8bfdb"},{url:"icons/apple-launch-1536x2048.png",revision:"73dcc1d5c5bf6672561934426c5e03f7"},{url:"icons/apple-launch-1620x2160.png",revision:"59b4658768ce486a20689d85302623a5"},{url:"icons/apple-launch-1668x2224.png",revision:"466fcb7b368d83cded984e0ef2ea84e1"},{url:"icons/apple-launch-1668x2388.png",revision:"b97c70febc475ec52a1e540a7958b9c0"},{url:"icons/apple-launch-2048x2732.png",revision:"0b9ba3c4bbbc93733296ad89ddc153a0"},{url:"icons/apple-launch-750x1334.png",revision:"8bfc3ed4782ee0f482768936bbf28465"},{url:"icons/apple-launch-828x1792.png",revision:"2c5c8879531f02684f415bff9d990514"},{url:"icons/favicon-128x128.png",revision:"5ab7071810504fd815746fed6c95be4e"},{url:"icons/favicon-16x16.png",revision:"97a4881c70b33b50a2aa46cdeb505705"},{url:"icons/favicon-32x32.png",revision:"11c2218920852d5d1aa3c00c93bdcfed"},{url:"icons/favicon-96x96.png",revision:"c040a5bd9ba3c37cd05460ce36ce07ad"},{url:"icons/icon-128x128.png",revision:"5ab7071810504fd815746fed6c95be4e"},{url:"icons/icon-192x192.png",revision:"194db233b0541d41246b7c589c5b0419"},{url:"icons/icon-256x256.png",revision:"20dc9918c6484eb310caebdda548cc71"},{url:"icons/icon-384x384.png",revision:"2fe7084b02b7e1d7828cbfd45127bb38"},{url:"icons/icon-512x512.png",revision:"5647f5f3c985eb6cf664adfa43209a1c"},{url:"icons/ms-icon-144x144.png",revision:"d3251184620ea35fada5f4084bd48884"},{url:"icons/safari-pinned-tab.svg",revision:"70429449e6221ab95991b7d4f8fbfeff"},{url:"img/1.jpg",revision:"5217149b40c5de70a831208bd9c5d1d0"},{url:"img/2.jpg",revision:"c8a7baa59c068520b762c6a884d544f6"},{url:"img/3.jpg",revision:"f03efa8a2a69b9acdc5aa678f0787187"},{url:"img/4.jpg",revision:"245ca92067b54768c5ba37a543d8e054"},{url:"img/5.jpg",revision:"59b63b35f5ef689ec08a22bcef22ce7d"},{url:"img/icons/android-chrome-192x192.png",revision:"f588d73e0b761764e9a8346e921bb0b3"},{url:"img/icons/android-chrome-512x512.png",revision:"a7fd5babc67977faa8eddf4da855162f"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"f588d73e0b761764e9a8346e921bb0b3"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"a7fd5babc67977faa8eddf4da855162f"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"9c1cbaf7404267e3bb13bca8545fd5b0"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"f2bc062907151fa82e26e732fd80e517"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"37f74d7bea70bfadef79baa2f7277ccd"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"c35797f2678e131f23e5af27c80023a4"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"aaa09af8eef39e389b1b22b18c7fdf4a"},{url:"img/icons/apple-touch-icon.png",revision:"37f74d7bea70bfadef79baa2f7277ccd"},{url:"img/icons/favicon-16x16.png",revision:"db568a68b6041680675070c789ff170e"},{url:"img/icons/favicon-32x32.png",revision:"b43a40bb299fdd22161611cec8d1f5f3"},{url:"img/icons/favicon.ico",revision:"9c1dd955f02ea19a103fcb649135a11c"},{url:"img/icons/manifest.json",revision:"ca9b72d123a80d2915c1292b975dfec1"},{url:"img/icons/msapplication-icon-144x144.png",revision:"5223daee27d73c730e9aadf060cc2242"},{url:"img/icons/mstile-150x150.png",revision:"509802b403ed5cd4e14d8beb82efda10"},{url:"img/icons/safari-pinned-tab.svg",revision:"1d9bb8e7a60dd0bbbc1f676e6deeecd0"},{url:"img/pizza_1.jpg",revision:"87ad6cacd9cfbff7e5e40c2b55572ba7"},{url:"img/pizza_2.jpg",revision:"368b0eb875a4230c9ac93ecc3b558f40"},{url:"img/pizza_3.jpg",revision:"faf5249e924238e40ba1d97772939663"},{url:"img/pizza_4.jpg",revision:"080bcb4b2026bba8861c96d126116852"},{url:"img/pizza_5.jpg",revision:"31468f09a6dd401b2cbe5e92679f0792"},{url:"index.html",revision:"3a436930b70936213e1a90b57ed44c73"},{url:"manifest.json",revision:"64191a4220a4eb35fd7524b665905765"},{url:"pay.html",revision:"a7d54ae9f040d515aa170d910f3277bd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
