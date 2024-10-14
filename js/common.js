$(document).ready(function(){

  //모바일 메뉴 열고 닫기
  $(".ham").click(function(){
    $(".mgnb-wrap").animate({right: "0"}, 500, "swing");
  });
  $(".mgnb-close").click(function(){
    $(".mgnb-wrap").animate({right: "-100%"}, 500, "swing");
    $(".m-depth2").hide();
  });

  //모바일 메뉴 .depth2 - 아코디언 탭
  $(".m-depth2").hide();
  $(".mgnb > li").click(function(){
    $(this).children(".m-depth2").slideDown();
    $(this).siblings().children(".m-depth2").slideUp();
  });

  //모바일 메뉴 클릭 색상 변경
  $(".mgnb > li").click(function(){
     $(this).addClass("active");
     $(this).siblings().removeClass("active");
  });

  //모바일 검색창
  $(".m-btn-search").click(function(){
    $(".m-search").animate({right: "0"}, 500, "swing");
  });
  $(".search-close").click(function(){
    $(".m-search").animate({right: "-100%"},500, "swing");
  });

  //PC 메뉴
  $(".depth2, .depth2-bg").hide();

  $(".gnb > li").mouseenter(function(){
    $(".depth2-bg").stop().fadeIn();
    $(this).children(".depth2").stop().fadeIn();
    $(this).siblings().children(".depth2").stop().fadeOut();
  });
  $(".gnb > li").mouseleave(function(){
    $(".depth2-bg").stop().fadeOut();
    $(this).children(".depth2").stop().fadeOut();
  });
  $(".gnb > li:last-child").mouseenter(function(){
    $(".depth2-bg").hide();
  });

  //PC 검색창
  $(".search, .search-bg").hide();
  $(".btn-search").click(function(){
    $(".search, .search-bg").stop().fadeIn();
  });
  $(".search-close").click(function(){
    $(".search, .search-bg").stop().fadeOut();
  });

});//실행틀 끝