// Vercel Speed Insights initialization
// This script will be automatically loaded by Vercel when deployed

(function() {
  // Initialize the Speed Insights queue
  window.si = window.si || function () {
    (window.siq = window.siq || []).push(arguments);
  };

  // Create and inject the Speed Insights script
  const script = document.createElement('script');
  script.src = '/_vercel/speed-insights/script.js';
  script.defer = true;
  script.setAttribute('data-sdkn', '@vercel/speed-insights');
  script.setAttribute('data-sdkv', '1.0.0');
  
  script.onerror = function() {
    console.log('[Vercel Speed Insights] Script will be automatically injected when deployed to Vercel.');
  };
  
  document.head.appendChild(script);
})();
