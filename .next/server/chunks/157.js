"use strict";
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 5976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ SERVICE),
  "Z": () => (/* binding */ register_form)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-datepicker"
var external_react_datepicker_ = __webpack_require__(8743);
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
// EXTERNAL MODULE: ./hooks/useOutsideClick.js
var useOutsideClick = __webpack_require__(5806);
;// CONCATENATED MODULE: ./components/dropdown/index.js




const Dropdown = ({ options , value , handleChange , title , placeholder ="" , error =false , hasTranslate =false ,  })=>{
    const { formatMessage: f  } = (0,external_react_intl_.useIntl)();
    const { 0: showDropdown , 1: setShowDropdown  } = (0,external_react_.useState)(false);
    const wrapper = (0,external_react_.useRef)(null);
    (0,useOutsideClick/* useOutsideClick */.O)(wrapper, ()=>{
        if (showDropdown) {
            setShowDropdown(false);
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "max-w-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "select",
                className: "block py-2 text-purple-900 text-sm",
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative",
                ref: wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `h-14 bg-white flex border border-purple-50 rounded items-center rounded-xl border-2 ${error && "border-red-200"}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                value: hasTranslate ? f({
                                    id: `Form.${value}`
                                }) : value,
                                placeholder: placeholder,
                                name: "select",
                                id: "select",
                                className: "px-4 appearance-none outline-none text-purple-700 w-full text-sm font-medium placeholder-purple-700 placeholder-opacity-70",
                                onChange: ()=>console.log("change")
                                ,
                                autoComplete: "off"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "show_more",
                                className: "cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    onClick: ()=>setShowDropdown(!showDropdown)
                                    ,
                                    className: `w-4 h-4 mx-2 fill-current ${showDropdown ? "transform rotate-180" : ""}`,
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                        points: "18 15 12 9 6 15"
                                    })
                                })
                            })
                        ]
                    }),
                    showDropdown && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "checkbox",
                                name: "show_more",
                                id: "show_more",
                                className: "hidden peer"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200 z-50 text-sm",
                                children: options.map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "cursor-pointer group",
                                        onClick: ()=>{
                                            setShowDropdown(false);
                                            handleChange(item);
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "block p-2 border-transparent border-l-4 group-hover:border-purple-600 group-hover:bg-gray-100",
                                            children: hasTranslate ? f({
                                                id: `Form.${item}`
                                            }) : item
                                        })
                                    }, item)
                                )
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const dropdown = (Dropdown);

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: ./lib/constant.js
var constant = __webpack_require__(8383);
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__(5994);
;// CONCATENATED MODULE: ./components/date-picker-custom-header/index.js








const DatePickerCustomHeader = ({ selected , handleChangeDate , error: error1  })=>{
    const { formatMessage: f  } = (0,external_react_intl_.useIntl)();
    const years = (0,external_lodash_.range)(2005, (0,external_date_fns_.getYear)(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December", 
    ];
    // eslint-disable-next-line react/display-name
    const ExampleCustomInput = /*#__PURE__*/ (0,external_react_.forwardRef)(({ value , onClick , error  }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none flex justify-between ${error && "border-red-200"}`,
            onClick: onClick,
            ref: ref,
            children: [
                value ? value : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-purple-700 opacity-70",
                    children: f({
                        id: "Form.PleaseChooseADate",
                        defaultMessage: "Please choose a date"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: `flex-shrink-0 w-4 h-4 ml-3 text-purple-700 duration-300 ease-in-out sm:w-4 sm:h-4 sm:ml-6 group-hover:text-purple-600`,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
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
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_datepicker_default()), {
        renderCustomHeader: ({ date , changeYear , changeMonth , decreaseMonth , increaseMonth , prevMonthButtonDisabled , nextMonthButtonDisabled ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    margin: 10,
                    display: "flex",
                    justifyContent: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        onClick: decreaseMonth,
                        disabled: prevMonthButtonDisabled,
                        children: "<"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                        value: (0,external_date_fns_.getYear)(date),
                        onChange: ({ target: { value  }  })=>changeYear(value)
                        ,
                        children: years.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: option,
                                children: option
                            }, option)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                        value: months[(0,external_date_fns_.getMonth)(date)],
                        onChange: ({ target: { value  }  })=>changeMonth(months.indexOf(value))
                        ,
                        children: months.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: option,
                                children: option
                            }, option)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        onClick: increaseMonth,
                        disabled: nextMonthButtonDisabled,
                        children: ">"
                    })
                ]
            })
        ,
        dateFormat: constant/* FORMAT_DATE_DISPLAY */.eq,
        selected: selected,
        onChange: (date)=>handleChangeDate(date)
        ,
        customInput: /*#__PURE__*/ jsx_runtime_.jsx(ExampleCustomInput, {
            error: error1
        }),
        maxDate: new Date()
    }));
};
/* harmony default export */ const date_picker_custom_header = (DatePickerCustomHeader);

