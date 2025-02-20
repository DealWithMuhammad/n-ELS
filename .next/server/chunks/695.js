"use strict";
exports.id = 695;
exports.ids = [695];
exports.modules = {

/***/ 899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);


const customLoader = ({ src , width , quality  })=>{
    return `${src}?w=${width}&q=${quality || 75}`;
};
const CustomImage = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
        loader: customLoader,
        ...props,
        alt: ""
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomImage);


/***/ }),

/***/ 7871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./hooks/useScreenSize.js
var useScreenSize = __webpack_require__(5344);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
;// CONCATENATED MODULE: ./components/form/index.js


const Form = ({ title , handleSubmit , handleChangeForm , isLoading , status  })=>{
    const { formatMessage: f  } = (0,external_react_intl_.useIntl)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "mb-2 text-xl font-semibold sm:text-center sm:mb-2 sm:text-2xl",
                children: title
            }),
            status === "success" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        viewBox: "0 0 24 24",
                        className: "text-green-600 w-16 h-16 mx-auto my-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fill: "currentColor",
                            d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "md:text-2xl text-base text-gray-900 font-semibold text-center",
                                children: f({
                                    id: "Form.SubmitDone",
                                    defaultMessage: "Submit done!"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-gray-600 my-2",
                                children: f({
                                    id: "Form.ThankYou",
                                    defaultMessage: "Thank you. Our staff will call you soon"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    " ",
                                    f({
                                        id: "Form.HaveAGreatDay",
                                        defaultMessage: "Have a great day!"
                                    }),
                                    " "
                                ]
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-1 sm:mb-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "fullName",
                                className: "inline-block mb-1 font-medium",
                                children: f({
                                    id: "Form.FullName",
                                    defaultMessage: "Full Name"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                placeholder: f({
                                    id: "Form.FullName",
                                    defaultMessage: "Full Name"
                                }),
                                type: "text",
                                className: "flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline",
                                id: "fullName",
                                name: "fullName",
                                onChange: handleChangeForm
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-1 sm:mb-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                htmlFor: "phoneNumber",
                                className: "inline-block mb-1 font-medium",
                                children: [
                                    f({
                                        id: "Form.Phone",
                                        defaultMessage: "Phone"
                                    }),
                                    " ",
                                    "*"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                placeholder: f({
                                    id: "Form.Phone",
                                    defaultMessage: "Phone"
                                }),
                                required: true,
                                type: "text",
                                className: "flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline",
                                id: "phoneNumber",
                                name: "phoneNumber",
                                onChange: handleChangeForm
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-3 mb-2 sm:mb-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            className: "inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-bluesky-900 hover:bg-bluesky-900 focus:shadow-outline focus:outline-none",
                            children: isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "animate-spin h-5 w-5 mr-3 ...",
                                        viewBox: "0 0 24 24"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            " ",
                                            f({
                                                id: "Form.Processing",
                                                defaultMessage: "Processing"
                                            }),
                                            "..."
                                        ]
                                    })
                                ]
                            }) : f({
                                id: "Form.SendMessage",
                                defaultMessage: "Send message"
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_form = (Form);

// EXTERNAL MODULE: ./hooks/useOutsideClick.js
var useOutsideClick = __webpack_require__(5806);
// EXTERNAL MODULE: ./components/custom-image/index.js
var custom_image = __webpack_require__(899);
;// CONCATENATED MODULE: ./components/popup/index.js






function Popup({ showModal , onClose , type ="School" , title  }) {
    const { 0: form , 1: setForm  } = (0,external_react_.useState)({
    });
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { 0: statusForm , 1: setStatusForm  } = (0,external_react_.useState)();
    const wrapperRef = (0,external_react_.useRef)(null);
    const handleChangeForm = (e)=>{
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data = {
            ...form,
            type: type,
            submittedAt: (0,external_date_fns_.format)(Date.now(), "HH:mm:ss dd-MM-yyyy")
        };
        setIsLoading(true);
        try {
            const response = await fetch("/api/sheet", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const result = await response.json();
            console.log("result", result);
            setStatusForm("success");
        } catch (error) {
            console.log("error");
        }
        setIsLoading(false);
    };
    const handleCloseForm = ()=>{
        setStatusForm();
        onClose && onClose();
    };
    (0,useOutsideClick/* useOutsideClick */.O)(wrapperRef, ()=>{
        if (showModal) {
            handleCloseForm();
        }
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: showModal ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative w-full sm:w-2/5 my-6 mx-auto max-w-6xl",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            id: "box-modal",
                            ref: wrapperRef,
                            className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex items-start justify-center p-5 pb-0 rounded-t",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(custom_image/* default */.Z, {
                                                src: "/images/logo.png",
                                                alt: "Logo",
                                                width: 80,
                                                height: 80
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            onClick: handleCloseForm,
                                            className: "absolute",
                                            style: {
                                                top: "10px",
                                                right: "20px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-2xl font-semibold",
                                                children: "\xd7"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative px-12 py-4 flex-auto sm:px-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_form, {
                                        handleChangeForm: handleChangeForm,
                                        handleSubmit: handleSubmit,
                                        isLoading: isLoading,
                                        status: statusForm,
                                        title: title
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "opacity-25 fixed inset-0 z-40 bg-black w-100 h-100"
                })
            ]
        }) : null
    }));
};

;// CONCATENATED MODULE: ./components/call-action/index.js





