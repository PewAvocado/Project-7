/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/banner.png"
/*!*******************************!*\
  !*** ./src/images/banner.png ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f7372aae898c63ee95e2.png";

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout(){\r\n    const content = document.querySelector('#content');\r\n    const history = document.createElement('h3');\r\n\r\n    history.textContent = 'We are open since 10am evey day';\r\n\r\n    content.appendChild(history);\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LTcvLi9zcmMvYWJvdXQuanM/YjA0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9hZEFib3V0KCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5cclxuICAgIGhpc3RvcnkudGV4dENvbnRlbnQgPSAnV2UgYXJlIG9wZW4gc2luY2UgMTBhbSBldmV5IGRheSc7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoaXN0b3J5KTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/about.js\n\n}");

/***/ },

/***/ "./src/complement.js"
/*!***************************!*\
  !*** ./src/complement.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearContent: () => (/* binding */ clearContent)\n/* harmony export */ });\nfunction clearContent() {\r\n    const content = document.querySelector('#content');\r\n    content.innerHTML = '';\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcGxlbWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LTcvLi9zcmMvY29tcGxlbWVudC5qcz9jMGNhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/complement.js\n\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _images_banner_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/banner.png */ \"./src/images/banner.png\");\n\r\n\r\n\r\nfunction loadHome() {\r\n    const banner = document.querySelector('#content');\r\n    const tittle = document.createElement('h1');\r\n    const deal = document.createElement('img');\r\n    const offer = document.createElement('h3');\r\n\r\n    tittle.textContent = \"Come check the best chicken in Lima! You are gonna lick your fingers!\";\r\n    deal.src = _images_banner_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    deal.alt = 'Banner del restaurante';\r\n    offer.textContent = 'We are the \"Chicken slayers\" restaurant';\r\n\r\n    banner.appendChild(tittle);\r\n    banner.appendChild(deal);\r\n    banner.appendChild(offer);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQztBQUMxQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtDQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC03Ly4vc3JjL2hvbWUuanM/OWZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hpY2tlbiBmcm9tICcuL2ltYWdlcy9iYW5uZXIucG5nJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XHJcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29uc3QgdGl0dGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGNvbnN0IGRlYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNvbnN0IG9mZmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuXHJcbiAgICB0aXR0bGUudGV4dENvbnRlbnQgPSBcIkNvbWUgY2hlY2sgdGhlIGJlc3QgY2hpY2tlbiBpbiBMaW1hISBZb3UgYXJlIGdvbm5hIGxpY2sgeW91ciBmaW5nZXJzIVwiO1xyXG4gICAgZGVhbC5zcmMgPSBjaGlja2VuO1xyXG4gICAgZGVhbC5hbHQgPSAnQmFubmVyIGRlbCByZXN0YXVyYW50ZSc7XHJcbiAgICBvZmZlci50ZXh0Q29udGVudCA9ICdXZSBhcmUgdGhlIFwiQ2hpY2tlbiBzbGF5ZXJzXCIgcmVzdGF1cmFudCc7XHJcblxyXG4gICAgYmFubmVyLmFwcGVuZENoaWxkKHRpdHRsZSk7XHJcbiAgICBiYW5uZXIuYXBwZW5kQ2hpbGQoZGVhbCk7XHJcbiAgICBiYW5uZXIuYXBwZW5kQ2hpbGQob2ZmZXIpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/home.js\n\n}");

/***/ },

/***/ "./src/main.js"
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _complement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complement.js */ \"./src/complement.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\r\n\r\nconst homeButton = document.querySelector('#home');\r\nconst menuButton = document.querySelector('#menu');\r\nconst aboutButton = document.querySelector('#about');\r\n\r\nhomeButton.addEventListener('click', () => {\r\n    (0,_complement_js__WEBPACK_IMPORTED_MODULE_3__.clearContent)();\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\r\n})\r\n\r\nmenuButton.addEventListener('click', () =>{\r\n    ;(0,_complement_js__WEBPACK_IMPORTED_MODULE_3__.clearContent)();\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\r\n})\r\n\r\naboutButton.addEventListener('click', () => {\r\n    ;(0,_complement_js__WEBPACK_IMPORTED_MODULE_3__.clearContent)();\r\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_2__.loadAbout)();\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxQztBQUNBO0FBQ0U7QUFDUTtBQUMvQztBQUNBLGtEQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBWTtBQUNoQixJQUFJLGtEQUFRO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFJLDZEQUFZO0FBQ2hCLElBQUksa0RBQVE7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksNkRBQVk7QUFDaEIsSUFBSSxvREFBUztBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LTcvLi9zcmMvbWFpbi5qcz84N2FjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IHsgbG9hZEFib3V0IH0gZnJvbSBcIi4vYWJvdXQuanNcIjtcclxuaW1wb3J0IHsgY2xlYXJDb250ZW50IH0gZnJvbSBcIi4vY29tcGxlbWVudC5qc1wiO1xyXG5cclxubG9hZEhvbWUoKTtcclxuXHJcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xyXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcclxuY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQnKTtcclxuXHJcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgIGxvYWRIb21lKCk7XHJcbn0pXHJcblxyXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgIGxvYWRNZW51KCk7XHJcbn0pXHJcblxyXG5hYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgbG9hZEFib3V0KCk7XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n\r\nfunction loadMenu(){\r\n    const content = document.querySelector('#content');\r\n\r\n    const menuItems = [\r\n        {name: 'Fried Chicken' , desc: 'Very delicious and tasty'},\r\n        {name: 'Meat' , desc: 'Juicy'},\r\n        {name: 'Salad' , desc: 'A perfect complement'}\r\n    ];\r\n    \r\n    menuItems.forEach((item) => {\r\n        const card = document.createElement('div');\r\n        card.classList.add('menucard');\r\n\r\n        const tittle = document.createElement('h2');\r\n        tittle.textContent = item.name;\r\n\r\n        const description = document.createElement('h4');\r\n        description.textContent = item.desc;\r\n\r\n        card.appendChild(tittle);\r\n        card.appendChild(description);\r\n\r\n        content.appendChild(card);\r\n    })\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVMseURBQXlEO0FBQ2xFLFNBQVMsNkJBQTZCO0FBQ3RDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtNy8uL3NyYy9tZW51LmpzPzVmMzIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudSgpe1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gICAgICAgIHtuYW1lOiAnRnJpZWQgQ2hpY2tlbicgLCBkZXNjOiAnVmVyeSBkZWxpY2lvdXMgYW5kIHRhc3R5J30sXHJcbiAgICAgICAge25hbWU6ICdNZWF0JyAsIGRlc2M6ICdKdWljeSd9LFxyXG4gICAgICAgIHtuYW1lOiAnU2FsYWQnICwgZGVzYzogJ0EgcGVyZmVjdCBjb21wbGVtZW50J31cclxuICAgIF07XHJcbiAgICBcclxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWVudWNhcmQnKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGl0dGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICB0aXR0bGUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzYztcclxuXHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0aXR0bGUpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgfSlcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n\n}");

/***/ }

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
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;