parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var e=document.querySelector(".quortes"),o=document.querySelector(".author"),n=document.querySelector(".wrapper"),t=document.querySelector(".time__zone"),r=document.querySelector(".location"),c=document.querySelector(".refresh"),i=document.querySelector('input[type="checkbox"]'),u=Array.from(document.querySelectorAll(".list__value"));console.log(u[0]);var l="",s="",a="",g="",m="",d=document.querySelector(".time__status");console.log(e);var h=function(){fetch("http://worldtimeapi.org/api/ip").then(function(e){return e.json()}).then(function(e){console.log(e),console.log(e.datetime);var o=document.querySelector(".greet__msg"),r=document.querySelector(".time__icon__img"),c=e.datetime.split("T"),i=c[1].split(".");l=c[0],s=i[0],hours=Number(s.split(":")[0]),g=Number(s.split(":")[1]),console.log(r),console.log(l),console.log(i),console.log(s),console.log(g),console.log(Number(hours)),hours<=12?n.classList.remove("evening"):n.classList.add("evening"),hours<=12?o.innerHTML="Good Morning":hours<=18?o.innerHTML="Good Afternoon":o.innerHTML="Good Evening",!(hours>=6&&hours<=17)||(r.src="./assets/desktop/icon-sun.svg"),t.innerHTML=e.abbreviation,g=g<10?"0".concat(g):g,hours=hours<10?"0".concat(hours):hours,d.innerHTML="".concat(hours,":").concat(g),u[1].innerHTML=e.day_of_year+1,u[2].innerHTML=e.day_of_week+1,u[3].innerHTML=e.week_number+1})},_=function(){fetch("https://api.quotable.io/random").then(function(e){return e.json()}).then(function(n){console.log(n),e.innerHTML=n.content,o.innerHTML=n.author})};fetch("https://freegeoip.app/json/").then(function(e){return e.json()}).then(function(e){console.log(e),console.log(e.time_zone),r.innerHTML="In ".concat(e.city,", ").concat(e.country_name),u[0].innerHTML=e.time_zone}),h(),_(),c.addEventListener("click",_),setInterval(function(){console.log("counter"),h(),_()},6e4),i.addEventListener("click",function(){console.log("toggle button clicked");var e=document.querySelector(".intro"),o=document.querySelector(".time__section");e.classList.toggle("intro__out"),o.classList.toggle("time__toggle")});
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.69a2be8e.js.map