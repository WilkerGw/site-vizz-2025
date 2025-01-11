function scrollCarousel(sectionId, amount) {
    const carousel = document.getElementById(`carousel${sectionId}`);
    carousel.scrollBy({ left: amount, behavior: 'smooth' });
  }