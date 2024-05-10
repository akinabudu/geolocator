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

eval(__webpack_require__.ts("self.addEventListener(\"deviceorientation\", (e)=>{\n// console.log(\"Service-Worker: \", e);\n// const { alpha, beta, gamma } = e;\n// if (beta && gamma && alpha) {\n//     const threshold = 170;\n//     const accelerationMagnitude = Math.sqrt(\n//         beta * beta + gamma * gamma + alpha * alpha\n//     );\n//     // const magDelta = accelerationMagnitude - prevmagnitude; // You'll need to manage prevmagnitude separately\n//     // Handle the rest of your logic here (e.g., step counting)\n//     // Note: You won't have access to React state (stepCount) directly\n//     console.log(\"Servcie-Sorker: \",accelerationMagnitude);\n// }\n}, true);\nself.addEventListener(\"install\", (event)=>{\n    console.log(\"Service worker installed\");\n});\nself.addEventListener(\"activate\", (event)=>{\n    console.log(\"Service worker activated\");\n});\nself.addEventListener(\"fetch\", (event)=>{\n// console.log(\"Fetching:\", event.request.url);\n});\nself.addEventListener(\"push\", (event)=>{\n    console.log(\"Push:\", event);\n});\nself.addEventListener(\"sync\", (event)=>{\n    console.log(\"Sync:\", event);\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                /* unsupported import.meta.webpackHot */ undefined.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd29ya2VyL2luZGV4LnRzIiwibWFwcGluZ3MiOiJBQUdBQSxLQUFLQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQ0M7QUFFMUMsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUVwQyxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLCtDQUErQztBQUMvQyxzREFBc0Q7QUFDdEQsU0FBUztBQUNULG1IQUFtSDtBQUNuSCxrRUFBa0U7QUFDbEUseUVBQXlFO0FBQ3pFLDZEQUE2RDtBQUM3RCxJQUFJO0FBQ04sR0FBRTtBQUNGRixLQUFLQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUNFO0lBRTlCQyxRQUFRQyxHQUFHLENBQUM7QUFHZDtBQUVBTCxLQUFLQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUNFO0lBQ2pDQyxRQUFRQyxHQUFHLENBQUM7QUFFZDtBQUVBTCxLQUFLQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUNFO0FBQzlCLCtDQUErQztBQUNqRDtBQUVBSCxLQUFLQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUNFO0lBQzdCQyxRQUFRQyxHQUFHLENBQUMsU0FBU0Y7QUFFdkI7QUFFQUgsS0FBS0MsZ0JBQWdCLENBQUMsUUFBUSxDQUFDRTtJQUM3QkMsUUFBUUMsR0FBRyxDQUFDLFNBQVVGO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy93b3JrZXIvaW5kZXgudHM/OWRhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgKGUpID0+IHtcblxuICAvLyBjb25zb2xlLmxvZyhcIlNlcnZpY2UtV29ya2VyOiBcIiwgZSk7XG4gIC8vIGNvbnN0IHsgYWxwaGEsIGJldGEsIGdhbW1hIH0gPSBlO1xuXG4gIC8vIGlmIChiZXRhICYmIGdhbW1hICYmIGFscGhhKSB7XG4gIC8vICAgICBjb25zdCB0aHJlc2hvbGQgPSAxNzA7XG4gIC8vICAgICBjb25zdCBhY2NlbGVyYXRpb25NYWduaXR1ZGUgPSBNYXRoLnNxcnQoXG4gIC8vICAgICAgICAgYmV0YSAqIGJldGEgKyBnYW1tYSAqIGdhbW1hICsgYWxwaGEgKiBhbHBoYVxuICAvLyAgICAgKTtcbiAgLy8gICAgIC8vIGNvbnN0IG1hZ0RlbHRhID0gYWNjZWxlcmF0aW9uTWFnbml0dWRlIC0gcHJldm1hZ25pdHVkZTsgLy8gWW91J2xsIG5lZWQgdG8gbWFuYWdlIHByZXZtYWduaXR1ZGUgc2VwYXJhdGVseVxuICAvLyAgICAgLy8gSGFuZGxlIHRoZSByZXN0IG9mIHlvdXIgbG9naWMgaGVyZSAoZS5nLiwgc3RlcCBjb3VudGluZylcbiAgLy8gICAgIC8vIE5vdGU6IFlvdSB3b24ndCBoYXZlIGFjY2VzcyB0byBSZWFjdCBzdGF0ZSAoc3RlcENvdW50KSBkaXJlY3RseVxuICAvLyAgICAgY29uc29sZS5sb2coXCJTZXJ2Y2llLVNvcmtlcjogXCIsYWNjZWxlcmF0aW9uTWFnbml0dWRlKTtcbiAgLy8gfVxufSx0cnVlKTtcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImluc3RhbGxcIiwgKGV2ZW50KSA9PiB7XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIHdvcmtlciBpbnN0YWxsZWRcIik7XG4gICAgXG4gICAgXG4gIH0pO1xuICBcbiAgc2VsZi5hZGRFdmVudExpc3RlbmVyKFwiYWN0aXZhdGVcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIHdvcmtlciBhY3RpdmF0ZWRcIik7XG5cbiAgfSk7XG4gIFxuICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLCAoZXZlbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkZldGNoaW5nOlwiLCBldmVudC5yZXF1ZXN0LnVybCk7XG4gIH0pO1xuXG4gIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcigncHVzaCcsIChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUHVzaDpcIiwgZXZlbnQpO1xuICAgIFxuICB9KTtcblxuICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ3N5bmMnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN5bmM6XCIsICBldmVudCk7XG4gIH0pO1xuXG4gIFxuICAgIFxuICBcbiAgXG4gICJdLCJuYW1lcyI6WyJzZWxmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/worker/index.ts\n"));

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