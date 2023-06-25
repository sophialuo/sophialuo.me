exports.id = 163;
exports.ids = [163];
exports.modules = {

/***/ 69163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54518);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const BUFFER = 4;
const getAnimationVars = ({ top , height , bubbleDelay , animationKeyframe , animationTime  })=>{
    if (top >= 0 && top - BUFFER < height) {
        return {
            "--bounceHeight": `-${Math.abs(top - BUFFER)}px`,
            "--bubbleDelay": `${bubbleDelay ?? 0}s`,
            "--animationKeyframe": `${animationKeyframe ?? "float"}`,
            "--animationTime": `${animationTime ?? 6}s`
        };
    } else {
        return {
            "--bounceHeight": `-${height}px`,
            "--bubbleDelay": `${bubbleDelay ?? 0}s`,
            "--animationKeyframe": `${animationKeyframe ?? "float"}`,
            "--animationTime": `${animationTime ?? 6}s`
        };
    }
};
const Bubble = ({ top , left , width , height , position , bubbleDelay , animationKeyframe , animationTime  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "secondary bubble",
        style: {
            position: position ?? "absolute",
            top,
            left,
            width,
            height,
            ...getAnimationVars({
                top,
                height,
                bubbleDelay,
                animationKeyframe,
                animationTime
            })
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bubble);


/***/ }),

/***/ 54518:
/***/ (() => {



/***/ })

};
;