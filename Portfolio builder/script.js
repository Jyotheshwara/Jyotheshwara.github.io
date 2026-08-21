const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.timeline-card, .project-card, .impact-grid > div, .skill-list > div').forEach((item) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(18px)';
  item.style.transition = 'opacity .65s ease, transform .65s ease';
  observer.observe(item);
});

const revealStyles = document.createElement('style');
revealStyles.textContent = '.is-visible{opacity:1!important;transform:translateY(0)!important}';
document.head.appendChild(revealStyles);
