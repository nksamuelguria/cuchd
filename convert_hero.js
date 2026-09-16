const fs = require('fs');
let html = fs.readFileSync('hero.html', 'utf8');

// Handle PHP includes
html = html.replace(/<\?php include\('includes\/registration-end-date\.php'\); \?>/g, '<span className="end_date">Registration End Date (Phase-II): 20<sup>th</sup> September 2026</span>');

// Convert class to className
html = html.replace(/class=/g, 'className=');

// Convert style="background-image: url('...');" to style={{backgroundImage: "url('...')"}}
html = html.replace(/style="background-image:\s*url\('([^']+)'\);?"/g, "style={{backgroundImage: \"url('/$1')\"}}");
html = html.replace(/style="width:(\d+)px!important;?"/g, "style={{width: '$1px'}}");
html = html.replace(/style="width:(\d+)px\s*!important"/g, "style={{width: '$1px'}}");

// Replace img tags to be self closing if not already
html = html.replace(/<img([^>]*?)(?<!\/)>/g, "<img$1 />");
html = html.replace(/<source([^>]*?)(?<!\/)>/g, "<source$1 />");

// Replace fetchpriority with fetchPriority
html = html.replace(/fetchpriority/g, 'fetchPriority');

// wrap in a component
let jsx = `
"use client";
import React, { useEffect } from 'react';
import Script from 'next/script';

export default function Hero() {
  useEffect(() => {
    // We assume jQuery and Flickity are loaded globally in layout.tsx via Script tags.
    // Wait a bit for them to be ready, or check if window.$ is available.
    const initFlickity = () => {
      if (window.$ && window.$.fn.flickity) {
        window.$('.hero-place-slider').flickity({
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            prevNextButtons: false,
            fade: true,
            draggable: false,
            wrapAround: true
        });

        window.$('.heroSlider').flickity({
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            prevNextButtons: false,
            autoPlay: 3000,
            pauseAutoPlayOnHover: false,
            fade: true,
            asNavFor: '.hero-place-slider',
            wrapAround: true,
            draggable: false
        });
        
        window.$('.another-one').flickity({
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            prevNextButtons: false,
            asNavFor: '.hero-place-slider',
            fade: true,
            draggable: false,
            wrapAround: true
        });
      } else {
        setTimeout(initFlickity, 100);
      }
    };
    initFlickity();
  }, []);

  return (
    <>
      <style>{\`
        .end_date {
            background: #AE141A;
            padding: 6px 8px;
            display: inline-block;
            font-size: 12px;
            line-height: 14px;
            border-radius: 6px;
            color: #fff;
            text-transform: capitalize;
            margin-top: 10px;
        }
      \`}</style>
      ${html}
    </>
  );
}
`;

fs.writeFileSync('src/components/Hero.tsx', jsx);
