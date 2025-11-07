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
});
