const fs = require("fs");

const classMapping = {
    // Leftover Grid
    "col-3": "w-1/4 px-4",
    "col-sm-6": "sm:w-1/2 px-4",
    "col-lg-5": "lg:w-5/12 px-4",
    "col-xl-8": "xl:w-2/3 px-4",
    
    // Leftover Flex & Alignment
    "align-self-center": "self-center",
    "justify-content-center": "justify-center",
    "justify-content-around": "justify-around",
    "justify-content-between": "justify-between",
    "align-items-center": "items-center",
    "d-inline-flex": "inline-flex",
    "d-inline-block": "inline-block",

    // Leftover Spacing
    "ms-1": "ml-1",
    "ms-3": "ml-3",
    "ms-4": "ml-4",
    "ms-5": "ml-5",
    "me-1": "mr-1",
    "me-2": "mr-2",
    "me-3": "mr-3",
    "me-4": "mr-4",
    "me-5": "mr-5",
    "mt-1": "mt-1",
    "mt-5": "mt-5",
    "mb-1": "mb-1",
    "mb-5": "mb-5",
    "pt-1": "pt-1",
    "pt-2": "pt-2",
    "pt-5": "pt-5",
    "pb-1": "pb-1",
    "pb-2": "pb-2",
    "pb-5": "pb-5",
    
    // Display
    "d-flex": "flex",
    "d-none": "hidden",
    "d-block": "block",
    "d-sm-none": "sm:hidden",
    "d-sm-block": "sm:block",
    "d-lg-none": "lg:hidden",
    "d-xl-none": "xl:hidden",
    
    // Misc
    "btn-close": "relative w-4 h-4 p-2 box-content bg-transparent border-0 opacity-50 cursor-pointer"
};

const filesToUpdate = ["src/components/Header.tsx", "src/components/Hero.tsx", "src/components/Footer.tsx"];

for (const file of filesToUpdate) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, "utf8");
        for (const [bsClass, twClass] of Object.entries(classMapping)) {
            const regex = new RegExp(`(?<=[\\"\\s])${bsClass}(?=[\\"\\s])`, "g");
            content = content.replace(regex, twClass);
        }
        // Cleanup duplicates that might have occurred
        content = content.replace(/flex flex-wrap flex-wrap/g, "flex flex-wrap");
        content = content.replace(/flex flex/g, "flex");
        content = content.replace(/px-4 px-4/g, "px-4");
        content = content.replace(/hidden hidden/g, "hidden");
        fs.writeFileSync(file, content);
        console.log(`Classes replaced in ${file}!`);
    }
}
