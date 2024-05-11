/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/worker/index.ts":
/*!*****************************!*\
  !*** ./src/worker/index.ts ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("self.addEventListener(\"\", (e)=>{\n// console.log(\"Service-Worker: \", e);\n// const { alpha, beta, gamma } = e;\n// if (beta && gamma && alpha) {\n//     const threshold = 170;\n//     const accelerationMagnitude = Math.sqrt(\n//         beta * beta + gamma * gamma + alpha * alpha\n//     );\n//     // const magDelta = accelerationMagnitude - prevmagnitude; // You'll need to manage prevmagnitude separately\n//     // Handle the rest of your logic here (e.g., step counting)\n//     // Note: You won't have access to React state (stepCount) directly\n//     console.log(\"Servcie-Sorker: \",accelerationMagnitude);\n// }\n}, true);\nself.addEventListener(\"install\", (event)=>{\n    console.log(\"Service worker installed\");\n});\nself.addEventListener(\"activate\", (event)=>{\n    console.log(\"Service worker activated\");\n    self.addEventListener(\"message\", (event)=>{\n        if (event.data === \"getGeolocation\") {\n            if (navigator.geolocation) {\n                navigator.geolocation.getCurrentPosition((position)=>{\n                    console.log(\"Geolocation:\", position.coords.latitude, position.coords.longitude);\n                }, (error)=>{\n                    console.error(\"Error getting geolocation:\", error.message);\n                });\n            } else {\n                console.error(\"Geolocation is not supported by this browser.\");\n            }\n        }\n    });\n});\nself.addEventListener(\"fetch\", (event)=>{\n// console.log(\"Fetching:\", event.request.url);\n});\nself.addEventListener(\"push\", (event)=>{\n    console.log(\"Push:\", event);\n});\nself.addEventListener(\"sync\", (event)=>{\n    console.log(\"Sync:\", event);\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                /* unsupported import.meta.webpackHot */ undefined.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd29ya2VyL2luZGV4LnRzIiwibWFwcGluZ3MiOiJBQUdBQSxLQUFLQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUNDO0FBRXpCLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFFcEMsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QiwrQ0FBK0M7QUFDL0Msc0RBQXNEO0FBQ3RELFNBQVM7QUFDVCxtSEFBbUg7QUFDbkgsa0VBQWtFO0FBQ2xFLHlFQUF5RTtBQUN6RSw2REFBNkQ7QUFDN0QsSUFBSTtBQUNOLEdBQUU7QUFDRkYsS0FBS0MsZ0JBQWdCLENBQUMsV0FBVyxDQUFDRTtJQUU5QkMsUUFBUUMsR0FBRyxDQUFDO0FBR2Q7QUFFQUwsS0FBS0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDRTtJQUNqQ0MsUUFBUUMsR0FBRyxDQUFDO0lBR1pMLEtBQUtDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQ0U7UUFDaEMsSUFBSUEsTUFBTUcsSUFBSSxLQUFLLGtCQUFrQjtZQUNuQyxJQUFJQyxVQUFVQyxXQUFXLEVBQUU7Z0JBQ3pCRCxVQUFVQyxXQUFXLENBQUNDLGtCQUFrQixDQUN0QyxDQUFDQztvQkFDQ04sUUFBUUMsR0FBRyxDQUFDLGdCQUFnQkssU0FBU0MsTUFBTSxDQUFDQyxRQUFRLEVBQUVGLFNBQVNDLE1BQU0sQ0FBQ0UsU0FBUztnQkFDakYsR0FDQSxDQUFDQztvQkFDQ1YsUUFBUVUsS0FBSyxDQUFDLDhCQUE4QkEsTUFBTUMsT0FBTztnQkFDM0Q7WUFFSixPQUFPO2dCQUNMWCxRQUFRVSxLQUFLLENBQUM7WUFDaEI7UUFDRjtJQUNGO0FBRUY7QUFFQWQsS0FBS0MsZ0JBQWdCLENBQUMsU0FBUyxDQUFDRTtBQUM5QiwrQ0FBK0M7QUFDakQ7QUFFQUgsS0FBS0MsZ0JBQWdCLENBQUMsUUFBUSxDQUFDRTtJQUM3QkMsUUFBUUMsR0FBRyxDQUFDLFNBQVNGO0FBRXZCO0FBRUFILEtBQUtDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQ0U7SUFDN0JDLFFBQVFDLEdBQUcsQ0FBQyxTQUFVRjtBQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvd29ya2VyL2luZGV4LnRzPzlkYTgiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCcnLCAoZSkgPT4ge1xuXG4gIC8vIGNvbnNvbGUubG9nKFwiU2VydmljZS1Xb3JrZXI6IFwiLCBlKTtcbiAgLy8gY29uc3QgeyBhbHBoYSwgYmV0YSwgZ2FtbWEgfSA9IGU7XG5cbiAgLy8gaWYgKGJldGEgJiYgZ2FtbWEgJiYgYWxwaGEpIHtcbiAgLy8gICAgIGNvbnN0IHRocmVzaG9sZCA9IDE3MDtcbiAgLy8gICAgIGNvbnN0IGFjY2VsZXJhdGlvbk1hZ25pdHVkZSA9IE1hdGguc3FydChcbiAgLy8gICAgICAgICBiZXRhICogYmV0YSArIGdhbW1hICogZ2FtbWEgKyBhbHBoYSAqIGFscGhhXG4gIC8vICAgICApO1xuICAvLyAgICAgLy8gY29uc3QgbWFnRGVsdGEgPSBhY2NlbGVyYXRpb25NYWduaXR1ZGUgLSBwcmV2bWFnbml0dWRlOyAvLyBZb3UnbGwgbmVlZCB0byBtYW5hZ2UgcHJldm1hZ25pdHVkZSBzZXBhcmF0ZWx5XG4gIC8vICAgICAvLyBIYW5kbGUgdGhlIHJlc3Qgb2YgeW91ciBsb2dpYyBoZXJlIChlLmcuLCBzdGVwIGNvdW50aW5nKVxuICAvLyAgICAgLy8gTm90ZTogWW91IHdvbid0IGhhdmUgYWNjZXNzIHRvIFJlYWN0IHN0YXRlIChzdGVwQ291bnQpIGRpcmVjdGx5XG4gIC8vICAgICBjb25zb2xlLmxvZyhcIlNlcnZjaWUtU29ya2VyOiBcIixhY2NlbGVyYXRpb25NYWduaXR1ZGUpO1xuICAvLyB9XG59LHRydWUpO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwiaW5zdGFsbFwiLCAoZXZlbnQpID0+IHtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2Ugd29ya2VyIGluc3RhbGxlZFwiKTtcbiAgICBcbiAgICBcbiAgfSk7XG4gIFxuICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJhY3RpdmF0ZVwiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2Ugd29ya2VyIGFjdGl2YXRlZFwiKTtcblxuXG4gICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGF0YSA9PT0gJ2dldEdlb2xvY2F0aW9uJykge1xuICAgICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICAgICAgICAgIChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2VvbG9jYXRpb246JywgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLCBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2V0dGluZyBnZW9sb2NhdGlvbjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0dlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBicm93c2VyLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfSk7XG4gIFxuICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLCAoZXZlbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkZldGNoaW5nOlwiLCBldmVudC5yZXF1ZXN0LnVybCk7XG4gIH0pO1xuXG4gIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcigncHVzaCcsIChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUHVzaDpcIiwgZXZlbnQpO1xuICAgIFxuICB9KTtcblxuICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ3N5bmMnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN5bmM6XCIsICBldmVudCk7XG4gIH0pO1xuXG4gIFxuICAgIFxuICBcbiAgXG4gICJdLCJuYW1lcyI6WyJzZWxmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/worker/index.ts\n"));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	!function() {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = function() {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScript: function(script) { return script; }
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script */
/******/ 	!function() {
/******/ 		__webpack_require__.ts = function(script) { return __webpack_require__.tt().createScript(script); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	!function() {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push(function(options) {
/******/ 			var originalFactory = options.factory;
/******/ 			options.factory = function(moduleObject, moduleExports, webpackRequire) {
/******/ 				var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				var cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : function() {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/worker/index.ts");
/******/ 	
/******/ })()
;