function detectAndRedirect() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad/.test(userAgent)) {
        // 检测到手机或平板设备，跳转到手机专属页面
        window.location.href = 'mobile-cpdd.html';
    }
}

// 可以选择在页面加载完成后自动执行检测函数
window.onload = detectAndRedirect;
