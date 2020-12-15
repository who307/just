
// add event listener on load
window.addEventListener('load', function () {

  // 메인화면
  document.querySelector('#home-text').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
  });
// 인트로화면
  document.querySelector('#intro-text').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#intro').scrollIntoView({ behavior: 'smooth' });
  });
  // 포트폴리오화면
  document.querySelector('#portfolio-text').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
  });
  // 컨택 화면
  document.querySelector('#contactUs-text').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#contactUs').scrollIntoView({ behavior: 'smooth' });
  });
});

$(function(){
  var menu = $('.menu-div'); //헤더를 변수에 넣기 
  var menuList = $('.menu-list');
  var page = $('#intro'); //색상이 변할 부분 
	//inputmain
  var pageOffsetTop = page.offset().top; //색상 변할 부분의 top값 구하기
  $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = page.offset().top;
  });
    
  $(window).on('scroll', function(){
    if($(window).scrollTop() >= pageOffsetTop) { // 스크롤이 page보다 밑에 내려가면
      menu.addClass('scrollMenu') // 로고 클래스 히든css 추가
      menuList.addClass('rowList')
      
       //클래스 추가
    } else { // 스크롤 올릴 때
      menu.removeClass('scrollMenu')
      menuList.removeClass('rowList')
    }
  });
});

