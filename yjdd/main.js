if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    window.location = "mobile-cpdd.html";
}

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