const CallAction = ()=>{
    const { formatMessage: f  } = (0,external_react_intl_.useIntl)();
    const { 0: showModal , 1: setShowModal  } = (0,external_react_.useState)(false);
    const { isMobile  } = (0,useScreenSize/* useScreenSize */.e)();
    const handleClick = ()=>{
        setShowModal(true);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `fixed right-0 mr-6 sm:mr-8 mb-8 sm:mb-16 z-10`,
                style: {
                    bottom: "120px"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "bg-white text-primary-100 rounded-full sm:rounded-3xl shadow-md px-2 py-2 sm:px-6 sm:py-3 cursor-pointer mb-1",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-col justify-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "tel:0818700990",
                                children: isMobile ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "mx-auto h-10 w-10",
                                    width: "44",
                                    height: "44",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: "1.5",
                                    stroke: "currentColor",
                                    fill: "none",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            stroke: "none",
                                            d: "M0 0h24v24H0z",
                                            fill: "none"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text-center",
                                            children: [
                                                " ",
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "mx-auto h-9 w-9",
                                                    width: "44",
                                                    height: "44",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: "1.5",
                                                    stroke: "currentColor",
                                                    fill: "none",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            stroke: "none",
                                                            d: "M0 0h24v24H0z",
                                                            fill: "none"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        "+60 19757 6113"
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "triangle hidden sm:block"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `fixed-register`,
                onClick: handleClick,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `bg-primary-100 text-white rounded-full sm:rounded-3xl shadow-md px-2 py-2 cursor-pointer sm:px-6`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "mx-auto h-10 w-10",
                                    width: "44",
                                    height: "44",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: "1.5",
                                    stroke: "currentColor",
                                    fill: "none",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            stroke: "none",
                                            d: "M0 0h24v24H0z",
                                            fill: "none"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x1: "13.5",
                                            y1: "6.5",
                                            x2: "17.5",
                                            y2: "10.5"
                                        })
                                    ]
                                }),
                                !isMobile && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: f({
                                        id: "Form.ConsultationRegister",
                                        defaultMessage: "Consultation Register"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "triangle2 hidden sm:block"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Popup, {
                showModal: showModal,
                onClose: ()=>setShowModal(false)
                ,
                title: f({
                    id: "Form.ConsultationRegister",
                    defaultMessage: "Consultation Register"
                }),
                type: "Consultation"
            })
        ]
    }));
};
/* harmony default export */ const call_action = (CallAction);

// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(4780);
var script_default = /*#__PURE__*/__webpack_require__.n(script_);
;// CONCATENATED MODULE: ./components/facebook/index.js

/* eslint-disable @next/next/inline-script-id */ 
const Facebook = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "fb-customer-chat",
                className: "fb-customerchat"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                children: `
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id","430784860266681");
            chatbox.setAttribute("attribution", "biz_inbox");
      
            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v12.0'
              });
            };
      
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        `
            })
        ]
    }));
};
/* harmony default export */ const facebook = (Facebook);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/footer/index.js




function Footer() {
    const { formatMessage: f  } = (0,external_react_intl_.useIntl)();
    const year = (0,external_date_fns_.getYear)(new Date());
    const WEBSITE_LINKS = [
        {
            title: f({
                id: "Home.Teachers",
                defaultMessage: "Teachers"
            }),
            slug: "teachers",
            path: "/teachers"
        },
        {
            title: f({
                id: "Home.OurGallery",
                defaultMessage: "Our Gallery"
            }),
            slug: "gallery",
            path: "/gallery"
        },
        {
            title: f({
                id: "Home.EducationProgram",
                defaultMessage: "Education Program"
            }),
            slug: "programs",
            path: "/programs"
        },
        {
            title: f({
                id: "Home.NewsAndEvents",
                defaultMessage: "News and Events"
            }),
            slug: "posts",
            path: "/posts"
        },
        {
            title: f({
                id: "Home.Parent",
                defaultMessage: "Parent"
            }),
            slug: "parents",
            path: "/parents"
        }, 
    ];
    const PROGRAM_LINKS = [
        {
            title: f({
                id: "Home.Kindergarten",
                defaultMessage: "Kindergarten"
            }),
            href: "/programs/kindergarten"
        },
        {
            title: f({
                id: "Home.PrimarySchool",
                defaultMessage: "Primary School"
            }),
            href: "/programs/primary"
        },
        {
            title: f({
                id: "Home.Secondary",
                defaultMessage: "Secondary"
            }),
            href: "/programs/secondary"
        }, 
    ];
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "px-4 pt-16 space-y-8 bg-yellow-100 divide-y sm:pt-20 sm:px-6 lg:px-8 divide-purple-400/20",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid mx-auto gap-y-8 sm:gap-y-12 sm:gap-x-8 md:gap-x-12 sm:max-w-none lg:max-w-screen-3xl sm:grid-cols-2 lg:grid-cols-11 lg:gap-8 xl:gap-12",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col lg:mx-auto lg:col-span-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex-grow-0 flex-shrink-0 w-60",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/logo.png",
                                                alt: "ELS",
                                                className: "h-20"
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/cie-logo.png",
                                    className: "h-24",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full mt-5 lg:mt-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex justify-start space-x-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                width: "48",
                                                height: "48",
                                                viewBox: "0 0 48 48",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "24",
                                                        cy: "24",
                                                        r: "20",
                                                        fill: "#3B5998"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z",
                                                        fill: "white"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                width: "48",
                                                height: "48",
                                                viewBox: "0 0 48 48",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "24",
                                                        cy: "24",
                                                        r: "20",
                                                        fill: "#1DA1F2"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z",
                                                        fill: "white"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-shrink sm:order-4 lg:order-none lg:col-span-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "relative text-xl font-bold tracking-wide text-primary-100",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "relative z-20 border-dashed border-b-2 border-primary-100",
                                    children: f({
                                        id: "Home.WebsiteLinks",
                                        defaultMessage: "Website Links"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "mt-6 text-lg",
                                children: WEBSITE_LINKS.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: " pt-2 font-medium text-purple-700 duration-300 ease-in-out hover:text-purple-600 ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: item.path,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: item.title
                                            })
                                        })
                                    }, `footer-${item.title}`)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-shrink sm:order-3 lg:order-none lg:col-span-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "relative text-xl font-bold tracking-wide text-primary-100",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "relative z-20 border-dashed border-b-2 border-primary-100",
                                    children: f({
                                        id: "Home.EducationProgram",
                                        defaultMessage: "Education Program"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "mt-6 text-lg",
                                children: PROGRAM_LINKS.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: " pt-2 font-medium text-purple-700 duration-300 ease-in-out hover:text-purple-600 ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: item.href,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                children: [
                                                    " ",
                                                    item.title,
                                                    " "
                                                ]
                                            })
                                        })
                                    }, item.title)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sm:order-2 lg:order-none lg:col-span-3 lg:mx-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/contact",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "relative text-xl font-bold tracking-wide text-primary-100",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "relative z-20 border-dashed border-b-2 border-primary-100",
                                            children: f({
                                                id: "Home.ContactUs",
                                                defaultMessage: "Contact us"
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "flex flex-col mt-6 space-y-5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "flex flex-shrink max-w-xs",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://goo.gl/maps/CgmybxdDH9Tv8oz5A",
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: " flex items-center justify-center bg-warning-60 rounded w-11 h-11 ",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "w-8 h-8 text-purple-700",
                                                            width: "44",
                                                            height: "44",
                                                            viewBox: "0 0 24 24",
                                                            strokeWidth: "1.5",
                                                            stroke: "currentColor",
                                                            fill: "none",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    stroke: "none",
                                                                    d: "M0 0h24v24H0z",
                                                                    fill: "none"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                                    cx: "12",
                                                                    cy: "11",
                                                                    r: "3"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex-1 mt-0 ml-3 xl:ml-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        className: "flex items-center text-base font-semibold text-purple-900",
                                                        children: f({
                                                            id: "Home.Address",
                                                            defaultMessage: "Address"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: " mt-0.5 text-sm text-purple-800 leading-relaxed text-opacity-90 ",
                                                        children: f({
                                                            id: "Home.AddressDetail",
                                                            defaultMessage: "11A, Jalan Nakhoda Kanan, Kampung Nakhoda, 68100 Batu Caves, Selangor,\xa0Malaysia"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "flex flex-shrink-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "mailto:contact@elsystem.org?subject = Feedback&body = Message",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: " flex items-center justify-center bg-success-40 rounded w-11 h-11 ",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "w-8 h-8 text-purple-700",
                                                            width: "44",
                                                            height: "44",
                                                            viewBox: "0 0 24 24",
                                                            strokeWidth: "1.5",
                                                            stroke: "currentColor",
                                                            fill: "none",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    stroke: "none",
                                                                    d: "M0 0h24v24H0z",
                                                                    fill: "none"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                    x: "3",
                                                                    y: "5",
                                                                    width: "18",
                                                                    height: "14",
                                                                    rx: "2"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                                                    points: "3 7 12 13 21 7"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex-1 ml-3 xl:ml-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        className: "flex items-center text-base font-semibold text-purple-900",
                                                        children: f({
                                                            id: "Home.Email",
                                                            defaultMessage: "Email"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: " mt-0.5 text-sm text-purple-800 leading-relaxed text-opacity-90 ",
                                                        children: "contact@elsystem.org"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "flex flex-shrink-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "tel:+84 238 357 9559",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: " flex items-center justify-center rounded w-11 h-11 bg-purple-200 ",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "w-8 h-8 text-purple-700",
                                                            width: "44",
                                                            height: "44",
                                                            viewBox: "0 0 24 24",
                                                            strokeWidth: "1.5",
                                                            stroke: "currentColor",
                                                            fill: "none",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    stroke: "none",
                                                                    d: "M0 0h24v24H0z",
                                                                    fill: "none"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex-1 ml-3 xl:ml-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        className: "flex items-center text-base font-semibold text-purple-900",
                                                        children: f({
                                                            id: "Home.Phone",
                                                            defaultMessage: "Phone"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: " mt-0.5 text-sm text-purple-800 leading-relaxed text-opacity-90 ",
                                                        children: "+60 19757 6113"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col justify-center max-w-md py-8 mx-auto sm:flex-row sm:max-w-none lg:max-w-screen-2xl",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "text-base text-purple-800/90",
                    children: [
                        "\xa9 ",
                        year,
                        " ELS School"
                    ]
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/navbar/nav-link.js



function NavLink({ href , title , color , ...props }) {
    const { pathname  } = (0,router_.useRouter)();
    const isActive = pathname === "/" ? pathname.startsWith(href) : pathname.startsWith(href === "/" ? "home" : href);
    if (!href) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative group",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: `relative z-10 text-lg ${color ? color : "text-primary-100 group-hover:text-primary-80"} duration-300 ease-in-out whitespace-nowrap ${isActive ? "font-bold" : "font-medium"}`,
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: `absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-primary-100 rounded-lg -left-1 -right-1 group-hover:scale-x-100 ${isActive && "scale-x-100"}`
                })
            ]
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            ...props,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative group",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `relative z-10 text-[20px]  ${color ? color : "text-primary-100 group-hover:text-primary-80"} duration-300 ease-in-out whitespace-nowrap ${isActive ? "text-cyan-800" : "font-medium"}`,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `absolute -bottom-3 h-[2px] duration-300 ease-in-out origin-bottom transform scale-x-0 bg-cyan-800 rounded-lg -left-1 -right-1 group-hover:scale-x-100 ${isActive && "scale-x-1 md:scale-x-100"}`
                    })
                ]
            })
        })
    }));
}

