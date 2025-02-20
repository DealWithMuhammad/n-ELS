exports.id = 900;
exports.ids = [900];
exports.modules = {

/***/ 5900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ ContactForm),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8743);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8383);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);







const ContactForm = ({ handleSubmit , handleChangeForm , selectedDate , isLoading , status , handleChangeDate , error: error1 ,  })=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
    // eslint-disable-next-line react/display-name
    const ExampleCustomInput = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ value , onClick , error  }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `w-full p-4 mt-2 text-sm font-medium text-purple-700 duration-300 ease-in-out border-2 outline-none h-14 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none flex justify-between ${error && "border-red-200"}`,
            onClick: onClick,
            ref: ref,
            children: [
                value ? value : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-purple-700 opacity-70",
                    children: f({
                        id: "Form.PleaseChooseDateAndTime",
                        defaultMessage: "Please choose date and time"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: `flex-shrink-0 w-4 h-4 ml-3 text-purple-700 duration-300 ease-in-out sm:w-4 sm:h-4 sm:ml-6 group-hover:text-purple-600`,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M19 9l-7 7-7-7"
                        })
                    })
                })
            ]
        })
    );
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            minHeight: "800px"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-2xl font-bold text-purple-900",
                        children: f({
                            id: "Form.CampusTourRegistration",
                            defaultMessage: "Campus Tour Registration"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-purple-800 mt-0.5 text-opacity-90",
                        children: f({
                            id: "Form.WeGetBackToYouWithin24Hours",
                            defaultMessage: "We'll get back to you within 24 hours."
                        })
                    })
                ]
            }),
            status === "success" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center justify-between mt-12",
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
                                children: f({
                                    id: "Form.SubmitDone",
                                    defaultMessage: "Submit done!"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-600 my-2",
                                children: f({
                                    id: "Form.ThankYou",
                                    defaultMessage: "Thank you. Our staff will call you soon"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    " ",
                                    f({
                                        id: "Form.HaveAGreatDay",
                                        defaultMessage: "Have a great day!"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "mt-8",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "name",
                                className: "ml-0.5 text-purple-900 font-medium text-sm",
                                children: [
                                    f({
                                        id: "Form.FullName",
                                        defaultMessage: "Full Name"
                                    }),
                                    "*"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                placeholder: f({
                                    id: "Form.FullName",
                                    defaultMessage: "Full Name"
                                }),
                                className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none",
                                required: true,
                                id: "fullName",
                                name: "fullName",
                                onChange: handleChangeForm
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "phone",
                                className: "ml-0.5 text-purple-900 font-medium text-sm",
                                children: [
                                    f({
                                        id: "Form.Phone",
                                        defaultMessage: "Phone"
                                    }),
                                    " ",
                                    "*"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "phoneNumber",
                                name: "phoneNumber",
                                onChange: handleChangeForm,
                                required: true,
                                type: "text",
                                placeholder: f({
                                    id: "Form.Phone",
                                    defaultMessage: "Phone"
                                }),
                                className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "email",
                                className: "ml-0.5 text-purple-900 font-medium text-sm",
                                children: [
                                    f({
                                        id: "Form.Email",
                                        defaultMessage: "Email"
                                    }),
                                    " ",
                                    "*"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "email",
                                type: "email",
                                name: "email",
                                placeholder: f({
                                    id: "Form.Email",
                                    defaultMessage: "Email"
                                }),
                                className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none",
                                required: true,
                                onChange: handleChangeForm
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "dateTime",
                                className: "ml-0.5 text-purple-900 font-medium text-sm",
                                children: [
                                    f({
                                        id: "Form.PreferredDateAndTime",
                                        defaultMessage: "Preferred date and time"
                                    }),
                                    " ",
                                    "*"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_3___default()), {
                                selected: selectedDate,
                                onChange: (date)=>handleChangeDate(date)
                                ,
                                showTimeSelect: true,
                                timeFormat: "HH:mm",
                                timeInputLabel: "Time:",
                                dateFormat: "h:mm aa MMMM d, yyyy",
                                customInput: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ExampleCustomInput, {
                                    error: error1
                                }),
                                minDate: new Date(),
                                minTime: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.setHours)((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.setMinutes)(new Date(), 0), 8),
                                maxTime: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.setHours)((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.setMinutes)(new Date(), 0), 18)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "message",
                                className: "ml-0.5 text-purple-900 font-medium text-sm",
                                children: [
                                    f({
                                        id: "Form.Message",
                                        defaultMessage: "Message"
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                id: "message",
                                type: "text",
                                name: "message",
                                placeholder: f({
                                    id: "Form.Message",
                                    defaultMessage: "Message"
                                }),
                                rows: 3,
                                className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none",
                                onChange: handleChangeForm
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-start mt-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            className: "text-lg font-semibold text-purple-900 bg-yellow-500 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-yellow-600",
                            children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "loading-circle animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6 mr-2"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
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
const ContactHero = ()=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    });
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: statusForm , 1: setStatusForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: selectedDate , 1: setSelectedDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: error2 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleChangeForm = (e)=>{
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    };
    const handleChangeDate = (date)=>{
        setSelectedDate(date);
        setError(false);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!selectedDate) {
            setError(true);
            return;
        }
        const data = {
            ...form,
            type: "School",
            submittedAt: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(Date.now(), _lib_constant__WEBPACK_IMPORTED_MODULE_5__/* .FORMAT_DATETIME_DISPLAY */ .YP),
            date: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(selectedDate, _lib_constant__WEBPACK_IMPORTED_MODULE_5__/* .FORMAT_DATETIME_DISPLAY */ .YP)
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
            console.log("error", error);
        }
        setIsLoading(false);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "px-4 pb-12 overflow-hidden lg:pt-24 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-xl mx-auto lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-32 lg:max-w-screen-xl ",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "py-16 lg:py-32",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1",
                                children: f({
                                    id: "Contact.VisitUsSoon",
                                    defaultMessage: "Visit us soon"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "max-w-md mt-4 text-purple-900 font-extrabold text-5xl sm:text-6xl xl:text-7xl leading-snug sm:leading-tight xl:leading-tighter",
                            children: f({
                                id: "Contact.WeLoveToMeetYou",
                                defaultMessage: "We'd love to meet you"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "max-w-lg mt-3 text-xl leading-relaxed text-purple-800",
                            children: f({
                                id: "Contact.ContactSummary",
                                defaultMessage: "Providing the best possible start to your children's education. Our goal is to ensure your little one's success in life. So We provide an environment that enables students to thrive."
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/svg/dots-large-grid.svg",
                            className: "absolute lg:hidden -right-16 -top-12 sm:-top-16 w-80 lg:left-14 lg:-top-16 lg:w-36 opacity-60",
                            alt: ""
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/svg/dots-grid.svg",
                            className: "absolute hidden w-40 opacity-75 lg:block -right-16 -top-16 lg:left-14 lg:-top-16 lg:w-36",
                            alt: ""
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/svg/dots-strip.svg",
                            className: "absolute hidden w-20 rotate-90 opacity-75 lg:block -right-16 top-1/2",
                            alt: ""
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative z-10 w-full px-4 py-10 mx-auto bg-white shadow-xl rounded-3xl lg:mr-0 lg:ml-auto sm:p-16 lg:p-12 xl:p-14",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContactForm, {
                                handleChangeForm: handleChangeForm,
                                handleSubmit: handleSubmit,
                                isLoading: isLoading,
                                status: statusForm,
                                selectedDate: selectedDate,
                                handleChangeDate: handleChangeDate,
                                error: error2
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactHero);


/***/ }),

/***/ 5994:
/***/ (() => {



/***/ })

};
;