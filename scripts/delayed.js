function alloyQueue(...args) {
  (window.alloy.q = window.alloy.q || []).push(args);
}

window.alloy = alloyQueue;

window.addEventListener('load', () => {
  const s = document.createElement('script');
  s.src = 'https://cdn1.adoberesources.net/alloy/2.14.0/alloy.min.js';
  s.async = true;

  s.onload = () => {
    window.alloy('configure', {
      datastreamId: '78186df0-137a-4df7-9ba5-831a9a646847',
      orgId: 'O8F361935D7FA1A0A495FCF@AdobeOrg',
      defaultConsent: 'in'
    });

    window.alloy('sendEvent', {
      renderDecisions: true,
      personalization: {
        decisionScopes: ['__view__']
      }
    });
  };

  document.head.appendChild(s);
});
