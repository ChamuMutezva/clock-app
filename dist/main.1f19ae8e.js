// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var quortes = document.querySelector(".quortes");
var author = document.querySelector(".author");
var wrapper = document.querySelector(".wrapper");
var time__zone = document.querySelector(".time__zone");
var located = document.querySelector(".location");
var refresh = document.querySelector(".refresh");
var toggleSwitch = document.querySelector('input[type="checkbox"]');
var list__values = Array.from(document.querySelectorAll(".list__value"));
var flip = true; //console.log(list__values[0])

var current__date = "";
var current__time = "";
var hours = "";
var min = "";
var time__abbr = "";
var time__status = document.querySelector(".time__status"); //console.log(quortes)

var timeApi = function timeApi() {
  fetch('https://worldtimeapi.org/api/ip') //'https://worldtimeapi.org/api/ip'
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    // console.log(data)
    //  console.log(data.datetime)
    var greet__msg = document.querySelector(".greet__msg");
    var greet__img = Array.from(document.querySelectorAll(".time__icon__img"));
    var date__arr = data.datetime.split("T");
    var time__arr = date__arr[1].split(".");
    current__date = date__arr[0];
    current__time = time__arr[0];
    hours = Number(current__time.split(":")[0]);
    min = Number(current__time.split(":")[1]);
    /*   console.log(greet__img)
       console.log(current__date)
       console.log(time__arr)
       console.log(current__time)
       console.log(min)
       console.log(Number(hours)) */
    //  greet__img[1].classList.add("hide__icon")

    hours <= 12 ? wrapper.classList.remove("evening") : wrapper.classList.add("evening");
    hours < 5 || hours >= 18 ? greet__msg.innerHTML = "Good Evening, <span class=\"greet__msg__hide\">it's currently</span>" : hours < 12 ? greet__msg.innerHTML = "Good Morning, <span class=\"greet__msg__hide\">it's currently</span>" : greet__msg.innerHTML = "Good Afternoon, <span class=\"greet__msg__hide\">it's currently</span>";
    hours >= 6 && hours <= 17 ? greet__img[0].classList.remove("hide__icon") : greet__img[0].classList.add("hide__icon");
    hours >= 6 && hours <= 17 ? greet__img[1].classList.add("hide__icon") : greet__img[1].classList.remove("hide__icon");
    console.log(hours);
    time__zone.innerHTML = data.abbreviation;
    console.log(greet__img[0]);
    console.log(greet__img[1]);
    min = min < 10 ? "0".concat(min) : min;
    hours = hours < 10 ? "0".concat(hours) : hours;
    time__status.innerHTML = "".concat(hours, ":").concat(min);
    list__values[1].innerHTML = data.day_of_year + 1;
    list__values[2].innerHTML = data.day_of_week + 1;
    list__values[3].innerHTML = data.week_number + 1;
  });
};

var reFreshQuortes = function reFreshQuortes() {
  fetch('https://api.quotable.io/random') // fetch('https://programming-quotes-api.herokuapp.com/')
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    //  console.log(data)
    // console.log(`${data.content} —${data.author}`)
    quortes.innerHTML = data.content;
    author.innerHTML = data.author;
  });
};

fetch('https://freegeoip.app/json/').then(function (response) {
  return response.json();
}).then(function (data) {
  //  console.log(data)
  //  console.log(data.time_zone)
  located.innerHTML = "In ".concat(data.city, ", ").concat(data.country_name);
  list__values[0].innerHTML = data.time_zone;
});
timeApi();
reFreshQuortes();
refresh.addEventListener("click", reFreshQuortes);
setInterval(function () {
  //  console.log("counter")
  timeApi();
  reFreshQuortes();
}, 60000);
toggleSwitch.addEventListener("click", function () {
  var more = document.querySelector(".more");
  var secondary = document.querySelector(".secondary");
  var toggle__intro = document.querySelector(".intro");
  var time__section = document.querySelector(".time__section");
  var slider = document.querySelector(".slider");
  var list__label = document.querySelectorAll(".list__label");
  more.innerHTML === "more" ? more.innerHTML = "less" : more.innerHTML = "more";
  console.log(more.innerHTML);
  toggle__intro.classList.toggle("intro__out");
  time__section.classList.toggle("time__toggle");
  secondary.classList.toggle("hide__sec"); // gsap.set(".slider", { transformOrigin: "50% 50%"})

  list__values.forEach(function (item) {
    item.classList.toggle("light__mode");
  });

  if (flip) {
    gsap.to(".slider", {
      duration: 1,
      rotation: 180
    });
    gsap.to(secondary, {
      duration: 2,
      y: 50,
      ease: "elastic"
    });
  } else {
    gsap.to(".slider", {
      duration: 1,
      rotation: -180
    }); // gsap.from(secondary, {duration: 2, y: -50, ease: "back"})

    gsap.from(secondary, {
      duration: 3,
      y: 100,
      opacity: 0,
      scale: 0.5
    });
  }

  flip = !flip;
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50839" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map