;// CONCATENATED MODULE: ./components/navbar/dropdown-link.js




const DropdownLink = ({ title , slug , path , subPages =[] , color  })=>{
    const { isMobile  } = (0,useScreenSize/* useScreenSize */.e)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "dropdown group",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                href: path,
                title: title,
                color: color
            }),
            !isMobile && subPages.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pt-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute z-20 max-w-xs p-2 -translate-x-1/3 bg-white border shadow-lg left-1/2 border-gray-100 rounded-2xl dropdown-content",
                    style: {
                        minWidth: "250px"
                    },
                    children: subPages.map((item, idx)=>{
                        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: `${(item === null || item === void 0 ? void 0 : item.href) ? item.href : `/pages/${item === null || item === void 0 ? void 0 : item.slug}`}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "block w-full py-3 transition duration-200 ease-in-out rounded-xl sm:px-5 hover:bg-purple-25 group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "text-md font-semibold text-primary-100 whitespace-pre-wrap",
                                            children: item === null || item === void 0 ? void 0 : item.title
                                        })
                                    })
                                }, `${item === null || item === void 0 ? void 0 : item.title}-${idx}`),
                                idx < subPages.length - 1 && /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                    className: "my-1 border-purple-200/30 sm:my-2"
                                })
                            ]
                        }, `submenu-${idx}`));
                    })
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pt-2"
            }),
            isMobile && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: subPages.map((item, idx)=>{
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `${(item === null || item === void 0 ? void 0 : item.href) ? item.href : `/pages/${item === null || item === void 0 ? void 0 : item.slug}`}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "block w-full py-2 transition duration-200 ease-in-out rounded-xl sm:px-5 group mx-5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "text-md text-primary-100 whitespace-pre-wrap",
                                        children: item === null || item === void 0 ? void 0 : item.title
                                    })
                                })
                            }, `${item === null || item === void 0 ? void 0 : item.title}-${idx}`),
                            idx < subPages.length - 1 && /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                className: "my-1 border-purple-200/30 sm:my-2"
                            })
                        ]
                    }, `submenu-${idx}`));
                })
            })
        ]
    }));
};
/* harmony default export */ const dropdown_link = (DropdownLink);

;// CONCATENATED MODULE: ./hooks/useSticky.js

