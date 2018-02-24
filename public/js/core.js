// Mobile menu
document.querySelector('.burger').onclick = function () {
  var nav = document.querySelector('nav')
  if (nav.classList.contains('active')) {
    nav.classList.remove('active')
  } else {
    nav.classList.add('active')
  }
}

// Tracker
var _paq = _paq || [];
_paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
_paq.push(["setCookieDomain", "*.andreineculaesei.com"]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//track.andrei.network/";
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  _paq.push(['setSiteId', '2']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();
