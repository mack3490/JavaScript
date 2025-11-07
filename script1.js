<<<<<<< HEAD
// Simple contact form alert
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
=======
// Lightbox functionality
const images = document.querySelectorAll('.lightbox-img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.querySelector('.close');

// When an image is clicked
images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImage.src = img.src;
  });
});

// Close the lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
>>>>>>> a538494144db02d4db1b315da0e158a1dd530f97
});
