const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf8');

content = content.replace(/className="([^"]*)"/g, (match, classes) => {
    let classArr = classes.split(' ');
    
    // Process classes
    if (classArr.includes('nav-item')) {
        if (!classArr.includes('relative')) classArr.push('relative');
    }
    if (classArr.includes('nav-link')) {
        if (!classArr.includes('block')) classArr.push('block', 'px-4', 'py-2');
    }
    if (classArr.includes('btn')) {
        if (!classArr.includes('inline-block')) classArr.push('inline-block', 'px-4', 'py-2', 'rounded', 'text-center');
    }
    if (classArr.includes('btn-primary')) {
        if (!classArr.includes('bg-[#fa0d0d]')) classArr.push('bg-[#fa0d0d]', 'text-white', 'hover:bg-[#d00b0b]', 'border-0');
    }
    if (classArr.includes('img-fluid')) {
        if (!classArr.includes('max-w-full')) classArr.push('max-w-full', 'h-auto');
    }

    return `className="${classArr.join(' ')}"`;
});

fs.writeFileSync('src/components/Header.tsx', content);
