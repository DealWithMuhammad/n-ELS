"use strict";
exports.id = 672;
exports.ids = [672];
exports.modules = {

/***/ 3672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5335);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6778);
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(989);
/* harmony import */ var videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);







const options = {
    controls: true,
    bigPlayButton: false,
    loop: false,
    width: 640,
    height: 400,
    plugins: {
        record: {
            audio: true,
            video: true,
            maxLength: 2 * 60,
            displayMilliseconds: false
        }
    }
};
const VideoApply = ()=>{
    const inputDeviceIdIndex = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(0);
    const { 0: file , 1: setFile  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: statusForm , 1: setStatusForm  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (true) {
            return;
        }
        console.log("running useEffect record");
        const player = video_js__WEBPACK_IMPORTED_MODULE_1___default()("myVideo", options, function() {
            const msg = "Using video.js " + (video_js__WEBPACK_IMPORTED_MODULE_1___default().VERSION) + " with videojs-record " + video_js__WEBPACK_IMPORTED_MODULE_1___default().getPluginVersion("record") + " and recordrtc " + (recordrtc__WEBPACK_IMPORTED_MODULE_2___default().version);
            video_js__WEBPACK_IMPORTED_MODULE_1___default().log(msg);
        });
        function setDeviceId(deviceId) {
            player.record().setVideoInput(deviceId);
        }
        // Handlers
        // enumerate devices once
        player.one("deviceReady", function() {
            player.record().enumerateDevices();
        });
        player.on("enumerateReady", function() {
            const devices = player.record().devices;
            // Filter out video input devices
            const videoInputDevices = devices.filter(({ kind  })=>kind === "videoinput"
            );
            // change video input device
            setDeviceId(videoInputDevices[inputDeviceIdIndex.current].deviceId);
            console.log(videoInputDevices);
        });
        // error handling
        player.on("deviceError", function() {
            console.log("device error:", player.deviceErrorCode);
        });
        player.on("error", function(element, error) {
            console.error(error);
        });
        // user clicked the record button and started recording
        player.on("startRecord", function() {
            console.log("started recording!");
        });
        // user completed recording
        player.on("finishRecord", async function() {
            console.log("finished recording");
            console.log({
                stream: player.recordedData
            });
            setFile(player.recordedData);
        });
        // monitor stream data during recording
        player.on("timestamp", function() {
        });
        return ()=>{
            player.dispose();
        };
    }, []);
    const handleSubmit = async ()=>{
        console.log("file", file);
        console.log("email", email);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("email", email);
        setIsLoading(true);
        try {
            const response = await fetch("/api/video", {
                method: "POST",
                body: formData
            });
            const result = await response.json();
            console.log("result", result);
            setStatusForm("success");
        } catch (error) {
            console.log("error", error);
        }
        setIsLoading(false);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border p-10 rounded-xl shadow-2xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                id: "myVideo",
                playsInline: true,
                className: "video-js vjs-default-skin mx-auto"
            }),
            statusForm === "success" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        viewBox: "0 0 24 24",
                        className: "text-green-600 w-16 h-16 mx-auto my-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fill: "currentColor",
                            d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "md:text-2xl text-base text-gray-900 font-semibold text-center",
                                children: "Submit done!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-600 my-2",
                                children: "Thank you. Our staff will call you soon"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: " Have a great day! "
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex mt-5 mx-auto justify-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "email",
                        className: "mr-5 text-purple-900 font-medium text-sm mt-5",
                        children: "Enter Email *"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        id: "email",
                        type: "email",
                        name: "email",
                        placeholder: "Email",
                        className: "w-1/2 p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none",
                        required: true,
                        onChange: (e)=>setEmail(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        onClick: handleSubmit,
                        className: "text-lg ml-2 font-semibold text-purple-900 bg-yellow-500 leading-normal inline-flex items-center justify-center px-8 py-2 duration-300 ease-in-out rounded-full outline-none hover:bg-yellow-600",
                        children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "loading-circle animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6 mr-2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Processing..."
                                })
                            ]
                        }) : "Submit"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoApply);


/***/ })

};
;