const useSticky = ()=>{
    const { 0: isSticky , 1: setIsSticky  } = (0,external_react_.useState)(false);
    const stickyRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        const onScroll = ()=>{
            if (!stickyRef.current) return;
            const stickyPosY = stickyRef.current.getBoundingClientRect().top;
            if (window.scrollY > stickyPosY + 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onScroll);
        window.addEventListener("orientationchange", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            window.removeEventListener("orientationchange", onScroll);
        };
    }, []);
    return {
        isSticky,
        stickyRef
    };
};
/* harmony default export */ const hooks_useSticky = (useSticky);

;// CONCATENATED MODULE: ./components/navbar/sub-nav.js




function SubNav({ slug ="home"  }) {
    var ref;
    const { isSticky , stickyRef  } = hooks_useSticky();
    const { formatMessage: f  } = (0,external_react_intl_.useIntl)();
    const NAVIGATIONS = {
        home: [
            {
                title: f({
                    id: "Home.EducationProgram",
                    defaultMessage: "Education Program"
                }),
                href: "#program"
            },
            {
                title: f({
                    id: "Home.OurGallery",
                    defaultMessage: "Our Gallery"
                }),
                href: "#gallery"
            },
            {
                title: f({
                    id: "Home.OurStories",
                    defaultMessage: "Our Stories"
                }),
                href: "#parents"
            },
            {
                title: f({
                    id: "Home.FAQ",
                    defaultMessage: "FAQ"
                }),
                href: "#faq"
            }, 
        ],
        about: [
            {
                title: f({
                    id: "About.VisionMission",
                    defaultMessage: "Vision & Mission"
                }),
                href: "/about#vision"
            },
            {
                title: f({
                    id: "About.CoreValues",
                    defaultMessage: "Core values"
                }),
                href: "/about#core"
            },
            {
                title: f({
                    id: "About.MessageFromThePrincipal",
                    defaultMessage: "Message from Principal"
                }),
                href: "/about#message"
            },
            {
                title: f({
                    id: "About.Founders",
                    defaultMessage: "Founders"
                }),
                href: "/about#founder"
            }, 
        ]
    };
    if (!NAVIGATIONS[slug]) return null;
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        ref: stickyRef,
        className: `relative shadow-lg  ${isSticky ? "sticky bg-white border-b hidden md:block" : "hidden"}`,
        style: {
            zIndex: 40,
            minHeight: 60
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-center items-center space-x-8 lg:flex justify-items-center mx-auto",
                children: (ref = NAVIGATIONS[slug]) === null || ref === void 0 ? void 0 : ref.map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: item.href,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "font-medium tracking-wide text-purple-800 transition-colors duration-200 cursor-pointer text-lg",
                            children: item.title
                        })
                    }, `${item.title}-${idx}`)
                )
            })
        })
    }));
}

;// CONCATENATED MODULE: ./components/navbar/index.js

/* eslint-disable @next/next/no-img-element */ 





