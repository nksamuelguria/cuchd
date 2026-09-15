const fs = require("fs");
const classMapping = {
    "d-flex": "flex",
    "d-none": "hidden",
    "d-block": "block",
    "d-md-block": "md:block",
    "d-lg-block": "lg:block",
    "d-xl-block": "xl:block",
    "align-items-center": "items-center",
    "align-items-start": "items-start",
    "justify-content-between": "justify-between",
    "justify-content-center": "justify-center",
    "justify-content-end": "justify-end",
    "position-relative": "relative",
    "position-absolute": "absolute",
    "fixed-top": "fixed top-0 left-0 right-0 z-50",
    "text-center": "text-center",
    "text-white": "text-white",
    "text-dark": "text-black",
    "text-capitalize": "capitalize",
    "w-100": "w-full",
    "h-100": "h-full",
    "m-0": "m-0",
    "p-0": "p-0",
    "mt-0": "mt-0",
    "mb-0": "mb-0",
    "ms-auto": "ml-auto",
    "me-2": "mr-2",
    "me-3": "mr-3",
    "ms-2": "ml-2",
    "mb-2": "mb-2",
    "list-unstyled": "list-none",
    "container-fluid": "w-full px-4",
    "container": "container mx-auto px-4",
    "row": "flex flex-wrap -mx-4",
    "col-6": "w-1/2 px-4",
    "col-12": "w-full px-4",
    "col-md-12": "w-full md:w-full px-4",
    "col-xl-2": "w-full xl:w-1/6 px-4",
    "col-xl-5": "w-full xl:w-5/12 px-4",
    "col-xl-10": "w-full xl:w-10/12 px-4",
    "col-xl-3": "w-full xl:w-1/4 px-4",
    "col-lg-3": "w-full lg:w-1/4 px-4",
    "col-lg-6": "w-full lg:w-1/2 px-4",
    "col-lg-4": "w-full lg:w-1/3 px-4",
    "col-lg-9": "w-full lg:w-3/4 px-4",
    "col-lg-12": "w-full lg:w-full px-4",
    "btn": "inline-block px-4 py-2 rounded text-center",
    "btn-primary": "bg-blue-600 text-white",
    "g-0": "m-0 p-0",
    "img-fluid": "max-w-full h-auto",
    "bg-white": "bg-white",
    "rounded": "rounded",
    "shadow": "shadow",
    "border": "border border-gray-300",
    "fw-bold": "font-bold",
    "fw-normal": "font-normal",
    "fw-light": "font-light",
    "fs-1": "text-4xl",
    "fs-2": "text-3xl",
    "fs-3": "text-2xl",
    "fs-4": "text-xl",
    "fs-5": "text-lg",
    "fs-6": "text-base",
    "fst-italic": "italic"
};

let content = fs.readFileSync("src/components/Header.tsx", "utf8");
for (const [bsClass, twClass] of Object.entries(classMapping)) {
    // using regex with negative lookbehind and lookahead to ensure we only match the exact class
    // e.g. \b matches boundary. But hyphen is boundary too? 
    // Wait, \b matches between word char and non-word char. So \bd-flex\b works!
    const regex = new RegExp(`(?<=[\\"\\s])${bsClass}(?=[\\"\\s])`, "g");
    content = content.replace(regex, twClass);
}
fs.writeFileSync("src/components/Header.tsx", content);
console.log("Classes replaced safely!");