;// CONCATENATED MODULE: ./components/register-form/bus-form.js








const BusForm = ({ classes  })=>{
    const { 0: form , 1: setForm  } = (0,external_react_.useState)({
    });
    const { formatMessage: f  } = (0,external_react_intl_.useIntl)();
    const { 0: selectedOption , 1: setSelectedOption  } = (0,external_react_.useState)(constant/* BUS_SERVICE.twoWay */.ET.twoWay);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { 0: statusForm , 1: setStatusForm  } = (0,external_react_.useState)();
    const { 0: dateOfBirth , 1: setDateOfBirth  } = (0,external_react_.useState)();
    const { 0: startDate , 1: setStartDate  } = (0,external_react_.useState)();
    const { 0: errors , 1: setErrors  } = (0,external_react_.useState)({
    });
    const { 0: checkAgree , 1: setCheckAgree  } = (0,external_react_.useState)(true);
    const handleChangeForm = (e)=>{
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    };
    const handleChangeGrade = (value)=>{
        setForm({
            ...form,
            currentGrade: value
        });
        setErrors({
            ...errors,
            currentGrade: false
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // validate
        if (!dateOfBirth) {
            setErrors({
                ...errors,
                dateOfBirth: true
            });
            return;
        }
        if (!(form === null || form === void 0 ? void 0 : form.currentGrade)) {
            setErrors({
                ...errors,
                currentGrade: true
            });
            return;
        }
        if (!startDate) {
            setErrors({
                ...errors,
                startDate: true
            });
            return;
        }
        if (!checkAgree) {
            return;
        }
        const data = {
            ...form,
            busOption: selectedOption,
            submittedAt: (0,external_date_fns_.format)(Date.now(), constant/* FORMAT_DATETIME_DISPLAY */.YP),
            dateOfBirth: (0,external_date_fns_.format)(dateOfBirth, constant/* FORMAT_DATE_DISPLAY */.eq),
            startDate: (0,external_date_fns_.format)(startDate, constant/* FORMAT_DATE_DISPLAY */.eq)
        };
        setIsLoading(true);
        try {
            const response = await fetch("/api/bus", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const result = await response.json();
            setStatusForm("success");
        } catch (error) {
            console.log("error", error);
        }
        setIsLoading(false);
    };
    // eslint-disable-next-line react/display-name
    const ExampleCustomInput = /*#__PURE__*/ (0,external_react_.forwardRef)(({ value , onClick , error  }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none flex justify-between ${error && "border-red-200"}`,
            onClick: onClick,
            ref: ref,
            children: [
                value ? value : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-purple-700 opacity-70",
                    children: f({
                        id: "Form.PleaseChooseADate",
                        defaultMessage: "Please choose a date"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: `flex-shrink-0 w-4 h-4 ml-3 text-purple-700 duration-300 ease-in-out sm:w-4 sm:h-4 sm:ml-6 group-hover:text-purple-600`,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
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
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            minHeight: "800px"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-2xl font-bold text-purple-900",
                        children: f({
                            id: "Parent.BusServiceRegistration",
                            defaultMessage: "Bus Service Registration"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-purple-800 mt-0.5 text-opacity-90"
                    })
                ]
            }),
            statusForm === "success" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col items-center justify-between mt-12",
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
                className: "mt-8",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "md:grid md:grid-cols-3 md:gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:col-span-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-purple-900 font-medium mt-2",
                                    children: f({
                                        id: "Form.StudentInformation",
                                        defaultMessage: "Student Information"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid sm:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "fullNameStudent",
                                                        className: "ml-0.5 text-purple-900 font-medium text-sm",
                                                        children: [
                                                            f({
                                                                id: "Form.FullName",
                                                                defaultMessage: "Full Name"
                                                            }),
                                                            "*"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        placeholder: f({
                                                            id: "Form.FullName",
                                                            defaultMessage: "Full Name"
                                                        }),
                                                        className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none",
                                                        required: true,
                                                        id: "fullNameStudent",
                                                        name: "fullNameStudent",
                                                        onChange: handleChangeForm
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "dateOfBirth",
                                                        className: "ml-0.5 text-purple-900 font-medium text-sm",
                                                        children: [
                                                            f({
                                                                id: "Form.DateOfBirth",
                                                                defaultMessage: "Date of birth"
                                                            }),
                                                            " ",
                                                            "*"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(date_picker_custom_header, {
                                                        selected: dateOfBirth,
                                                        handleChangeDate: (date)=>{
                                                            setErrors({
                                                                ...errors,
                                                                dateOfBirth: false
                                                            });
                                                            setDateOfBirth(date);
                                                        },
                                                        error: errors === null || errors === void 0 ? void 0 : errors.dateOfBirth
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "grid sm:grid-cols-2 gap-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-6",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(dropdown, {
                                                title: `${f({
                                                    id: "Form.CurrentGrade",
                                                    defaultMessage: "Current Grade"
                                                })} *`,
                                                placeholder: f({
                                                    id: "Form.PleaseSelectAGrade",
                                                    defaultMessage: "Please select a grade"
                                                }),
                                                options: classes,
                                                value: form === null || form === void 0 ? void 0 : form.currentGrade,
                                                handleChange: (value)=>handleChangeGrade(value)
                                                ,
                                                error: errors === null || errors === void 0 ? void 0 : errors.currentGrade
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "border-0 bg-purple-50 text-purple-50 h-0.5 mt-6"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "md:grid md:grid-cols-3 md:gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:col-span-1",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: "text-purple-900 font-medium mt-6",
                                    children: [
                                        f({
                                            id: "Form.StudentParent",
                                            defaultMessage: "Student's Parent"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                        }),
                                        " ",
                                        `/ ${f({
                                            id: "Form.GuardianInformation",
                                            defaultMessage: "Guardian Information"
                                        })}`
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid sm:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "fullNameParent",
                                                        className: "ml-0.5 text-purple-900 font-medium text-sm",
                                                        children: [
                                                            f({
                                                                id: "Form.FullName",
                                                                defaultMessage: "Full Name"
                                                            }),
                                                            " ",
                                                            "*"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "fullNameParent",
                                                        name: "fullNameParent",
                                                        onChange: handleChangeForm,
                                                        required: true,
                                                        type: "text",
                                                        placeholder: f({
                                                            id: "Form.FullName",
                                                            defaultMessage: "Full Name"
                                                        }),
                                                        className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "relationship",
                                                        className: "ml-0.5 text-purple-900 font-medium text-sm",
                                                        children: [
                                                            f({
                                                                id: "Form.RelationshipToTheStudent",
                                                                defaultMessage: "Relationship to the student"
                                                            }),
                                                            " ",
                                                            "*"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "relationship",
                                                        type: "text",
                                                        name: "relationship",
                                                        placeholder: f({
                                                            id: "Form.RelationshipToTheStudent",
                                                            defaultMessage: "Relationship to the student"
                                                        }),
                                                        className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none",
                                                        required: true,
                                                        onChange: handleChangeForm
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
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
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
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
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
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
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
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
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "border-0 bg-purple-50 text-purple-50 h-0.5 mt-6"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "md:grid md:grid-cols-3 md:gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:col-span-1",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: "text-purple-900 font-medium mt-6",
                                    children: [
                                        f({
                                            id: "Form.BusServiceDetail",
                                            defaultMessage: "Bus Service Detail"
                                        }),
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "grid sm:grid-cols-2 gap-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(dropdown, {
                                                options: [
                                                    constant/* BUS_SERVICE.twoWay */.ET.twoWay,
                                                    constant/* BUS_SERVICE.pickup */.ET.pickup,
                                                    constant/* BUS_SERVICE.drop */.ET.drop, 
                                                ],
                                                title: f({
                                                    id: "Form.SelectAnOption",
                                                    defaultMessage: "Select an option"
                                                }),
                                                placeholder: f({
                                                    id: "Form.ChooseAnOption",
                                                    defaultMessage: "Choose an option"
                                                }),
                                                value: selectedOption,
                                                handleChange: (item)=>setSelectedOption(item)
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            selectedOption !== constant/* BUS_SERVICE.drop */.ET.drop && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "pickupAddress",
                                                        className: "ml-0.5 text-purple-900 font-medium text-sm",
                                                        children: [
                                                            f({
                                                                id: "Form.PickUpAddress",
                                                                defaultMessage: "Pick up address"
                                                            }),
                                                            " ",
                                                            "*"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "pickupAddress",
                                                        name: "pickupAddress",
                                                        onChange: handleChangeForm,
                                                        required: true,
                                                        type: "text",
                                                        placeholder: f({
                                                            id: "Form.PickUpAddress",
                                                            defaultMessage: "Pick up address"
                                                        }),
                                                        className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                                                    })
                                                ]
                                            }),
                                            selectedOption != constant/* BUS_SERVICE.pickup */.ET.pickup && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "dropOffAdress",
                                                        className: "ml-0.5 text-purple-900 font-medium text-sm",
                                                        children: [
                                                            f({
                                                                id: "Form.DropOffAddress",
                                                                defaultMessage: "Drop-off address"
                                                            }),
                                                            " ",
                                                            "*"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "dropoffAdress",
                                                        type: "text",
                                                        name: "dropoffAdress",
                                                        placeholder: f({
                                                            id: "Form.DropOffAddress",
                                                            defaultMessage: "Drop-off address"
                                                        }),
                                                        className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none",
                                                        required: true,
                                                        onChange: handleChangeForm
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mt-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                htmlFor: "dateTime",
                                                className: "ml-0.5 text-purple-900 font-medium text-sm",
                                                children: [
                                                    f({
                                                        id: "Form.StartDate",
                                                        defaultMessage: "Start Date"
                                                    }),
                                                    " ",
                                                    "*"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_datepicker_default()), {
                                                selected: startDate,
                                                onChange: (date)=>{
                                                    setErrors({
                                                        ...errors,
                                                        startDate: false
                                                    });
                                                    setStartDate(date);
                                                },
                                                dateFormat: constant/* FORMAT_DATE_DISPLAY */.eq,
                                                customInput: /*#__PURE__*/ jsx_runtime_.jsx(ExampleCustomInput, {
                                                    error: errors === null || errors === void 0 ? void 0 : errors.startDate
                                                }),
                                                minDate: new Date()
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mt-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "checkbox",
                                                value: "",
                                                id: "flexCheckChecked",
                                                checked: checkAgree,
                                                onChange: ()=>setCheckAgree(!checkAgree)
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: "form-check-label text-gray-800 ml-2 text-sm",
                                                htmlFor: "flexCheckChecked",
                                                children: [
                                                    f({
                                                        id: "Form.Checkbox",
                                                        defaultMessage: "We hear by agree to pay tuition and other related school fees by the due date and ensure that our child(ren) and family follow all Blue Sky Acadmy policies and rules."
                                                    }),
                                                    " "
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-end mt-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            className: "text-lg font-semibold text-purple-900 bg-yellow-500 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-yellow-600",
                            children: isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "loading-circle animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6 mr-2"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
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
/* harmony default export */ const bus_form = (BusForm);

;// CONCATENATED MODULE: ./lib/helper.js

const calculateDisableDays = ()=>{
    const startDate = new Date();
    const endDate = (0,external_date_fns_.addDays)(new Date(), 60);
    const disableDays = [];
    let currentDate = startDate;
    while(currentDate <= endDate){
        if (!(0,external_date_fns_.isWednesday)(currentDate)) {
            disableDays.push(currentDate);
        }
        currentDate = (0,external_date_fns_.addDays)(currentDate, 1);
    }
    return disableDays;
};

// EXTERNAL MODULE: ./hooks/useScreenSize.js
var useScreenSize = __webpack_require__(5344);
;// CONCATENATED MODULE: ./components/register-form/exam-form.js










const ExamForm = ()=>{
    const { formatMessage: f  } = (0,external_react_intl_.useIntl)();
    const { isMobile  } = (0,useScreenSize/* useScreenSize */.e)();
    const { 0: form , 1: setForm  } = (0,external_react_.useState)({
    });
    const { 0: reTestOption , 1: setReTestOption  } = (0,external_react_.useState)(constant/* RETEST_OPTIONS.no */.ZD.no);
    const { 0: gender , 1: setGender  } = (0,external_react_.useState)(constant/* GENDER.female */.y7.female);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { 0: statusForm , 1: setStatusForm  } = (0,external_react_.useState)();
    const { 0: dateOfBirth , 1: setDateOfBirth  } = (0,external_react_.useState)();
    const { 0: dateOfExam , 1: setDateOfExam  } = (0,external_react_.useState)();
    const { 0: errors , 1: setErrors  } = (0,external_react_.useState)({
    });
    const handleChangeForm = (e)=>{
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!dateOfBirth) {
            setErrors({
                ...errors,
                dateOfBirth: true
            });
            return;
        }
        if (!dateOfExam) {
            setErrors({
                ...errors,
                dateOfExam: true
            });
            return;
        }
        const data = {
            ...form,
            reTest: reTestOption,
            gender: gender,
            submittedAt: (0,external_date_fns_.format)(Date.now(), "HH:mm:ss dd-MM-yyyy"),
            dateOfBirth: (0,external_date_fns_.format)(dateOfBirth, "dd-MM-yyyy"),
            dateOfExam: (0,external_date_fns_.format)(dateOfExam, "dd-MM-yyyy")
        };
        setIsLoading(true);
        try {
            const response = await fetch("/api/exam", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const result = await response.json();
            setStatusForm("success");
        } catch (error) {
            console.log("error", error);
        }
        setIsLoading(false);
    };
    // eslint-disable-next-line react/display-name
    const ExampleCustomInput = /*#__PURE__*/ (0,external_react_.forwardRef)(({ value , onClick , error  }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none flex justify-between ${error && "border-red-200"}`,
            onClick: onClick,
            ref: ref,
            children: [
                value ? value : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-purple-700 opacity-70",
                    children: isMobile ? f({
                        id: "Form.PleaseChooseDateAndTime",
                        defaultMessage: "Please choose date and time"
                    }) : f({
                        id: "Form.PleaseChooseFrom2PMTo4PMOnEveryWednesday",
                        defaultMessage: "Please choose from 2PM to 4PM on every Wednesday"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: `flex-shrink-0 w-4 h-4 ml-3 text-purple-700 duration-300 ease-in-out sm:w-4 sm:h-4 sm:ml-6 group-hover:text-purple-600`,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
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
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            minHeight: "800px"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-2xl font-bold text-purple-900",
                        children: f({
                            id: "Parent.EntranceExamRegistration",
                            defaultMessage: "Entrance Exam Registration"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-purple-800 mt-0.5 text-opacity-90",
                        children: f({
                            id: "Form.PleaseChooseFrom2PMTo4PMOnEveryWednesday",
                            defaultMessage: "Please choose from 2PM to 4PM on every Wednesday"
                        })
                    })
                ]
            }),
            statusForm === "success" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col items-center justify-between mt-12",
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
                className: "mt-8",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "md:grid md:grid-cols-3 md:gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:col-span-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-purple-900 font-medium mt-2",
                                    children: f({
                                        id: "Form.StudentInformation",
                                        defaultMessage: "Student Information"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid sm:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "fullNameStudent",
                                                        className: "ml-0.5 text-purple-900 font-medium text-sm",
                                                        children: [
                                                            f({
                                                                id: "Form.FullName",
                                                                defaultMessage: "Full Name"
                                                            }),
                                                            "*"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        placeholder: f({
                                                            id: "Form.FullName",
                                                            defaultMessage: "Full Name"
                                                        }),
                                                        className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none",
                                                        required: true,
                                                        id: "fullNameStudent",
                                                        name: "fullNameStudent",
                                                        onChange: handleChangeForm
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "currentGrade",
                                                        className: "ml-0.5 text-purple-900 font-medium text-sm",
                                                        children: [
                                                            f({
                                                                id: "Form.DateOfBirth",
                                                                defaultMessage: "Date of birth"
                                                            }),
                                                            " ",
                                                            "*"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(date_picker_custom_header, {
                                                        selected: dateOfBirth,
                                                        handleChangeDate: (date)=>{
                                                            setErrors({
                                                                ...errors,
                                                                dateOfBirth: false
                                                            });
                                                            setDateOfBirth(date);
                                                        },
                                                        error: errors === null || errors === void 0 ? void 0 : errors.dateOfBirth
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(dropdown, {
                                            options: [
                                                constant/* GENDER.male */.y7.male,
                                                constant/* GENDER.female */.y7.female,
                                                constant/* GENDER.other */.y7.other
                                            ],
                                            title: f({
                                                id: "Form.Gender",
                                                defaultMessage: "Gender"
                                            }),
                                            placeholder: f({
                                                id: "Form.SelectAnOption",
                                                defaultMessage: "Select an option"
                                            }),
                                            value: gender,
                                            handleChange: (item)=>setGender(item)
                                            ,
                                            hasTranslate: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(dropdown, {
                                            options: [
                                                constant/* RETEST_OPTIONS.no */.ZD.no,
                                                constant/* RETEST_OPTIONS.yes */.ZD.yes
                                            ],
                                            title: f({
                                                id: "Form.IsItAReTest",
                                                defaultMessage: "Is it a re-test?"
                                            }),
                                            placeholder: f({
                                                id: "Form.SelectAnOption",
                                                defaultMessage: "Select an option"
                                            }),
                                            value: reTestOption,
                                            handleChange: (item)=>setReTestOption(item)
                                            ,
                                            hasTranslate: true
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid sm:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "dateOfBirth",
                                                        className: "ml-0.5 text-purple-900 font-medium text-sm",
                                                        children: f({
                                                            id: "Form.CurrentSchool",
                                                            defaultMessage: "CurrentSchool"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        placeholder: f({
                                                            id: "Form.NameAddress",
                                                            defaultMessage: "Name, Address"
                                                        }),
                                                        className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none",
                                                        required: true,
                                                        id: "currentSchool",
                                                        name: "currentSchool",
                                                        onChange: handleChangeForm
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "currentGrade",
                                                        className: "ml-0.5 text-purple-900 font-medium text-sm",
                                                        children: [
                                                            f({
                                                                id: "Form.CurrentGrade",
                                                                defaultMessage: "Current Grade"
                                                            }),
                                                            " ",
                                                            "*"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        placeholder: f({
                                                            id: "Form.CurrentGrade",
                                                            defaultMessage: "Current Grade"
                                                        }),
                                                        className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none",
                                                        required: true,
                                                        id: "currentGrade",
                                                        name: "currentGrade",
                                                        onChange: handleChangeForm
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "border-0 bg-purple-50 text-purple-50 h-0.5 mt-6"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "md:grid md:grid-cols-3 md:gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:col-span-1",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: "text-purple-900 font-medium mt-6",
                                    children: [
                                        f({
                                            id: "Form.StudentParent",
                                            defaultMessage: "Student's Parent"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                        }),
                                        " ",
                                        `/ ${f({
                                            id: "Form.GuardianInformation",
                                            defaultMessage: "Guardian Information"
                                        })}`
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid sm:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "fullNameParent",
                                                        className: "ml-0.5 text-purple-900 font-medium text-sm",
                                                        children: [
                                                            f({
                                                                id: "Form.FullName",
                                                                defaultMessage: "Full Name"
                                                            }),
                                                            " ",
                                                            "*"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "fullNameParent",
                                                        name: "fullNameParent",
                                                        onChange: handleChangeForm,
                                                        required: true,
                                                        type: "text",
                                                        placeholder: f({
                                                            id: "Form.FullName",
                                                            defaultMessage: "Full Name"
                                                        }),
                                                        className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "relationship",
                                                        className: "ml-0.5 text-purple-900 font-medium text-sm",
                                                        children: [
                                                            f({
                                                                id: "Form.RelationshipToTheStudent",
                                                                defaultMessage: "Relationship to the student"
                                                            }),
                                                            " ",
                                                            "*"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "relationship",
                                                        type: "text",
                                                        name: "relationship",
                                                        placeholder: f({
                                                            id: "Form.RelationshipToTheStudent",
                                                            defaultMessage: "Relationship to the student"
                                                        }),
                                                        className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none",
                                                        required: true,
                                                        onChange: handleChangeForm
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid sm:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "occupation",
                                                        className: "ml-0.5 text-purple-900 font-medium text-sm",
                                                        children: [
                                                            f({
                                                                id: "Form.Occupation",
                                                                defaultMessage: "Occupation"
                                                            }),
                                                            " ",
                                                            "*"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "occupation",
                                                        name: "occupation",
                                                        onChange: handleChangeForm,
                                                        required: true,
                                                        type: "text",
                                                        placeholder: f({
                                                            id: "Form.Occupation",
                                                            defaultMessage: "Occupation"
                                                        }),
                                                        className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        htmlFor: "company",
                                                        className: "ml-0.5 text-purple-900 font-medium text-sm",
                                                        children: [
                                                            f({
                                                                id: "Form.CompanyAddress",
                                                                defaultMessage: "CompanyAddress"
                                                            }),
                                                            "*"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "company",
                                                        type: "text",
                                                        name: "company",
                                                        placeholder: f({
                                                            id: "Form.CompanyAddress",
                                                            defaultMessage: "Company Address"
                                                        }),
                                                        className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none",
                                                        required: true,
                                                        onChange: handleChangeForm
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid sm:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
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
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
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
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
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
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "email",
                                                        type: "email",
                                                        name: "email",
                                                        placeholder: "Email",
                                                        className: "w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none",
                                                        required: true,
                                                        onChange: handleChangeForm
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "border-0 bg-purple-50 text-purple-50 h-0.5 mt-6"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "md:grid md:grid-cols-3 md:gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:col-span-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-purple-900 font-medium mt-6",
                                    children: f({
                                        id: "Form.EntranceExamDate",
                                        defaultMessage: "Entrance Exam Date"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:col-span-2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mt-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            htmlFor: "dateTime",
                                            className: "ml-0.5 text-purple-900 font-medium text-sm",
                                            children: [
                                                f({
                                                    id: "Form.StartDate",
                                                    defaultMessage: "Start Date"
                                                }),
                                                " ",
                                                "*"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_datepicker_default()), {
                                            selected: dateOfExam,
                                            onChange: (date)=>{
                                                setErrors({
                                                    ...errors,
                                                    dateOfExam: false
                                                });
                                                setDateOfExam(date);
                                            },
                                            showTimeSelect: true,
                                            timeFormat: "HH:mm",
                                            timeInputLabel: "Time:",
                                            dateFormat: "h:mm aa MMMM d, yyyy",
                                            customInput: /*#__PURE__*/ jsx_runtime_.jsx(ExampleCustomInput, {
                                                error: errors === null || errors === void 0 ? void 0 : errors.dateOfExam
                                            }),
                                            minDate: new Date(),
                                            excludeDates: calculateDisableDays(),
                                            maxDate: (0,external_date_fns_.addDays)(new Date(), 60),
                                            minTime: (0,external_date_fns_.setHours)((0,external_date_fns_.setMinutes)(new Date(), 0), 14),
                                            maxTime: (0,external_date_fns_.setHours)((0,external_date_fns_.setMinutes)(new Date(), 0), 16)
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-end mt-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            className: "text-lg font-semibold text-purple-900 bg-yellow-500 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-yellow-600",
                            children: isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "loading-circle animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6 mr-2"
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
/* harmony default export */ const exam_form = (ExamForm);

// EXTERNAL MODULE: ./components/contact-hero/index.js
var contact_hero = __webpack_require__(5900);
;// CONCATENATED MODULE: ./components/register-form/visit-form.js




const VisitForm = ()=>{
    const { 0: form , 1: setForm  } = (0,external_react_.useState)({
    });
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { 0: statusForm , 1: setStatusForm  } = (0,external_react_.useState)();
    const { 0: selectedDate , 1: setSelectedDate  } = (0,external_react_.useState)();
    const { 0: error1 , 1: setError  } = (0,external_react_.useState)(false);
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
            submittedAt: (0,external_date_fns_.format)(Date.now(), "HH:mm:ss dd-MM-yyyy"),
            date: (0,external_date_fns_.format)(selectedDate, "HH:mm:ss dd-MM-yyyy")
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
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(contact_hero/* ContactForm */.t, {
            handleChangeForm: handleChangeForm,
            handleSubmit: handleSubmit,
            isLoading: isLoading,
            status: statusForm,
            selectedDate: selectedDate,
            handleChangeDate: handleChangeDate,
            error: error1
        })
    }));
};
/* harmony default export */ const visit_form = (VisitForm);

;// CONCATENATED MODULE: ./components/register-form/index.js






const SERVICE = {
    school: "school",
    exam: "exam",
    bus: "bus"
};
const DetailForm = ({ type , classes  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "px-4 mt-12 -mb-48 -translate-y-56 lg:mt-20 sm:mt-16 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `w-full ${type === SERVICE.school ? "sm:w-1/2 " : "sm:w-2/3"} mx-auto`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative z-10 w-full px-4 py-10 mx-auto bg-white shadow-xl rounded-3xl lg:mr-0 lg:ml-auto sm:p-16 lg:p-12 xl:p-14",
                children: [
                    type === SERVICE.school && /*#__PURE__*/ jsx_runtime_.jsx(visit_form, {
                    }),
                    type === SERVICE.bus && /*#__PURE__*/ jsx_runtime_.jsx(bus_form, {
                        classes: classes
                    }),
                    type === SERVICE.exam && /*#__PURE__*/ jsx_runtime_.jsx(exam_form, {
                    })
                ]
            })
        })
    }));
};
const RegisterForm = ({ id , tab , classes  })=>{
    const { formatMessage: f  } = (0,external_react_intl_.useIntl)();
    const { 0: currentTab , 1: setCurrentTab  } = (0,external_react_.useState)(tab ?? SERVICE.school);
    (0,external_react_.useEffect)(()=>{
        if (tab) {
            setCurrentTab(tab);
        }
    }, [
        tab
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: id,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "px-4 pt-20 bg-purple-25 sm:pt-28 lg:pt-36 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-screen-xl mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "max-w-2xl mx-auto mb-10 text-center text-purple-900 sm:mb-12 md:mb-20 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold",
                            children: f({
                                id: "Parent.SchoolServiceRegistration",
                                defaultMessage: "School Service Registration"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "flex flex-wrap items-center justify-center -my-2 space-x-2 text-sm font-medium sm:space-x-4 lg:space-x-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "my-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${currentTab === SERVICE.school ? "bg-purple-600 text-white" : "bg-white text-purple-900"} rounded-full hover:bg-purple-500 hover:text-white`,
                                        onClick: ()=>setCurrentTab(SERVICE.school)
                                        ,
                                        children: f({
                                            id: "Parent.SchoolVisit",
                                            defaultMessage: "School Visit"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "my-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${currentTab === SERVICE.bus ? "bg-purple-600 text-white" : "bg-white text-purple-900"} rounded-full hover:bg-purple-500 hover:text-white`,
                                        onClick: ()=>setCurrentTab(SERVICE.bus)
                                        ,
                                        children: f({
                                            id: "Parent.BusService",
                                            defaultMessage: "Bus Service"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "my-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${currentTab === SERVICE.exam ? "bg-purple-600 text-white" : "bg-white text-purple-900"} rounded-full hover:bg-purple-500 hover:text-white`,
                                        onClick: ()=>setCurrentTab(SERVICE.exam)
                                        ,
                                        children: f({
                                            id: "Parent.EntranceExam",
                                            defaultMessage: "Entrance Exam"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-56 bg-purple-25"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DetailForm, {
                type: currentTab,
                classes: classes
            })
        ]
    }));
};
/* harmony default export */ const register_form = (RegisterForm);


/***/ }),

/***/ 6331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useHashFragment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


function useHashFragment() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const onHashChangeStart = (url)=>{
            const hash = window.location.hash;
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "start"
                });
            }
        };
        router.events.on("hashChangeStart", onHashChangeStart);
        return ()=>{
            router.events.off("hashChangeStart", onHashChangeStart);
        };
    }, [
        router.events
    ]);
}


/***/ })

};
;