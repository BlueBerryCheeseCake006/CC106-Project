(function initTidioLauncherOnly() {
  // Queue handlers even if the Tidio API is not ready yet.
  window.tidioChatApi = window.tidioChatApi || {};
  if (typeof window.tidioChatApi.on !== "function") {
    window.tidioChatApi.on = function () {
      window.tidioChatApi._q = window.tidioChatApi._q || [];
      window.tidioChatApi._q.push(arguments);
    };
  }

  var hasCollapsedAfterReady = false;

  function keepLauncherCollapsed() {
    if (!window.tidioChatApi) return;

    if (typeof window.tidioChatApi.display === "function") {
      window.tidioChatApi.display(true);
    }

    if (hasCollapsedAfterReady) return;

    // Force the panel closed on every page load; users can open it manually.
    if (typeof window.tidioChatApi.close === "function") {
      window.tidioChatApi.close();
    }

    if (typeof window.tidioChatApi.minimize === "function") {
      window.tidioChatApi.minimize();
    }

    hasCollapsedAfterReady = true;
  }

  window.tidioChatApi.on("ready", keepLauncherCollapsed);

  // Fallback for slow networks or delayed API availability.
  var attempts = 0;
  var timer = setInterval(function () {
    attempts += 1;
    if (!hasCollapsedAfterReady) {
      keepLauncherCollapsed();
    }

    if (hasCollapsedAfterReady || attempts >= 20) {
      clearInterval(timer);
    }
  }, 150);
})();
