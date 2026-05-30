// Scroll reveal using IntersectionObserver
// Small nav shadow on scroll
(function(){
  function ready(fn){if(document.readyState!='loading')fn();else document.addEventListener('DOMContentLoaded',fn)}
  ready(function(){
    const revealEls = document.querySelectorAll('.card, .hero, .section, h1, h2, .grid, nav');
    revealEls.forEach(el=>el.classList.add('reveal'));
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('active');
          io.unobserve(entry.target);
        }
      })
    },{threshold:0.12});
    revealEls.forEach(el=>io.observe(el));

    const nav = document.querySelector('nav');
    if(nav){
      window.addEventListener('scroll',()=>{
        if(window.scrollY>8){nav.style.boxShadow='0 10px 30px rgba(2,6,23,0.45)'}else nav.style.boxShadow='none';
      });
    }
  });
})();
