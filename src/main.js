// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});




// animation
const animation = ScrollReveal({
  distance: '30px',
  duration: 1500,  
  delay: 400,
  reset: true
});

animation.reveal('.scroll_btm', {
  delay: 200,
  origin: 'bottom'
});

animation.reveal('.scroll_top', {
  delay: 200,
  origin: 'top'
});

animation.reveal('.scroll_left', {
  delay: 200,
  origin: 'left'
});

animation.reveal('.scroll_right', {
  delay: 200,
  origin: 'right'
});