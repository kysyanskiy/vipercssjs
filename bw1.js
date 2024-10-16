window.onload = function() {
    let userAgent = navigator.userAgent;
    let browserName = navigator.appName;
    let browserVersion = navigator.appVersion;
    let output = "Браузер: " + browserName + ", Версія: " + browserVersion + ", UserAgent: " + userAgent;
    document.write(output);
};