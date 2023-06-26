exports.id = 758;
exports.ids = [758];
exports.modules = {

/***/ 8758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": () => (/* reexport */ Main),
  "e": () => (/* reexport */ GALLERY_IMAGE_DATA)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./components/ArtGallery/styles.css
var styles = __webpack_require__(33011);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/ArtGallery/Header.tsx




const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Welcome to My Art Gallery"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: "Here are a few pieces that I'm particularly proud of! Hopefully, I'll add more here soon."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "see-more",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Click here to see more:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.flickr.com/photos/134613954@N05/?fbclid=PAAabcKScn207bJmYBSxfh5Umy7phlvSpgeZPVTdSVCiuyn7UrzqjY-KjhhDI",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "flickr",
                            src: "/flickr.png",
                            alt: "flickr",
                            width: "20",
                            height: "20"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.instagram.com/sofaluo_art/?hl=en",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/instagram.png",
                            alt: "instagram",
                            width: "22",
                            height: "22"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ArtGallery_Header = (Header);

// EXTERNAL MODULE: ./node_modules/react-markdown/lib/react-markdown.js + 124 modules
var react_markdown = __webpack_require__(36072);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Dialog/index.js
var Dialog = __webpack_require__(33429);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(78195);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(17877);
;// CONCATENATED MODULE: ./components/ArtGallery/GalleryImage.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const GalleryImage = ({ url , title , award , description , selected  })=>{
    // We need to register that an image has been selected from the home page and also only open the modal once due to the selection
    const [isFirstRender, setIsFirstRender] = (0,react_.useState)(true);
    const [open, setOpen] = (0,react_.useState)(selected);
    (0,react_.useEffect)(()=>{
        if (isFirstRender && selected) {
            setOpen(true);
            setIsFirstRender(false);
        }
    }, [
        isFirstRender,
        selected,
        setOpen
    ]);
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "img-container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "gallery-image",
                onClick: handleOpen,
                src: url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
                open: open,
                onClose: handleClose,
                maxWidth: "lg",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "dialog-container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "dialog-header",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "close-button",
                                    onClick: handleClose,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                        icon: free_solid_svg_icons/* faXmark */.g82,
                                        size: "lg"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "dialog-img-wrapper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "dialog-img",
                                src: url
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Description"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "description",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_markdown/* ReactMarkdown */.D, {
                                        children: `${description ?? "Coming soon!"}`
                                    })
                                })
                            ]
                        }),
                        award && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Notes"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_markdown/* ReactMarkdown */.D, {
                                    children: award
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const ArtGallery_GalleryImage = (GalleryImage);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/ArtGallery/Main.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const ArtGallery = ()=>{
    const [anchor, setAnchor] = (0,react_.useState)(undefined);
    (0,react_.useEffect)(()=>{
        if (!anchor) {
            setAnchor(window?.location.hash);
        }
    }, [
        window?.location.hash,
        anchor
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: "Back"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ArtGallery_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "gallery-container",
                children: GALLERY_IMAGE_DATA.map((image)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(ArtGallery_GalleryImage, {
                        url: image.url,
                        title: image.title,
                        award: image.award,
                        description: image.description,
                        formattingStyle: image.formattingStyle,
                        selected: decodeURIComponent(anchor ?? "") === `#${image.title}`
                    });
                })
            })
        ]
    });
};
/* harmony default export */ const Main = (ArtGallery);

