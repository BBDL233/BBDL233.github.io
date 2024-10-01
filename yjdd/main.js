// 手机端跳转
(function() {
    // 首先检查当前页面的URL是否包含'cpdd.html'
    if (window.location.href.includes('cpdd.html')) {
        // 如果是cpdd.html页面，继续检测用户代理是否为移动设备
        if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
            // 如果是移动设备，重定向到mobile-cpdd.html页面
            window.location.href = "mobile-cpdd.html";
        }
    }
    // 如果不是cpdd.html页面，则不执行任何重定向操作
})();


// 返回顶部按钮

var header = document.querySelector('header');
var backToTopButton = document.getElementById('backToTop');

// 当用户滚动页面时执行函数
window.onscroll = function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var headerHeight = header.offsetHeight;

  if (scrollPosition > headerHeight) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

// 当用户点击按钮时，平滑滚动到页面顶部
backToTopButton.onclick = function() {
  // 兼容写法
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

