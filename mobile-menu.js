// Minimal mobile menu placeholder
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.mobile-toggle');
  if (!btn) return;
  btn.addEventListener('click', function(){
    document.body.classList.toggle('mobile-open');
  });
});
