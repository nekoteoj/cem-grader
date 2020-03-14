var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function c(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function l(t){return document.createElement(t)}function f(){return t=" ",document.createTextNode(t);var t}function d(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){(null!=n||t.value)&&(t.value=n)}let p;function g(t){p=t}function b(){const t=function(){if(!p)throw new Error("Function called outside component initialization");return p}();return(n,e)=>{const r=t.$$.callbacks[n];if(r){const o=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);r.slice().forEach(n=>{n.call(t,o)})}}}const v=[],$=[],y=[],w=[],x=Promise.resolve();let C=!1;function O(t){y.push(t)}let E=!1;const R=new Set;function A(){if(!E){E=!0;do{for(let t=0;t<v.length;t+=1){const n=v[t];g(n),M(n.$$)}for(v.length=0;$.length;)$.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];R.has(n)||(R.add(n),n())}y.length=0}while(v.length);for(;w.length;)w.pop()();C=!1,E=!1,R.clear()}}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}const N=new Set;function _(t,n){t&&t.i&&(N.delete(t),t.i(n))}function k(t,n,e,r){if(t&&t.o){if(N.has(t))return;N.add(t),(void 0).c.push(()=>{N.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function S(t){t&&t.c()}function q(t,e,s){const{fragment:i,on_mount:u,on_destroy:a,after_update:c}=t.$$;i&&i.m(e,s),O(()=>{const e=u.map(n).filter(o);a?a.push(...e):r(e),t.$$.on_mount=[]}),c.forEach(O)}function L(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function T(t,n){-1===t.$$.dirty[0]&&(v.push(t),C||(C=!0,x.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function H(n,o,s,i,u,a,c=[-1]){const l=p;g(n);const f=o.props||{},d=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:e(),dirty:c};let m=!1;d.ctx=s?s(n,f,(t,e,...r)=>{const o=r.length?r[0]:e;return d.ctx&&u(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),m&&T(n,t)),e}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),o.target&&(o.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(o.target)):d.fragment&&d.fragment.c(),o.intro&&_(n.$$.fragment),q(n,o.target,o.anchor),A()),g(l)}class F{$destroy(){L(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function P(n){let e;return{c(){e=l("nav"),e.innerHTML='<span class="navbar-brand mb-0 h1">Comp Eng Math Grader</span>',m(e,"class","navbar navbar-expand-lg navbar-dark bg-dark")},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&a(e)}}}class U extends F{constructor(t){super(),H(this,t,null,P,s,{})}}function j(t,n,e){const r=t.slice();return r[7]=n[e],r[9]=e,r}function z(t,n,e){const r=t.slice();return r[4]=n[e],r[6]=e,r}function B(t){let n,e,r,o;function s(...n){return t[3](t[6],t[9],...n)}return{c(){n=l("td"),e=l("input"),e.value=r=t[7].toString(),m(e,"class","svelte-1wbfap7")},m(t,r){u(t,n,r),i(n,e),o=d(e,"change",s)},p(n,o){t=n,1&o&&r!==(r=t[7].toString())&&e.value!==r&&(e.value=r)},d(t){t&&a(n),o()}}}function Q(t){let n,e,r=t[4],o=[];for(let n=0;n<r.length;n+=1)o[n]=B(j(t,r,n));return{c(){n=l("tr");for(let t=0;t<o.length;t+=1)o[t].c();e=f()},m(t,r){u(t,n,r);for(let t=0;t<o.length;t+=1)o[t].m(n,null);i(n,e)},p(t,s){if(3&s){let i;for(r=t[4],i=0;i<r.length;i+=1){const u=j(t,r,i);o[i]?o[i].p(u,s):(o[i]=B(u),o[i].c(),o[i].m(n,e))}for(;i<o.length;i+=1)o[i].d(1);o.length=r.length}},d(t){t&&a(n),c(o,t)}}}function W(n){let e,r,o=n[0].data,s=[];for(let t=0;t<o.length;t+=1)s[t]=Q(z(n,o,t));return{c(){e=l("table"),r=l("tbody");for(let t=0;t<s.length;t+=1)s[t].c();m(e,"class","table table-bordered")},m(t,n){u(t,e,n),i(e,r);for(let t=0;t<s.length;t+=1)s[t].m(r,null)},p(t,[n]){if(3&n){let e;for(o=t[0].data,e=0;e<o.length;e+=1){const i=z(t,o,e);s[e]?s[e].p(i,n):(s[e]=Q(i),s[e].c(),s[e].m(r,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=o.length}},i:t,o:t,d(t){t&&a(e),c(s,t)}}}function G(t,n,e){let{matrix:r}=n;const o=b();function s(t,n,e){o("update",{row:t,col:n,fractionString:e})}return t.$set=t=>{"matrix"in t&&e(0,r=t.matrix)},[r,s,o,(t,n,e)=>s(t+1,n+1,e.target.value)]}class I extends F{constructor(t){super(),H(this,t,G,W,s,{matrix:0})}}class D{constructor(t,n=1){this.numerator=t,this.denominator=n,this.convertToLeastFraction()}static fromString(t){const n=t.split("/");if(1===n.length)return new D(Number(n[0]));const[e,r]=n;return new D(Number(e),Number(r))}convertToLeastFraction(){for(let t=Math.min(this.numerator,this.denominator);t>=2;t--)if(this.numerator%t==0&&this.denominator%t==0){this.numerator/=t,this.denominator/=t;break}this.denominator<0&&(this.denominator*=-1,this.numerator*=-1),0===this.numerator&&(this.denominator=1)}clone(){return new D(this.numerator,this.denominator)}negative(){return new D(-this.numerator,this.denominator)}inverse(){return new D(this.denominator,this.numerator)}plus(t){const n=this.numerator*t.denominator+t.numerator*this.denominator,e=this.denominator*t.denominator;return new D(n,e)}minus(t){return this.plus(t.negative())}multiply(t){const n=this.numerator*t.numerator,e=this.denominator*t.denominator;return new D(n,e)}divideBy(t){return this.multiply(t.inverse())}toString(){return 1===this.denominator?`${this.numerator}`:`${this.numerator}/${this.denominator}`}}class J{constructor(t,n,e=0){this.numberOfRow=t,this.numberOfCol=n,this.numberOfAugCol=e,this.data=[];for(let r=0;r<t;r++){this.data.push([]);for(let t=0;t<n+e;t++)this.data[r].push(new D(0))}}setEntry(t,n,e){const r=t-1,o=n-1;return this.data[r][o]=e,this}multiplyRow(t,n){const e=t-1,r=this.clone();for(let t=0;t<r.numberOfCol+r.numberOfAugCol;t++)r.data[e][t]=r.data[e][t].multiply(n);return r}swapRow(t,n){const e=t-1,r=n-1,o=this.clone();for(let t=0;t<o.numberOfCol+o.numberOfAugCol;t++){const n=o.data[e][t];o.data[e][t]=o.data[r][t],o.data[r][t]=n}return o}addMultipleOfRow(t,n,e){const r=n-1,o=e-1,s=this.clone();for(let n=0;n<s.numberOfCol+s.numberOfAugCol;n++)s.data[o][n]=s.data[o][n].plus(s.data[r][n].multiply(t));return s}clone(){const t=[];for(const n of this.data){const e=[];for(const t of n)e.push(t.clone());t.push(e)}const n=new J(this.numberOfRow,this.numberOfCol,this.numberOfAugCol);return n.data=t,n}execute(t){const n=this.clone();for(const e of t){let[t,r]=e.split(" ");const o=r.split(",");if(t=t.toUpperCase(),"MUL"===t){const[t,e]=o,r=this.multiplyRow(Number(e),D.fromString(t));for(let t=0;t<this.numberOfCol+this.numberOfAugCol;t++)n.setEntry(e,t+1,r.data[e-1][t])}else if("SWP"===t){const[t,e]=o.map(t=>Number(t)),r=this.swapRow(t,e);for(let o=0;o<this.numberOfCol+this.numberOfAugCol;o++)n.setEntry(t,o+1,r.data[t-1][o]),n.setEntry(e,o+1,r.data[e-1][o])}else if("AMR"===t){const[t,e,r]=o,s=this.addMultipleOfRow(D.fromString(t),Number(e),Number(r));for(let t=0;t<this.numberOfCol+this.numberOfAugCol;t++)n.setEntry(r,t+1,s.data[r-1][t])}}return n}}function K(t){let n,e,o,s,c,p,g,b,v,$,y,w,x,C,O,E,R,A,M,N,T,H,F,P,U,j,z,B,Q,W,G;const D=new I({props:{matrix:t[3]}});return D.$on("update",t[5]),{c(){n=l("div"),e=l("div"),o=l("div"),S(D.$$.fragment),s=f(),c=l("div"),p=l("div"),g=l("div"),b=l("div"),b.innerHTML='<span class="input-group-text" id="basic-addon1">#Row</span>',v=f(),$=l("input"),y=f(),w=l("div"),x=l("div"),x.innerHTML='<span class="input-group-text" id="basic-addon1">#Column</span>',C=f(),O=l("input"),E=f(),R=l("div"),A=l("button"),A.textContent="Initialize Matrix",M=f(),N=l("div"),T=l("div"),H=l("h5"),H.textContent="Query",F=f(),P=l("textarea"),U=f(),j=l("div"),z=l("button"),z.textContent="Execute",B=f(),Q=l("div"),Q.innerHTML='<h5 class="svelte-16ctrbc">Query instruction set</h5> \n                    <ul class="mono-font svelte-16ctrbc"><li>&quot;MUL k,r&quot;: k*Rr -&gt; Rr</li> \n                        <li>&quot;SWP r,s&quot;: Rr &lt;-&gt; Rs</li> \n                        <li>&quot;AMR k,r,s&quot;: k*Rr + Rs -&gt; Rs</li></ul>\n                    * Each query is separated by newlines.\n                ',m(o,"class","col-8"),m(b,"class","input-group-prepend"),m($,"type","text"),m($,"class","form-control"),m(g,"class","input-group mb-3 col-6"),m(x,"class","input-group-prepend"),m(O,"type","text"),m(O,"class","form-control"),m(w,"class","input-group mb-3 col-6"),m(A,"class","col-12 btn btn-success"),m(R,"class","col-12"),m(p,"class","row"),m(H,"class","svelte-16ctrbc"),m(P,"name","query"),m(P,"id","query"),m(P,"rows","5"),m(P,"class","svelte-16ctrbc"),m(T,"class","col-12"),m(z,"class","col-12 btn btn-primary"),m(j,"class","col-12"),m(Q,"class","col-12"),m(N,"class","row"),m(c,"class","col-4"),m(e,"class","row"),m(n,"class","container-fluid svelte-16ctrbc")},m(r,a){u(r,n,a),i(n,e),i(e,o),q(D,o,null),i(e,s),i(e,c),i(c,p),i(p,g),i(g,b),i(g,v),i(g,$),h($,t[1]),i(p,y),i(p,w),i(w,x),i(w,C),i(w,O),h(O,t[2]),i(p,E),i(p,R),i(R,A),i(c,M),i(c,N),i(N,T),i(T,H),i(T,F),i(T,P),h(P,t[0]),i(N,U),i(N,j),i(j,z),i(N,B),i(N,Q),W=!0,G=[d($,"input",t[7]),d(O,"input",t[8]),d(A,"click",t[4]),d(P,"input",t[9]),d(z,"click",t[6])]},p(t,[n]){const e={};8&n&&(e.matrix=t[3]),D.$set(e),2&n&&$.value!==t[1]&&h($,t[1]),4&n&&O.value!==t[2]&&h(O,t[2]),1&n&&h(P,t[0])},i(t){W||(_(D.$$.fragment,t),W=!0)},o(t){k(D.$$.fragment,t),W=!1},d(t){t&&a(n),L(D),r(G)}}}function V(t,n,e){let r="",o="4",s="4",i=new J(Number(o),Number(s));return[r,o,s,i,function(t){e(3,i=new J(Number(o),Number(s)))},function(t){const{row:n,col:r,fractionString:o}=t.detail,s=D.fromString(o);e(3,i=i.setEntry(n,r,s))},function(t){e(3,i=i.execute(r.split("\n")))},function(){o=this.value,e(1,o)},function(){s=this.value,e(2,s)},function(){r=this.value,e(0,r)}]}class X extends F{constructor(t){super(),H(this,t,V,K,s,{})}}function Y(n){let e,r;const o=new U({}),s=new X({});return{c(){S(o.$$.fragment),e=f(),S(s.$$.fragment)},m(t,n){q(o,t,n),u(t,e,n),q(s,t,n),r=!0},p:t,i(t){r||(_(o.$$.fragment,t),_(s.$$.fragment,t),r=!0)},o(t){k(o.$$.fragment,t),k(s.$$.fragment,t),r=!1},d(t){L(o,t),t&&a(e),L(s,t)}}}return new class extends F{constructor(t){super(),H(this,t,null,Y,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
