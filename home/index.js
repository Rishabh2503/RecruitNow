// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll animations
window.addEventListener('scroll', revealElements);

function revealElements() {
  const revealElements = document.querySelectorAll('.reveal');

  for (let i = 0; i < revealElements.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = revealElements[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      revealElements[i].classList.add('active');
    }
  }
}
document.getElementById('get-started-btn').addEventListener('click', function() {
  window.location.href = '../Candidate/candidate.html'; 
});