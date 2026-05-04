document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Hamburger Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Optional: Animate the hamburger bars to an 'X'
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('change'));
        });
    }

    // 2. Review System Logic
    const reviewForm = document.getElementById('review-form');
    const reviewList = document.getElementById('review-list');

    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get the user inputs
            const nameInput = document.getElementById('reviewer-name');
            const textInput = document.getElementById('reviewer-text');

            // Create the visual card
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review-card');
            
            // Add content to the card
            reviewDiv.innerHTML = `
                <strong style="color: #ff9900; font-size: 1.1rem;">${nameInput.value}</strong>
                <p style="margin-top: 5px;">${textInput.value}</p>
                <small style="color: #888;">Posted just now</small>
            `;

            // Add the new review to the top of the list
            reviewList.prepend(reviewDiv);

            // Clear the form fields
            reviewForm.reset();
            
            // Visual feedback
            alert("Thanks for your review!");
        });
    }

    // 3. Generic Form Handling (for Contact and Careers)
    const genericForm = document.querySelector('form:not(#review-form)');
    if (genericForm) {
        genericForm.addEventListener('submit', (e) => {
            // Check if it's NOT the review form we already handled
            if(e.target.id !== 'review-form') {
                e.preventDefault();
                alert("Form submitted! The Hot Beans team will contact you soon.");
                genericForm.reset();
            }
        });
    }
});