const Navbar = ({ navigations: navigations1 , className , showMobileMenu , handleClickMobileMenu ,  })=>{
    const router = (0,router_.useRouter)();
    const { pathname , asPath , query  } = router;
    const { formatMessage: f  } = (0,external_react_intl_.useIntl)();
    const { 0: currentSlug , 1: setCurrentSlug  } = (0,external_react_.useState)(pathname.slice(1) || "home");
    const formatNavigations = (navigations = [])=>{
        const result = [];
        for (let item of navigations){
            var ref;
            const subPagesNavigation = (item === null || item === void 0 ? void 0 : (ref = item.subPagesCollection) === null || ref === void 0 ? void 0 : ref.items) ?? [];
            let newNavigation = {
            };
            switch(item.slug){
                case "home":
                    newNavigation = {
                        ...item,
                        subPages: [
                            {
                                title: f({
                                    id: "Home.EducationProgram",
                                    defaultMessage: "Education Program"
                                }),
                                href: "/#program"
                            },
                            {
                                title: f({
                                    id: "Home.OurGallery",
                                    defaultMessage: "Our Gallery"
                                }),
                                href: "/#gallery"
                            },
                            {
                                title: f({
                                    id: "Home.OurStories",
                                    defaultMessage: "Our Stories"
                                }),
                                href: "/#parents"
                            },
                            {
                                title: f({
                                    id: "Home.FAQ",
                                    defaultMessage: "FAQ"
                                }),
                                href: "/#faq"
                            },
                            ...subPagesNavigation, 
                        ]
                    };
                    result.push(newNavigation);
                    break;
                case "about":
                    newNavigation = {
                        ...item,
                        subPages: [
                            {
                                title: f({
                                    id: "About.VisionMission",
                                    defaultMessage: "Vision & Mission"
                                }),
                                href: "/about#vision"
                            },
                            {
                                title: f({
                                    id: "About.CoreValues",
                                    defaultMessage: "Core values"
                                }),
                                href: "/about#core"
                            },
                            {
                                title: f({
                                    id: "About.MessageFromThePrincipal",
                                    defaultMessage: "Message from Principal"
                                }),
                                href: "/about#message"
                            },
                            {
                                title: f({
                                    id: "About.Founders",
                                    defaultMessage: "Founders"
                                }),
                                href: "/about#founder"
                            },
                            {
                                title: f({
                                    id: "About.Team",
                                    defaultMessage: "ELS Team"
                                }),
                                href: "/teachers"
                            },
                            ...subPagesNavigation,
                            {
                                title: f({
                                    id: "Home.Yearbook",
                                    defaultMessage: "Yearbook"
                                }),
                                href: "/yearbook"
                            }, 
                        ]
                    };
                    result.push(newNavigation);
                    break;
                case "programs":
                    newNavigation = {
                        ...item,
                        subPages: [
                            {
                                title: f({
                                    id: "Home.EducationPathway",
                                    defaultMessage: "Education Pathway"
                                }),
                                href: "/pages/education-pathway"
                            },
                            {
                                title: f({
                                    id: "Home.Kindergarten",
                                    defaultMessage: "Kindergarten"
                                }),
                                href: "/programs/kindergarten"
                            },
                            {
                                title: f({
                                    id: "Home.PrimarySchool",
                                    defaultMessage: "Primary"
                                }),
                                href: "/programs/primary"
                            },
                            {
                                title: f({
                                    id: "Home.Secondary",
                                    defaultMessage: "Secondary"
                                }),
                                href: "/programs/secondary"
                            },
                            {
                                title: f({
                                    id: "Home.HighSchool",
                                    defaultMessage: "High School"
                                }),
                                href: "/programs/high-school"
                            },
                            ...subPagesNavigation, 
                        ]
                    };
                    result.push(newNavigation);
                    break;
                case "parents":
                    newNavigation = {
                        ...item,
                        subPages: [
                            ...subPagesNavigation,
                            {
                                title: f({
                                    id: "Home.ParentHandbook",
                                    defaultMessage: "Parent Handbook"
                                }),
                                href: "/handbook"
                            }, 
                        ]
                    };
                    result.push(newNavigation);
                    break;
                default:
                    newNavigation = {
                        ...item,
                        subPages: subPagesNavigation
                    };
                    result.push(newNavigation);
            }
        }
        return result;
    };
    const renderNavigations = formatNavigations(navigations1);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "h-[150px] pt-2 hidden sm:block shadow_navigation",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-screen-xl mx-auto flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "h-[140px]",
                                            src: "/images/logo.png",
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                    className: "bg-transparent ml-9",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `items-center justify-between hidden md:flex`,
                                        children: renderNavigations === null || renderNavigations === void 0 ? void 0 : renderNavigations.map((item, idx)=>{
                                            return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mx-3",
                                                onClick: ()=>setCurrentSlug(item.slug)
                                                ,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(dropdown_link, {
                                                    title: item.title,
                                                    path: item.path,
                                                    subPages: item === null || item === void 0 ? void 0 : item.subPages
                                                })
                                            }, `menu-${item.path}-${idx}`));
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "https://elsystem.org/lms/index.php",
                                target: "_blank",
                                type: "button",
                                rel: "noreferrer",
                                className: "mt-6 text-lg font-medium bg-white hover:bg-primary-100 hover:text-white sm:mt-0 text-primary-100 sm:ml-6 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded_button group cursor-pointer border-solid border-2 border-primary-100",
                                children: [
                                    "Login",
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px]"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "max-w-screen-xl mx-auto",
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "bg-transparent",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between w-full overflow-y-auto shadow pb-3 sm:hidden bg-white",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "block ml-6 mt-5 sm:hidden",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "relative z-50 w-6 h-5 transition duration-500 ease-in-out transform rotate-0 cursor-pointer group focus:outline-none",
                                        onClick: handleClickMobileMenu,
                                        children: !showMobileMenu ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "absolute top-0 left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-primary-100 rounded-full opacity-100 group-hover:bg-purple-600"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "absolute left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-primary-100 rounded-full opacity-100 top-2 group-hover:bg-purple-600"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "absolute left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-primary-100 rounded-full opacity-100 top-2 group-hover:bg-purple-600"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "absolute left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-primary-100 rounded-full opacity-100 top-4 group-hover:bg-purple-600"
                                                })
                                            ]
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        })
                                    }),
                                    showMobileMenu && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "absolute top-0 left-0 bg-black w-screen h-full z-10 opacity-50"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "absolute top-0 left-0 z-40 w-11/12 px-4 py-4 overflow-y-scroll bg-white sm:px-8 overflow-x-hidden opacity-100",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                onClick: ()=>{
                                                                    handleClickMobileMenu();
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "/",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/images/logo.png",
                                                                            alt: "Bright",
                                                                            className: "h-[48px]"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "w-6 h-6 text-primary-100 mt-5",
                                                                width: "44",
                                                                height: "44",
                                                                viewBox: "0 0 24 24",
                                                                strokeWidth: "1.5",
                                                                stroke: "currentColor",
                                                                fill: "none",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                onClick: handleClickMobileMenu,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        stroke: "none",
                                                                        d: "M0 0h24v24H0z",
                                                                        fill: "none"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                        x: "4",
                                                                        y: "4",
                                                                        width: "16",
                                                                        height: "16",
                                                                        rx: "2"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M10 10l4 4m0 -4l-4 4"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "flex flex-col items-center justify-center w-full h-full mt-4 ",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "flex flex-col w-full space-y-6 justify-evenly",
                                                            children: renderNavigations === null || renderNavigations === void 0 ? void 0 : renderNavigations.map((item, idx)=>{
                                                                return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    onClick: handleClickMobileMenu,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(dropdown_link, {
                                                                        title: item.title,
                                                                        path: item.path,
                                                                        subPages: item === null || item === void 0 ? void 0 : item.subPages,
                                                                        color: "text-primary-100"
                                                                    })
                                                                }, `menu-${item.path}-${idx}`));
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " w-52 sm:hidden sm:w-52 flex justify-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/logo.png",
                                            alt: "Bright",
                                            className: "h-[80px] mt-3 mr-8"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute right-1 mt-4 mr-4 sm:hidden",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "https://elsystem.org/lms/index.php",
                                    target: "_blank",
                                    type: "button",
                                    rel: "noreferrer",
                                    className: " text-base font-medium bg-white hover:bg-primary-100 hover:text-white sm:mt-0 text-primary-100 sm:ml-6 relative leading-normal inline-flex items-center justify-center px-4 py-3 duration-300 ease-in-out rounded_button group cursor-pointer border-solid border-2 border-primary-100",
                                    children: [
                                        "Login",
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px]"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SubNav, {
                slug: currentSlug
            })
        ]
    }));
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/navbar/topBar.js



function TopBar({}) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-primary-100 py-2 text-center text-white",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "text-center text-base font-semibold tracking-wider text-gray-00",
            children: "Together we can make a difference"
        })
    }));
}

;// CONCATENATED MODULE: ./components/layout/index.js








function Layout({ children , navigations =[] , className  }) {
    const { isMobile  } = (0,useScreenSize/* useScreenSize */.e)();
    const { 0: showMobileMenu , 1: setShowMobileMenu  } = (0,external_react_.useState)(false);
    const handleClickMobileMenu = ()=>{
        setShowMobileMenu(!showMobileMenu);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TopBar, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
                navigations: navigations,
                className: className,
                showMobileMenu: showMobileMenu,
                handleClickMobileMenu: handleClickMobileMenu
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: isMobile && showMobileMenu ? `hidden` : "",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(call_action, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(facebook, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
            })
        ]
    }));
};


/***/ }),

/***/ 5806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useOutsideClick)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useOutsideClick = (ref, callback)=>{
    const handleClick = (e)=>{
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        document.addEventListener("click", handleClick);
        document.addEventListener("mousedown", handleClick);
        return ()=>{
            document.removeEventListener("click", handleClick);
            document.removeEventListener("mousedown", handleClick);
        };
    });
};



/***/ }),

/***/ 5344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useScreenSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const getIsMobile = ()=>{
    return  false && 0;
};
const useScreenSize = ()=>{
    const { 0: isMobile , 1: setIsMobile  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getIsMobile());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleResize = ()=>{
            setIsMobile(getIsMobile());
        };
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return {
        isMobile
    };
};



