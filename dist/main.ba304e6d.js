parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var e=document.querySelector(".quortes"),n=document.querySelector(".author"),t=document.querySelector(".wrapper"),o=document.querySelector(".time__zone"),r=document.querySelector(".location"),c=document.querySelector(".refresh"),i=document.querySelector('input[type="checkbox"]'),u=Array.from(document.querySelectorAll(".list__value")),s="",a="",l="",d="",_="",m=document.querySelector(".time__status"),h=function(){fetch("http://worldtimeapi.org/api/ip").then(function(e){return e.json()}).then(function(e){var n=document.querySelector(".greet__msg"),r=Array.from(document.querySelectorAll(".time__icon__img"));console.log(r);var c=e.datetime.split("T"),i=c[1].split(".");s=c[0],a=i[0],hours=Number(a.split(":")[0]),d=Number(a.split(":")[1]),hours<=12?t.classList.remove("evening"):t.classList.add("evening"),hours<=12?n.innerHTML="Good Morning":hours<=18?n.innerHTML="Good Afternoon":n.innerHTML="Good Evening",hours>=6&&hours<=17?r[0].classList.remove("hide__icon")&&r[1].classList.add("hide__icon"):r[0].classList.add("hide__icon")&&r[1].classList.remove("hide__icon"),o.innerHTML=e.abbreviation,console.log(r),d=d<10?"0".concat(d):d,hours=hours<10?"0".concat(hours):hours,m.innerHTML="".concat(hours,":").concat(d),u[1].innerHTML=e.day_of_year+1,u[2].innerHTML=e.day_of_week+1,u[3].innerHTML=e.week_number+1})},y=function(){fetch("https://api.quotable.io/random").then(function(e){return e.json()}).then(function(t){e.innerHTML=t.content,n.innerHTML=t.author})};fetch("https://freegeoip.app/json/").then(function(e){return e.json()}).then(function(e){r.innerHTML="In ".concat(e.city,", ").concat(e.country_name),u[0].innerHTML=e.time_zone}),h(),y(),c.addEventListener("click",y),setInterval(function(){h(),y()},6e4),i.addEventListener("click",function(){var e=document.querySelector(".secondary"),n=document.querySelector(".intro"),t=document.querySelector(".time__section");n.classList.toggle("intro__out"),t.classList.toggle("time__toggle"),e.classList.toggle("hide__sec")});
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.ba304e6d.js.map