/* Adobe Target – Edge Delivery safe */

(function () {
  function alloyQueue(...args) {
    (window.alloy.q = window.alloy.q || []).push(args);
  }

  window.alloy = alloyQueue;

  const s = document.createElement('script');
  s.src = 'https://cdn1.adoberesources.net/alloy/2.14.0/alloy.min.js';
  s.async = true;

  s.onload = () => {
    window.alloy('configure', {
      datastreamId: '78186df0-137a-4df7-9ba5-831a9a646847',
      orgId: 'O8F361935D7FA1A0A495FCF@AdobeOrg',
      defaultConsent: 'in',
    });

    window.alloy('sendEvent', {
      renderDecisions: true,
      personalization: {
        defaultPersonalizationEnabled: true,
      },
      xdm: {
        web: {
          webPageDetails: {
            URL: location.href,
            name: document.title,
          },
        },
      },
    });
  };

  s.onerror = () => console.error('Alloy failed to load');
  document.head.appendChild(s);
})();
