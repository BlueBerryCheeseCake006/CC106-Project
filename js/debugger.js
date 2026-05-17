(function siteDebugger(){
  // Keep disabled by default in normal browsing; enable manually if needed.
  var debugEnabled = window.localStorage && window.localStorage.getItem('enableSiteDebugger') === '1';
  if (!debugEnabled) return;

  function isTidioElement(el){
    if (!el) return false;

    var id = (el.id || '').toLowerCase();
    var cls = (typeof el.className === 'string' ? el.className : '').toLowerCase();
    var src = (el.src || '').toLowerCase();
    var attrs = (el.getAttribute && (
      (el.getAttribute('data-testid') || '') + ' ' +
      (el.getAttribute('name') || '') + ' ' +
      (el.getAttribute('title') || '')
    ).toLowerCase()) || '';

    return (
      id.indexOf('tidio') !== -1 ||
      cls.indexOf('tidio') !== -1 ||
      src.indexOf('tidio') !== -1 ||
      attrs.indexOf('tidio') !== -1 ||
      !!el.closest('[id*="tidio"], [class*="tidio"], iframe[src*="tidio"]') ||
      !!el.querySelector('iframe[src*="tidio"]')
    );
  }

  function scan(){
    try{
      var vArea = window.innerWidth * window.innerHeight;
      document.querySelectorAll('*').forEach(function(el){
        try{
          if (isTidioElement(el)) return;

          var cs = window.getComputedStyle(el);
          var zi = parseInt(cs.zIndex) || 0;
          if((cs.position === 'fixed' || cs.position === 'absolute') && zi >= 500){
            var r = el.getBoundingClientRect();
            var area = r.width * r.height;
            if(area > 0.15 * vArea){
              el.style.pointerEvents = 'none';
              el.style.zIndex = 800;
              console.log('siteDebugger: neutralized overlay', el.tagName, el.id || '', el.className || '', 'origZ=', zi);
            }
          }
        }catch(e){}
      });

      // Ensure header/footer anchors are clickable
      var anchors = Array.from(document.querySelectorAll('header a, footer a'));
      anchors.forEach(function(a){
        try{
          var r = a.getBoundingClientRect();
          if(r.width === 0 || r.height === 0) return;
          var cx = r.left + r.width/2, cy = r.top + r.height/2;
          var top = document.elementFromPoint(cx, cy);
          if(top && top !== a && top !== document.body && top !== document.documentElement){
            var csTop = window.getComputedStyle(top);
            if(csTop.pointerEvents !== 'none'){
              top.style.pointerEvents = 'none';
              var origZ = parseInt(csTop.zIndex) || 0;
              if(origZ >= 800) top.style.zIndex = 799;
              console.log('siteDebugger: uncovered anchor', (a.textContent||a.href||'').trim(), 'removed pointer from', top.tagName, top.id || '', top.className || '');
            }
          }
        }catch(e){}
      });
    }catch(e){
      console.error('siteDebugger scan error', e);
    }
  }
  document.addEventListener('DOMContentLoaded', function(){ scan(); var t = setInterval(scan, 1000); setTimeout(function(){ clearInterval(t); }, 15000); });
  window.__runSiteDebugger = scan;
})();
