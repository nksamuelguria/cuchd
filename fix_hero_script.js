const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Replace the Script tag inside the div
const oldScript = /<Script src="https:\/\/portal-widgets\.lsqportal\.com\/assets\/bootstrap-widget\.js"[\s\S]*?<\/Script>/;
content = content.replace(oldScript, '');

// Add the logic inside useEffect
const useEffectStart = "useEffect(() => {";
const widgetLogic = `
    const widgetDiv = document.getElementById("lsq-portal-widget-26c2650d-9b4a-11ef-8bcb-06998e7502ab-bcb99b86-42be-40c9-a606-fd96a6e329f8");
    if (widgetDiv && !widgetDiv.querySelector("script")) {
      const script = document.createElement("script");
      script.src = "https://portal-widgets.lsqportal.com/assets/bootstrap-widget.js";
      script.setAttribute("data-widget-id", "26c2650d-9b4a-11ef-8bcb-06998e7502ab");
      script.setAttribute("data-version-id", "bcb99b86-42be-40c9-a606-fd96a6e329f8");
      script.setAttribute("data-formjs", "https://forms.lsqportal.com/r21/js/lsq.form.js");
      script.setAttribute("data-url", "https://portal-widgets.lsqportal.com");
      script.charset = "utf-8";
      script.onload = (event) => {
        if ((window as any)['___lsq-portal-widget-helpers___']) {
          (window as any)['___lsq-portal-widget-helpers___'].bootstrapLSQWidget({ target: script });
        }
      };
      widgetDiv.appendChild(script);
    }
`;

content = content.replace(useEffectStart, useEffectStart + widgetLogic);

fs.writeFileSync('src/components/Hero.tsx', content);
