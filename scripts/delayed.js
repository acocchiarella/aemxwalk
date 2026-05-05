// add delayed functionality here
/* === Adobe Web SDK (Target) – EDS safe === */

function alloyQueue(...args) {
  (window.alloy.q = window.alloy.q || []).push(args);
}

window.alloy = alloyQueue;

const alloyScript = document.createElement('script');
alloyScript.src = 'https://cdn1.adoberesources.net/alloy/2.14.0/alloy.min.js';
alloyScript.async = true;

alloyScript.onload = () => {
  window.alloy('configure', {
    edgeConfigId: '78186df0-137a-4df7-9ba5-831a9a646847',
    orgId: 'O8F361935D7FA1A0A495FCF@AdobeOrg',
    debugEnabled: true,
  });

  window.alloy('sendEvent', {
    decisionScopes: ['__view__'],
    renderDecisions: true,
  });
};

document.head.appendChild(alloyScript);
