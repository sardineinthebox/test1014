$(document).ready(function(){

  AOS.init();


  //공통 서브메뉴 탭 구현
  $(".sub-tab-btn li").eq(0).addClass("active");
  $(".sub-tab-content > ul > li").eq(0).show();
  
  $(".sub-tab-btn li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  
    var indexNum = $(this).index();
      $(".sub-tab-content > ul > li").eq(indexNum).fadeIn().siblings().hide();
  });


  //product sort 버튼 클릭 시 sort-list 나오게 하기
  $(".sort-box").hide();

  $("button").click(function(){
    $(".sort-box").stop().slideToggle();
  });

  //support 탭 입력 양식
  $('.as-tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.as-tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
});



});//실행 틀 끝