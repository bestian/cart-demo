import{u as b,a as q}from"./use-dark.105d4c9e.js";import{c as k,u as R,l as S,a as D,h as $}from"./QBtn.91abc449.js";import{r as m,h as l,j as c,a0 as w,y as A,g}from"./index.734ae426.js";var F=k({name:"QItem",props:{...b,...R,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:i,emit:r}){const{proxy:{$q:u}}=g(),o=q(e,u),{hasLink:d,linkAttrs:y,linkClass:h,linkTag:C,navigateOnClick:B}=S(),n=m(null),s=m(null),v=l(()=>e.clickable===!0||d.value===!0||e.tag==="label"),a=l(()=>e.disable!==!0&&v.value===!0),L=l(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?h.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),x=l(()=>{if(e.insetLevel===void 0)return null;const t=u.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function E(t){a.value===!0&&(s.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===n.value?s.value.focus():document.activeElement===s.value&&n.value.focus()),B(t))}function K(t){if(a.value===!0&&w(t,13)===!0){A(t),t.qKeyEvent=!0;const f=new MouseEvent("click",t);f.qKeyEvent=!0,n.value.dispatchEvent(f)}r("keyup",t)}function Q(){const t=D(i.default,[]);return a.value===!0&&t.unshift(c("div",{class:"q-focus-helper",tabindex:-1,ref:s})),t}return()=>{const t={ref:n,class:L.value,style:x.value,role:"listitem",onClick:E,onKeyup:K};return a.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,y.value)):v.value===!0&&(t["aria-disabled"]="true"),c(C.value,t,Q())}}}),N=k({name:"QList",props:{...b,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:i}){const r=g(),u=q(e,r.proxy.$q),o=l(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(u.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>c(e.tag,{class:o.value},$(i.default))}});export{N as Q,F as a};