;// CONCATENATED MODULE: ./components/ArtGallery/galleryImageData.tsx
const GALLERY_IMAGE_DATA = [
    {
        url: "https://live.staticflickr.com/567/21603103036_a4df0078b7_b.jpg",
        formattingStyle: 0,
        title: "Vengeance",
        award: `- featured on the Tubmlr homepage in July 2015 
- appeared on Parallel Ink, May 2015. Link [here](https://parallelink.tumblr.com/post/120269348404/vengeance-forgotten-and-conscious-choice-by)`
    },
    {
        url: "https://live.staticflickr.com/738/21629342585_93c7ddfd3f_b.jpg",
        formattingStyle: 0,
        title: "The Pursuit of Knowledge",
        award: `- appeared on Vine Leaves, Issue 16. Link [here](https://issuu.com/vineleaves/docs/vine_leaves_issue_16_online_final_0a7c4e567825cf/1)
- appeared on The Best of Vine Leaves Literary Journal 2015
- Honorable Mention, Western Region, National Scholastic Art and Writing Awards 2015
- gifted to my 10th grade English teacher who inspired me to draw this after reading Frankenstein by Mary Shelley`
    },
    {
        url: "https://live.staticflickr.com/659/21441227690_eb0e8b1a2e_b.jpg",
        formattingStyle: 0,
        title: "Forgotten",
        award: "- appeared on Parallel Ink, May 2015. Link [here](https://parallelink.tumblr.com/post/120269348404/vengeance-forgotten-and-conscious-choice-by)"
    },
    {
        url: "https://live.staticflickr.com/677/21442317899_b101521fcc_b.jpg",
        formattingStyle: 0,
        title: "Fallen",
        award: `- appeared on Vine Leaves, Issue 16. Link [here](https://issuu.com/vineleaves/docs/vine_leaves_issue_16_online_final_0a7c4e567825cf/1)
- appeared on The Best of Vine Leaves Literary Journal 2015
- Honorable Mention, Western Region, National Scholastic Art and Writing Awards 2015`
    },
    {
        url: "https://live.staticflickr.com/5685/21442314589_aa3bee5a2c_b.jpg",
        formattingStyle: 0,
        title: "Conscious Choice",
        award: "- appeared on Parallel Ink, May 2015. Link [here](https://parallelink.tumblr.com/post/120269348404/vengeance-forgotten-and-conscious-choice-by)"
    },
    {
        url: "https://live.staticflickr.com/652/21442326179_1eebeb1aba_c.jpg",
        formattingStyle: 1,
        title: "Me",
        award: "- appeared on The Grief Diaries, 4th issue. Link [here](www.thegriefdiaries.org/art-by-sophia-luo)"
    },
    {
        url: "https://live.staticflickr.com/5803/21008140513_67f55d75a1_c.jpg",
        formattingStyle: 1,
        title: "The Last",
        award: "- appeared on The Grief Diaries, 4th issue. Link [here](www.thegriefdiaries.org/art-by-sophia-luo)"
    },
    {
        url: "https://live.staticflickr.com/640/22214509858_8816e980e5_c.jpg",
        formattingStyle: 2,
        title: "(Untitled)"
    },
    {
        url: "https://live.staticflickr.com/590/21629331725_a5cf0eb0ed_c.jpg",
        formattingStyle: 1,
        title: "Happy Days",
        award: "- gifted to my high school college counselor"
    },
    {
        url: "https://live.staticflickr.com/764/21008125593_1aed8d0187_c.jpg",
        formattingStyle: 1,
        title: "DNA: Do Not Abandon",
        award: `- appeared on The Grief Diaries, 4th issue. Link [here](www.thegriefdiaries.org/art-by-sophia-luo)
- Judge's Recognition for Theme, The Museum of Los Gatos Art Exhibition, 2015`
    },
    {
        url: "https://live.staticflickr.com/683/21629323515_0349f3b2f4_c.jpg",
        formattingStyle: 1,
        title: "Captive",
        award: `- appeared on Vine Leaves, Issue 16. Link [here](https://issuu.com/vineleaves/docs/vine_leaves_issue_16_online_final_0a7c4e567825cf/1)
- appeared on The Best of Vine Leaves Literary Journal 2015 Honorable Mention, Western Region, National Scholastic Art and Writing Awards 2015`
    },
    {
        url: "https://live.staticflickr.com/770/21560102359_fdfb4ffbab_h.jpg",
        formattingStyle: 0,
        title: "Sketchbook Study - The Body"
    },
    {
        url: "https://live.staticflickr.com/759/21560085799_2781cded43_h.jpg",
        formattingStyle: 0,
        title: "Sketchbook Study - Architecture"
    },
    {
        url: "https://live.staticflickr.com/672/21559090958_1fe7d804ff_c.jpg",
        formattingStyle: 1,
        title: "My Math Teacher",
        award: "- gifted to my high school Multivarible Calculus teacher"
    },
    {
        url: "https://live.staticflickr.com/5798/21124342394_b78cebd2a8_c.jpg",
        formattingStyle: 1,
        title: "My English Teacher",
        award: "- gifted to my high school college school counselor"
    },
    {
        url: "https://live.staticflickr.com/603/21124278294_5c77bc9534_b.jpg",
        formattingStyle: 0,
        title: "Change",
        award: "- gifted to high school AP Calculus BC teacher"
    },
    {
        url: "https://live.staticflickr.com/569/21560091139_1a3ecd22f6_c.jpg",
        formattingStyle: 1,
        title: "Study of a Bust in the Late Classical Style"
    },
    {
        url: "https://live.staticflickr.com/574/21442312899_9af08e2443_c.jpg",
        formattingStyle: 1,
        title: "Bound",
        award: `- appeared on Vine Leaves, Issue 16. Link [here](https://issuu.com/vineleaves/docs/vine_leaves_issue_16_online_final_0a7c4e567825cf/1)
- appeared on The Best of Vine Leaves Literary Journal 2015`
    }
];

;// CONCATENATED MODULE: ./components/ArtGallery/index.tsx




/***/ }),

/***/ 33011:
/***/ (() => {



/***/ })

};
;