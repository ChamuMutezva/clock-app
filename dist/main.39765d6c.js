parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var e=document.querySelector(".quortes"),t=document.querySelector(".author"),n=document.querySelector(".wrapper"),o=document.querySelector(".time__zone"),r=document.querySelector(".location"),i=document.querySelector(".refresh"),c=document.querySelector('input[type="checkbox"]'),s=Array.from(document.querySelectorAll(".list__value")),a=!0,l=!0,u="",_="",d="",m="",g="",h=document.querySelector(".time__status"),p=function(){fetch("https://worldtimeapi.org/api/ip").then(function(e){return e.json()}).then(function(e){var t=document.querySelector(".greet__msg"),r=Array.from(document.querySelectorAll(".time__icon__img")),i=e.datetime.split("T"),c=i[1].split(".");u=i[0],_=c[0],d=Number(_.split(":")[0]),m=Number(_.split(":")[1]),d<=12?n.classList.remove("evening"):n.classList.add("evening"),t.innerHTML=d<5||d>=18?'Good Evening, <span class="greet__msg__hide">it\'s currently</span>':d<12?'Good Morning, <span class="greet__msg__hide">it\'s currently</span>':'Good Afternoon, <span class="greet__msg__hide">it\'s currently</span>',d>=6&&d<=17?r[0].classList.remove("hide__icon"):r[0].classList.add("hide__icon"),d>=6&&d<=17?r[1].classList.add("hide__icon"):r[1].classList.remove("hide__icon"),console.log(d),o.innerHTML=e.abbreviation,console.log(r[0]),console.log(r[1]),m=m<10?"0".concat(m):m,d=d<10?"0".concat(d):d,h.innerHTML="".concat(d,":").concat(m),s[1].innerHTML=e.day_of_year+1,s[2].innerHTML=e.day_of_week+1,s[3].innerHTML=e.week_number+1})},y=function(){gsap.set(".refresh__img",{transformOrigin:"50% 50%"}),l?gsap.to(".refresh__img",{duration:1,rotation:360}):gsap.to(".refresh__img",{duration:1,rotation:-360}),l=!l,fetch("https://api.quotable.io/random").then(function(e){return e.json()}).then(function(n){e.innerHTML=n.content,t.innerHTML=n.author})};fetch("https://freegeoip.app/json/").then(function(e){return e.json()}).then(function(e){r.innerHTML="In ".concat(e.city,", ").concat(e.country_name),s[0].innerHTML=e.time_zone}),p(),y(),i.addEventListener("click",y),setInterval(function(){p(),y()},6e4),c.addEventListener("click",function(){var e=document.querySelector(".more"),t=document.querySelector(".secondary"),n=document.querySelector(".intro"),o=document.querySelector(".time__section"),r=(document.querySelector(".slider"),document.querySelectorAll(".list__label"));"more"===e.innerHTML?e.innerHTML="less":e.innerHTML="more",console.log(e.innerHTML),n.classList.toggle("intro__out"),o.classList.toggle("time__toggle"),t.classList.toggle("hide__sec"),t.classList.toggle("dark__mode"),s.forEach(function(e){e.classList.toggle("light__mode")}),r.forEach(function(e){e.classList.toggle("light__mode")}),a?(gsap.to(".slider",{duration:1,rotation:180}),gsap.to(t,{duration:2,y:50,ease:"elastic"})):(gsap.to(".slider",{duration:1,rotation:-180}),gsap.from(t,{duration:1,x:50,ease:"back"})),a=!a});
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.39765d6c.js.map