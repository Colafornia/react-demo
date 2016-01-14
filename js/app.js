window.onload = function() {
  animateLogo();
  updateSliderControl();
  animateRobot();
  addSmoothScrolling();
};
// 使用 onscroll 回调函数来更新 slider
window.onscroll = function() {
  // ...
  updateSliderControl();
}
var $logo = document.getElementById("react-logo");
function animateLogo(){
	TweenMax.fromTo("#react-logo",1, {
      // from
      css: {
        y: "-50px",
      }
    },{
      // to
      css: {
        y: "50px",
      },

      // option to repeat animation forever
      repeat: -1,

      // option to reverse the animation and rerun
      yoyo: true,
    
      ease: Power2.easeInOut,
    }
  );
}
var deg360 = 2*Math.PI;
function animateRobot(){
	var t = new TimelineMax({yoyo: true, repeat: -1});
	t.to('#android-robot',1,{rotation: "-=15deg"})
	 .to('#android-robot',1,{rotation: "+=15deg"})
	 .to('#android-robot',1,{rotation: "+=15deg"})
	 .to('#android-robot',1,{rotation: "-=15deg"})
}
function updateSliderControl() {
  // 获得所有的 slider 链接
  var links = document.querySelectorAll("#slider-control a")

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    // 获取被链接指向的部分
    var section = document.querySelector(link.getAttribute("href"));
    var sectionTop = section.offsetTop;
    var sectionBottom =  sectionTop + section.offsetHeight;

    // 检查 window.scrollY 是否在这部分中
    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}
//添加点击事件
function addSmoothScrolling() {
	var links = document.querySelectorAll("#slider-control a");

	for(var i = 0; i < links.length; i++) {
		
			var link = links[i];
			link.addEventListener("click",function(event) {
				event.preventDefault();
				var href = this.getAttribute("href");
				scrollToElement(href);

		});
	}
}
//页面滚动动画
function scrollToElement(element) {
  element = document.querySelector(element);
  console.log(element.offsetTop);
  var topOfElement = element.offsetTop;

  TweenMax.to(window,1,{
    scrollTo: {
      y: topOfElement,
    },

    ease: Power2.easeInOut,
  });
}