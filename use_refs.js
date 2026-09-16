const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Add useRef import
content = content.replace(/import React, { useEffect } from 'react';/, "import React, { useEffect, useRef } from 'react';");

// Add refs to the component
content = content.replace(/export default function Hero\(\) {/, "export default function Hero() {\n  const heroPlaceSliderRef = useRef(null);\n  const heroSliderRef = useRef(null);\n  const anotherOneRef = useRef(null);\n");

// Replace jQuery selectors with refs in initFlickity
content = content.replace(/\('\.hero-place-slider'\)/g, "(heroPlaceSliderRef.current)");
content = content.replace(/\('\.heroSlider'\)/g, "(heroSliderRef.current)");
content = content.replace(/\('\.another-one'\)/g, "(anotherOneRef.current)");

// Add refs to elements
content = content.replace(/className="heroSlider h-100"/, 'className="heroSlider h-100" ref={heroSliderRef}');
content = content.replace(/className="hero-place-slider"/, 'className="hero-place-slider" ref={heroPlaceSliderRef}');
content = content.replace(/className="another-one"/, 'className="another-one" ref={anotherOneRef}');

fs.writeFileSync('src/components/Hero.tsx', content);
