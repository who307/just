
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
  // scroll to bottom
  document.querySelector('.fa-arrow-circle-down').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
  });
  // scroll to top
  document.querySelector('.fa-arrow-circle-up').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
  });
});