/***/ }),

/***/ 8710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "sQ": () => (/* binding */ getAllJobs),
  "K0": () => (/* binding */ getAllPages),
  "h9": () => (/* binding */ getAllPostsWithSlug),
  "k": () => (/* binding */ getClasses),
  "tY": () => (/* binding */ getCoverImage),
  "QR": () => (/* binding */ getFaq),
  "Fo": () => (/* binding */ getGalleries),
  "Zn": () => (/* binding */ getJob),
  "Ti": () => (/* binding */ getNavigation),
  "fx": () => (/* binding */ getPage),
  "BP": () => (/* binding */ getPaginatedPosts),
  "XX": () => (/* binding */ getParagraphs),
  "ds": () => (/* binding */ getPostAndMorePosts),
  "NL": () => (/* binding */ getPostsForHome),
  "It": () => (/* binding */ getSteps),
  "Os": () => (/* binding */ getTeachers),
  "BZ": () => (/* binding */ getTestimonials),
  "R6": () => (/* binding */ getVideoForHome)
});

// UNUSED EXPORTS: getAllPosts, getAllSchoolDivisions, getSchoolDivision, getStats, getTotalPostNumber

// EXTERNAL MODULE: ./lib/constant.js
var constant = __webpack_require__(8383);
;// CONCATENATED MODULE: ./lib/query.js
const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
excerpt
`;
const POST_DETAIL_GRAPHQL_FIELDS = (/* unused pure expression or super */ null && (`
slug
title
coverImage {
  url
}
date
excerpt
content {
  json
  links {
    entries {
              block {
                  sys {
                    id
                  }
                  __typename
                  ... on Video {
                    title
                    youtubeUrl
                  }
                }
              }
    assets {
              block {
                sys {
                  id
                }
                url
                title
                width
                height
                description
              }
            }
  }
}
`));
const VIDEO_GRAPHQL_FIELDS = `
title
youtubeUrl
`;
const JOB_GRAPHQL_FIELDS = `
title
slug
introduction{
  json
 
}
start
expire
`;
const JOB_DETAIL_GRAPHQL_FIELDS = `
title
slug
introduction{
  json
   links {
    assets {
              block {
                sys {
                  id
                }
                url
                title
                width
                height
                description
              }
            }
  }
}
start
expire
requirement
benefit
`;
const TEACHER_GRAPHQL_FIELDS = `
name
role
photo{
  url
}
deparment
joiningYear
`;
const TESTIMONIAL_GRAPHQL_FIELDS = (/* unused pure expression or super */ null && (`
parent
photo{
  url
}
description
content
type
`));
const FACEBOOK_GALLERY_GRAPHQL_FIELDS = `
title
link
image{
  url
}
`;
const query_SCHOOL_DIVISIONS_GRAPHQL_FIELDS = (/* unused pure expression or super */ null && (`
name
slug
`));
const query_SCHOOL_DIVISION_DETAIL_GRAPHQL_FIELDS = (/* unused pure expression or super */ null && (`
slug
name
coverImage {
  url
}
summary
description {
  json
    links {
    entries {
              block {
                  sys {
                    id
                  }
                  __typename
                  ... on Video {
                    title
                    youtubeUrl
                  }
                }
              }
    assets {
              block {
                sys {
                  id
                }
                url
                title
                width
                height
                description
              }
            }
  }
}
reasonsCollection{
  items{
    ... on Reason{
      content
    }
  }
}
statsCollection{
  items{
    ... on Stat{
      label
      value
    }
  }
}
teachersCollection{
  items{
    ... on Teacher{
      name
      role 
      photo{
        url
      }
    }
  }
}
classesCollection{
  items{
    ... on Class{
      name
      image{
        url
      }
      description
    }
  }
}
`));
const CLASS_GRAPHQL_FIELDS = `
name
`;
const FAQ_GRAPHQL_FIELDS = (/* unused pure expression or super */ null && (`
question
response{
  json
}
`));
const PAGES_GRAPHQL_FIELDS = `
title
slug
`;
const PAGE_DETAIL_GRAPHQL_FIELDS = `
title
slug
content {
  json
  links {
    entries {
              block {
                  sys {
                    id
                  }
                  __typename
                  ... on Video {
                    title
                    youtubeUrl
                  }
                }
              }
    assets {
              block {
                sys {
                  id
                }
                url
                title
                width
                height
                description
              }
            }
  }
}
`;
const NAVIGATION_GRAPHQL_FIELDS = (/* unused pure expression or super */ null && (`
position
title
slug
path
subPagesCollection{
  items{
      ... on Page{
        title
        slug
      }
    }
}
`));
const PARAGRAPH_GRAPHQL_FIELDS = `
title
type
content
image{
  url
}
`;
const query_STAT_GRAPHQL_FIELDS = (/* unused pure expression or super */ null && (`
label
value
`));
const COVER_GRAPHQL_FIELDS = (/* unused pure expression or super */ null && (`
image{
  url
}
facebookLink
post{
  slug
}
`));

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
;// CONCATENATED MODULE: ./lib/utils.js

function extractPostEntries(fetchResponse) {
    var ref, ref1;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref1 = ref.postCollection) === null || ref1 === void 0 ? void 0 : ref1.items;
}
function extractPost(fetchResponse) {
    var ref, ref2, ref3;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref2 = ref.postCollection) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.items) === null || ref3 === void 0 ? void 0 : ref3[0];
}
function extractVideoEntries(fetchResponse) {
    var ref, ref4;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref4 = ref.videoCollection) === null || ref4 === void 0 ? void 0 : ref4.items.map((item)=>{
        return item === null || item === void 0 ? void 0 : item.youtubeUrl;
    });
}
function extractJobEntries(fetchResponse) {
    var ref, ref5;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref5 = ref.jobCollection) === null || ref5 === void 0 ? void 0 : ref5.items;
}
function extractJob(fetchResponse) {
    var ref, ref6, ref7;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref6 = ref.jobCollection) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.items) === null || ref7 === void 0 ? void 0 : ref7[0];
}
function extractTeacherEntries(fetchResponse) {
    var ref, ref8;
    const teachers = (fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref8 = ref.teacherCollection) === null || ref8 === void 0 ? void 0 : ref8.items) || [];
    return teachers.sort((a, b)=>{
        return (a === null || a === void 0 ? void 0 : a.joiningYear) < (b === null || b === void 0 ? void 0 : b.joiningYear);
    }).reverse();
// return fetchResponse?.data?.teacherCollection?.items?.reverse();
}
function extractTestimonialEntries(fetchResponse) {
    var ref, ref9;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref9 = ref.testimonialCollection) === null || ref9 === void 0 ? void 0 : ref9.items;
}
function extractFacebookGalleryEntries(fetchResponse) {
    var ref, ref10;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref10 = ref.facebookGalleryCollection) === null || ref10 === void 0 ? void 0 : ref10.items;
}
function utils_extractSchoolDivisionsEntries(fetchResponse) {
    var ref, ref11;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref11 = ref.schoolDivisionCollection) === null || ref11 === void 0 ? void 0 : ref11.items;
}
function utils_extractSchoolDivision(fetchResponse) {
    var ref, ref12, ref13;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref12 = ref.schoolDivisionCollection) === null || ref12 === void 0 ? void 0 : (ref13 = ref12.items) === null || ref13 === void 0 ? void 0 : ref13[0];
}
function extractClassEntries(fetchResponse) {
    var ref, ref14;
    const classes = (fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref14 = ref.classCollection) === null || ref14 === void 0 ? void 0 : ref14.items) ?? [];
    return classes.map((item)=>{
        return item === null || item === void 0 ? void 0 : item.name;
    }).sort();
}
function extractFaqEntries(fetchResponse) {
    var ref, ref15;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref15 = ref.faqCollection) === null || ref15 === void 0 ? void 0 : ref15.items;
}
function extractPagesEntries(fetchResponse) {
    var ref, ref16;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref16 = ref.pageCollection) === null || ref16 === void 0 ? void 0 : ref16.items;
}
function extractPage(fetchResponse) {
    var ref, ref17, ref18;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref17 = ref.pageCollection) === null || ref17 === void 0 ? void 0 : (ref18 = ref17.items) === null || ref18 === void 0 ? void 0 : ref18[0];
}
function extractNavigationsEntries(fetchResponse) {
    var ref, ref19;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref19 = ref.navigationCollection) === null || ref19 === void 0 ? void 0 : ref19.items;
}
function extractParagraphsEntries(fetchResponse) {
    var ref, ref20;
    const paragraphs = (fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref20 = ref.paragraphCollection) === null || ref20 === void 0 ? void 0 : ref20.items) ?? [];
    const visions = paragraphs.filter((item)=>item.type === "Visions"
    ).reverse();
    const message = paragraphs.find((item)=>item.type === "Message"
    );
    const cofounders = paragraphs.filter((item)=>item.type === "Cofounders"
    ).reverse();
    return {
        visions,
        message,
        cofounders
    };
}
function extractStepsEntries(fetchResponse) {
    var ref, ref21;
    const steps = (fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref21 = ref.paragraphCollection) === null || ref21 === void 0 ? void 0 : ref21.items) ?? [];
    return steps;
}
function utils_extractStatsEntries(fetchResponse) {
    var ref, ref22;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref22 = ref.statCollection) === null || ref22 === void 0 ? void 0 : ref22.items;
}
function extractCoverEntries(fetchResponse) {
    var ref, ref23;
    return (fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref23 = ref.coverCollection) === null || ref23 === void 0 ? void 0 : ref23.items) ?? [];
}

;// CONCATENATED MODULE: ./lib/api.js



async function fetchGraphQL(query, preview = false) {
    return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN}`
        },
        body: JSON.stringify({
            query
        })
    }).then((response)=>response.json()
    );
}
async function getTotalPostNumber() {
    const response = await fetchGraphQL(`query {
      postCollection {
       total
      }
    }`);
    const totalPosts = response.data.postCollection.total ? response.data.postCollection.total : 0;
    return totalPosts;
}
async function getPaginatedPosts(locale, page) {
    var ref;
    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip = skipMultiplier > 0 ? constant/* POSTS_PER_PAGE */.DB * skipMultiplier : 0;
    const entries = await fetchGraphQL(`query {
      postCollection(limit: ${constant/* POSTS_PER_PAGE */.DB}, skip: ${skip},order: date_DESC, locale: "${constant/* LOCALES */.lE[locale]}") {
        total
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`);
    const paginatedPostSummaries = (entries === null || entries === void 0 ? void 0 : (ref = entries.data) === null || ref === void 0 ? void 0 : ref.postCollection) ? entries.data.postCollection : {
        total: 0,
        items: []
    };
    return paginatedPostSummaries;
}
async function getVideoForHome() {
    const entries = await fetchGraphQL(`query {
      videoCollection(limit: 10) {
        items {
          ${VIDEO_GRAPHQL_FIELDS}
        }
      }
    }`);
    return extractVideoEntries(entries);
}
async function getAllJobs(locale) {
    const entries = await fetchGraphQL(`query {
      jobCollection( locale: "${constant/* LOCALES */.lE[locale]}") {
        items {
          ${JOB_GRAPHQL_FIELDS}
        }
      }
    }`);
    return extractJobEntries(entries);
}
async function getJob(slug, locale) {
    const entry = await fetchGraphQL(`query {
      jobCollection(where: { slug: "${slug}" },locale: "${constant/* LOCALES */.lE[locale]}", limit: 1) {
        items {
          ${JOB_DETAIL_GRAPHQL_FIELDS}
        }
      }
    }`);
    return extractJob(entry);
}
async function getTeachers(locale) {
    const entries = await fetchGraphQL(`query {
      teacherCollection( locale: "${constant/* LOCALES */.lE[locale]}") {
        items {
          ${TEACHER_GRAPHQL_FIELDS}
        }
      }
    }`);
    return extractTeacherEntries(entries);
}
async function getGalleries(locale) {
    const entries = await fetchGraphQL(`query {
      facebookGalleryCollection( locale: "${constant/* LOCALES */.lE[locale]}") {
        items {
          ${FACEBOOK_GALLERY_GRAPHQL_FIELDS}
        }
      }
    }`);
    return extractFacebookGalleryEntries(entries);
}
async function getAllSchoolDivisions() {
    const entries = await fetchGraphQL(`query {
      schoolDivisionCollection {
        items {
          ${SCHOOL_DIVISIONS_GRAPHQL_FIELDS}
        }
      }
    }`);
    return extractSchoolDivisionsEntries(entries);
}
async function getSchoolDivision(slug, locale) {
    const entry = await fetchGraphQL(`query {
      schoolDivisionCollection(where: { slug: "${slug}" },locale: "${LOCALES[locale]}", limit: 1) {
        items {
          ${SCHOOL_DIVISION_DETAIL_GRAPHQL_FIELDS}
        }
      }
    }`);
    return extractSchoolDivision(entry);
}
async function getClasses() {
    const entries = await fetchGraphQL(`query {
      classCollection {
        items {
          ${CLASS_GRAPHQL_FIELDS}
        }
      }
    }`);
    return extractClassEntries(entries);
}
async function getAllPages() {
    const entries = await fetchGraphQL(`query {
      pageCollection {
        items {
          ${PAGES_GRAPHQL_FIELDS}
        }
      }
    }`);
    return extractPagesEntries(entries);
}
async function getPage(slug, locale) {
    const entry = await fetchGraphQL(`query {
      pageCollection(where: { slug: "${slug}" },locale: "${constant/* LOCALES */.lE[locale]}", limit: 1) {
        items {
          ${PAGE_DETAIL_GRAPHQL_FIELDS}
        }
      }
    }`);
    return extractPage(entry);
}
async function getParagraphs(locale) {
    const entries = await fetchGraphQL(`query {
      paragraphCollection( locale: "${constant/* LOCALES */.lE[locale]}") {
        items {
          ${PARAGRAPH_GRAPHQL_FIELDS}
        }
      }
    }`);
    return extractParagraphsEntries(entries);
}
async function getSteps(locale) {
    const entries = await fetchGraphQL(`query {
      paragraphCollection(where: {type: "Process" },locale: "${constant/* LOCALES */.lE[locale]}", order: title_ASC,) {
        items {
          ${PARAGRAPH_GRAPHQL_FIELDS}
        }
      }
    }`);
    return extractStepsEntries(entries);
}
async function getStats(locale) {
    const entries = await fetchGraphQL(`query {
      statCollection(locale: "${LOCALES[locale]}", limit:6) {
        items {
          ${STAT_GRAPHQL_FIELDS}
        }
      }
    }`);
    return extractStatsEntries(entries);
}
const dummyPosts = [
    {
        title: "School Science Fair 2023",
        slug: "science-fair-2023",
        excerpt: "Our annual science fair showcased amazing student projects",
        date: "2023-03-15T00:00:00.000Z",
        coverImage: {
            url: "https://source.unsplash.com/random/800x600?sig=1&science",
            title: "Science Fair Exhibition"
        },
        content: "Students demonstrated innovative projects ranging from renewable energy solutions to robotics..."
    },
    {
        title: "Sports Day Highlights",
        slug: "sports-day-2023",
        excerpt: "Annual sports day brought out the best in our students",
        date: "2023-04-02T00:00:00.000Z",
        coverImage: {
            url: "https://source.unsplash.com/random/800x600?sig=2&sports",
            title: "Sports Day"
        },
        content: "Track and field events saw record-breaking performances..."
    }, 
];
const dummyTestimonials = [
    {
        name: "John Doe",
        role: "Parent",
        text: "This school has transformed my child's learning experience",
        avatar: {
            url: "https://source.unsplash.com/random/100x100?sig=3&portrait"
        }
    },
    {
        name: "Jane Smith",
        role: "Alumni",
        text: "The foundation I received here helped me succeed in college",
        avatar: {
            url: "https://source.unsplash.com/random/100x100?sig=4&portrait"
        }
    }, 
];
const dummyFaq = [
    {
        question: "What are the school hours?",
        answer: "Our regular school hours are from 8:00 AM to 3:00 PM"
    },
    {
        question: "Do you offer extracurricular activities?",
        answer: "Yes, we offer sports, arts, and various clubs"
    }, 
];
const dummyNavigations = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Education Program",
        path: "/programs"
    },
    {
        title: "Registration",
        path: "/parents"
    }, 
];
const dummyCoverImages = [
    {
        image: {
            url: "/images/homeBanner.png",
            title: "School Campus"
        },
        facebookLink: "#",
        post: {
            slug: "campus-tour"
        }
    },
    {
        image: {
            url: "/images/schoolHero.png",
            title: "Modern Classroom"
        },
        facebookLink: "#"
    }, 
];
// Modified API functions to return dummy data
async function getPostsForHome(locale) {
    return dummyPosts.slice(0, 4);
}
async function getTestimonials(locale) {
    return dummyTestimonials;
}
async function getFaq(locale) {
    return dummyFaq;
}
async function getNavigation(locale) {
    return dummyNavigations;
}
async function getCoverImage(locale) {
    return dummyCoverImages;
}
async function getAllPosts(locale) {
    return dummyPosts;
}
async function getAllPostsWithSlug(locale) {
    return dummyPosts.filter((post)=>post.slug
    );
}
async function getPostAndMorePosts(slug, locale) {
    const post = dummyPosts.find((p)=>p.slug === slug
    );
    const morePosts = dummyPosts.filter((p)=>p.slug !== slug
    ).slice(0, 3);
    return {
        post,
        morePosts
    };
}


