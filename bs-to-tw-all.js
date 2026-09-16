const fs = require("fs");

const classMapping = {
    // Layout & Flex
    "d-flex": "flex",
    "d-none": "hidden",
    "d-block": "block",
    "d-md-block": "md:block",
    "d-md-none": "md:hidden",
    "d-md-flex": "md:flex",
    "d-lg-block": "lg:block",
    "d-lg-none": "lg:hidden",
    "d-lg-flex": "lg:flex",
    "d-xl-block": "xl:block",
    "d-xl-none": "xl:hidden",
    "d-xl-flex": "xl:flex",
    "align-items-center": "items-center",
    "align-items-start": "items-start",
    "align-items-end": "items-end",
    "justify-content-between": "justify-between",
    "justify-content-center": "justify-center",
    "justify-content-end": "justify-end",
    "justify-content-start": "justify-start",
    "flex-column": "flex-col",
    "flex-wrap": "flex-wrap",
    "position-relative": "relative",
    "position-absolute": "absolute",
    "fixed-top": "fixed top-0 left-0 right-0 z-50",
    
    // Spacing (m, p)
    "m-0": "m-0",
    "p-0": "p-0",
    "mt-0": "mt-0",
    "mb-0": "mb-0",
    "ms-auto": "ml-auto",
    "me-auto": "mr-auto",
    "m-auto": "m-auto",
    "me-2": "mr-2",
    "me-3": "mr-3",
    "ms-2": "ml-2",
    "ms-3": "ml-3",
    "mb-2": "mb-2",
    "mb-3": "mb-3",
    "mb-4": "mb-4",
    "mt-2": "mt-2",
    "mt-3": "mt-3",
    "mt-4": "mt-4",
    "mt-lg-4": "lg:mt-4",
    "py-2": "py-2",
    "py-3": "py-3",
    "py-4": "py-4",
    "py-5": "py-5",
    "px-2": "px-2",
    "px-3": "px-3",
    "px-4": "px-4",
    "pt-3": "pt-3",
    "pt-4": "pt-4",
    "pb-3": "pb-3",
    "pb-4": "pb-4",

    // Typography
    "text-center": "text-center",
    "text-start": "text-left",
    "text-end": "text-right",
    "text-white": "text-white",
    "text-dark": "text-black",
    "text-capitalize": "capitalize",
    "text-uppercase": "uppercase",
    "fw-bold": "font-bold",
    "fw-normal": "font-normal",
    "fw-light": "font-light",
    "fs-1": "text-4xl",
    "fs-2": "text-3xl",
    "fs-3": "text-2xl",
    "fs-4": "text-xl",
    "fs-5": "text-lg",
    "fs-6": "text-base",
    "fst-italic": "italic",
    "list-unstyled": "list-none",

    // Sizing
    "w-100": "w-full",
    "h-100": "h-full",
    
    // Grid
    "container-fluid": "w-full px-4",
    "container": "container mx-auto px-4",
    "row": "flex flex-wrap -mx-4",
    "col": "flex-1 px-4",
    "col-4": "w-1/3 px-4",
    "col-6": "w-1/2 px-4",
    "col-12": "w-full px-4",
    "col-md-3": "md:w-1/4 px-4",
    "col-md-4": "md:w-1/3 px-4",
    "col-md-6": "md:w-1/2 px-4",
    "col-md-8": "md:w-2/3 px-4",
    "col-md-12": "md:w-full px-4",
    "col-lg-2": "lg:w-1/6 px-4",
    "col-lg-3": "lg:w-1/4 px-4",
    "col-lg-4": "lg:w-1/3 px-4",
    "col-lg-6": "lg:w-1/2 px-4",
    "col-lg-7": "lg:w-7/12 px-4",
    "col-lg-8": "lg:w-2/3 px-4",
    "col-lg-9": "lg:w-3/4 px-4",
    "col-lg-12": "lg:w-full px-4",
    "col-xl-2": "xl:w-1/6 px-4",
    "col-xl-3": "xl:w-1/4 px-4",
    "col-xl-4": "xl:w-1/3 px-4",
    "col-xl-5": "xl:w-5/12 px-4",
    "col-xl-6": "xl:w-1/2 px-4",
    "col-xl-7": "xl:w-7/12 px-4",
    "col-xl-10": "xl:w-10/12 px-4",
    "col-xl-12": "xl:w-full px-4",
    
    // Components & Utilities
    "btn": "inline-block px-4 py-2 rounded text-center cursor-pointer",
    "btn-primary": "bg-[#fa0d0d] text-white hover:bg-[#d00b0b] border-none",
    "g-0": "m-0 p-0",
    "g-2": "-mx-2", // rough approx
    "img-fluid": "max-w-full h-auto",
    "bg-white": "bg-white",
    "bg-transparent": "bg-transparent",
    "rounded": "rounded",
    "rounded-circle": "rounded-full",
    "shadow": "shadow",
    "border": "border border-gray-300",
    "border-0": "border-0",
    "border-bottom": "border-b border-gray-300",
    
    // Collapse & Nav (Approximations for Tailwind without JS)
    // Actually, .collapse hides content normally in Bootstrap. Let's make it hidden by default.
    "collapse": "hidden",
    // .navbar-collapse is hidden by default (via .collapse) but flex on expand breakpoint.
    // In Header.tsx it's navbar-expand-xl, so it should be flex on xl.
    "navbar-collapse": "w-full flex-grow basis-full items-center xl:flex xl:w-auto xl:basis-auto",
    "navbar-expand-xl": "flex-nowrap justify-start",
    "navbar": "relative flex items-center justify-between py-2 px-4",
    "nav-item": "relative",
    "nav-link": "block px-4 py-2",
    "navbar-toggler": "px-3 py-1 border border-transparent rounded bg-transparent",
    "navbar-toggler-icon": "inline-block w-[1.5em] h-[1.5em] bg-center bg-no-repeat bg-contain"
};

const filesToUpdate = ["src/components/Header.tsx", "src/components/Hero.tsx", "src/components/Footer.tsx"];

for (const file of filesToUpdate) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, "utf8");
        for (const [bsClass, twClass] of Object.entries(classMapping)) {
            const regex = new RegExp(`(?<=[\\"\\s])${bsClass}(?=[\\"\\s])`, "g");
            content = content.replace(regex, twClass);
        }
        fs.writeFileSync(file, content);
        console.log(`Classes replaced in ${file}!`);
    }
}
