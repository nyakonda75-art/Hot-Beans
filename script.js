// Handle standard form alerts
document.querySelectorAll("form").forEach(form => {
  if (form.id !== 'review-form') {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Submission successful!");
      form.reset();
    });
  }
});

// Dynamic Review System
const reviewForm = document.getElementById('review-form');
if (reviewForm) {
  reviewForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('reviewer-name').value;
    const text = document.getElementById('reviewer-text').value;
    const list = document.getElementById('review-list');
    
    const item = document.createElement('div');
    item.className = 'review-item';
    item.innerHTML = `<h4>${name}</h4><p>"${text}"</p>`;
    
    list.prepend(item);
    this.reset();
  });
}