/***/ }),

/***/ 8383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "By": () => (/* binding */ SCHEDULE_TYPE),
/* harmony export */   "eq": () => (/* binding */ FORMAT_DATE_DISPLAY),
/* harmony export */   "YP": () => (/* binding */ FORMAT_DATETIME_DISPLAY),
/* harmony export */   "ET": () => (/* binding */ BUS_SERVICE),
/* harmony export */   "y7": () => (/* binding */ GENDER),
/* harmony export */   "ZD": () => (/* binding */ RETEST_OPTIONS),
/* harmony export */   "DB": () => (/* binding */ POSTS_PER_PAGE),
/* harmony export */   "lE": () => (/* binding */ LOCALES)
/* harmony export */ });
/* unused harmony export FORMAT_DATE_FOLDER */
const SCHEDULE_TYPE = {
    program: "program",
    meal: "meal"
};
const FORMAT_DATE_FOLDER = "ddMMMyyyy";
const FORMAT_DATE_DISPLAY = "dd-MM-yyyy";
const FORMAT_DATETIME_DISPLAY = "HH:mm:ss dd-MM-yyyy";
const BUS_SERVICE = {
    twoWay: "Two-way journey - Hai Chiều",
    pickup: "Pick-up only - Chỉ đ\xf3n",
    drop: "Drop-off only - Chỉ trả"
};
const GENDER = {
    male: "Male",
    female: "Female",
    other: "Other"
};
const RETEST_OPTIONS = {
    yes: "Yes",
    no: "No"
};
const POSTS_PER_PAGE = 15;
const LOCALES = {
    en: "en-US",
    vi: "vi-VN"
};


/***/ })

};
;