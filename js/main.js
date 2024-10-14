
// 메인 배너 슬라이드 구현
var mb = new Swiper(".mb", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//new 제품 슬라이드 구현
var prd_new = new Swiper(".prd-new", {
  slidesPerView: 1,
  spaceBetween: 5,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    360: {
      slidesPerView: 2.5,
      spaceBetween: 5,
    },
    1200: {
      slidesPerView: 5.5,
      spaceBetween: 20,
    },
  }
});

$(document).ready(function(){

  AOS.init();

  // new 카드 배너 하트 클릭시 색상 변경
  $(".fav").click(function(){
    $(this).toggleClass("active");
  });

  //explore-prd .p-txt 마우스 오버 시 .p-img에 모션 주기
  $("#explore-prd .prd-box .p-txt").mouseenter(function(){
    $(this).siblings(".p-img").addClass("active");
  });
  $("#explore-prd .prd-box .p-txt").mouseleave(function(){
    $(this).siblings(".p-img").removeClass("active");
  });

  //탭 메뉴
  $(".prd-tap-con li").hide();

  $(".prd-tap-btn li").eq(0).addClass("active");
  $(".prd-tap-con li").eq(0).show();
  
  $(".prd-tap-btn li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  
    var indexNum = $(this).index();
      $(".prd-tap-con li").eq(indexNum).fadeIn().siblings().hide();
  });
});//실행틀 끝