parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jD6M":[function(require,module,exports) {

},{"./..\\fonts\\digital-7.ttf":[["digital-7.f9f2ff7c.ttf","usUF"],"usUF"]}],"gKbo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=exports.invColors=exports.colors=void 0;const e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];exports.colors=e;const t=["#000000","#de690c","#b350af","#0067ff","#ff6977","#86aab7"];exports.invColors=t;const o={FINAL_DATE:"September 24,2021",body:document.querySelector("body"),changeColorStart:document.querySelector('button[data-action="start"]'),changeColorStop:document.querySelector('button[data-action="stop"]'),timeoutIdColor:null,COLOR_DELAY:1500,days:document.querySelector('[data-value="days"]'),hours:document.querySelector('[data-value="hours"]'),mins:document.querySelector('[data-value="mins"]'),secs:document.querySelector('[data-value="secs"]'),colons:document.querySelectorAll('[data-value="colon"]'),startCount:document.querySelector('button[data-action="start-count"]'),resetCount:document.querySelector('button[data-action="reset-count"]')};exports.refs=o;
},{}],"MgTz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onStartColorChange=r,exports.onStopColorChange=e;var o=require("./source-refs");function r(){o.refs.timeoutIdColor=setInterval(()=>{let r=Math.round(Math.random()*(o.colors.length-1));o.refs.body.style.backgroundColor=`${o.colors[r]}`,o.refs.body.style.color=`${o.invColors[r]}`,o.refs.changeColorStart.style.borderColor=`${o.invColors[r]}`,o.refs.changeColorStop.style.borderColor=`${o.invColors[r]}`,o.refs.startCount.style.borderColor=`${o.invColors[r]}`,o.refs.resetCount.style.borderColor=`${o.invColors[r]}`},o.refs.COLOR_DELAY),o.refs.changeColorStart.disabled=!0}function e(){clearInterval(o.refs.timeoutIdColor),o.refs.changeColorStart.disabled=!1}
},{"./source-refs":"gKbo"}],"yCUT":[function(require,module,exports) {
"use strict";function t(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Timer=void 0;class s{constructor(s,e,i,n,o,h){t(this,"startCount",()=>{this.isActive||(this.intervalIdCountDown=setInterval(()=>{this.isActive=!0;const t=Date.now(),s=this.FIN_DATE-t,{days:e,hours:i,mins:n,secs:o}=this.getTimeComponents(s);this.daysEl.textContent=`${e}`,this.hoursEl.textContent=`${i}`,this.minsEl.textContent=`${n}`,this.secsEl.textContent=`${o}`,this.colonBlinking()},1e3))}),t(this,"stopCount",()=>{clearInterval(this.intervalIdCountDown),this.daysEl.textContent="00",this.hoursEl.textContent="00",this.minsEl.textContent="00",this.secsEl.textContent="00",this.isActive=!1}),t(this,"getTimeComponents",t=>{return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}),t(this,"pad",t=>String(t).padStart(2,"0")),t(this,"colonBlinking",()=>{this.colonEl.forEach(t=>{t.classList.contains("opacity")?t.classList.remove("opacity"):t.classList.add("opacity")})}),this.FIN_DATE=new Date(s).getTime(),this.isActive=!1,this.intervalIdCountDown=null,this.daysEl=e,this.hoursEl=i,this.minsEl=n,this.secsEl=o,this.colonEl=h}}exports.Timer=s;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./styles/styles.css");var e=require("./js/source-refs"),t=require("./js/utils"),n=require("./js/timer");const{FINAL_DATE:o,days:a,hours:s,mins:r,secs:c,colons:i}=e.refs,l=new n.Timer(o,a,s,r,c,i);window.addEventListener("DOMContentLoaded",l.startCount),e.refs.changeColorStart.addEventListener("click",t.onStartColorChange),e.refs.changeColorStop.addEventListener("click",t.onStopColorChange),e.refs.startCount.addEventListener("click",l.startCount),e.refs.resetCount.addEventListener("click",l.stopCount),console.log("Привіт, світ! Життя брутальне!");const d=e=>new Promise((t,n)=>{setTimeout(()=>{Math.random()>.5&&t(e),n(`TASK 1: З ${e}мс не склалося... ХАЛЕПА!`)},e)}),h=e=>console.log(`TASK 1: Resolved after ${e}ms`);d(2e3).then(h).catch(e=>console.warn(e)),d(1e3).then(h).catch(e=>console.warn(e)),d(1500).then(h).catch(e=>console.warn(e)),console.log("TASK 2");const m=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],u=(e,t)=>new Promise((n,o)=>{n(e.map(e=>e.name===t?{...e,active:!e.active}:e))}),v=e=>console.table(e);u(m,"Mango").then(v),u(m,"Lux").then(v);const g=e=>new Promise((t,n)=>{const o=C(200,500);setTimeout(()=>{Math.random()>.3&&t({id:e.id,time:o}),n(e.id)},o)}),C=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),w=e=>{console.log(`TASK 3: Transaction ${e.id} processed in ${e.time}ms`)},T=e=>{console.warn(`TASK 3: Error processing transaction ${e}. Please try again later.`)};g({id:70,amount:150}).then(w).catch(T),g({id:71,amount:230}).then(w).catch(T),g({id:72,amount:75}).then(w).catch(T),g({id:73,amount:100}).then(w).catch(T);
},{"./styles/styles.css":"jD6M","./js/source-refs":"gKbo","./js/utils":"MgTz","./js/timer":"yCUT"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11/src.c92c1e84.js.map