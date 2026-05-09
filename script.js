document.querySelectorAll("form").forEach(f => {
    f.addEventListener("submit", e => {
        if(f.id !== 'review-form') {
            e.preventDefault(); alert("Sent!"); f.reset();
        }
    });
});
const rf = document.getElementById('review-form');
if (rf) {
    rf.addEventListener('submit', e => {
        e.preventDefault();
        const n = document.getElementById('reviewer-name').value;
        const t = document.getElementById('reviewer-text').value;
        const l = document.getElementById('review-list');
        const d = document.createElement('div');
        d.style = "background:white; padding:15px; margin-top:10px; border-radius:8px; text-align:left; border-left:5px solid #d4a373;";
        d.innerHTML = `<strong>${n}</strong><p>${t}</p>`;
        l.prepend(d); rf.reset();
    });
}
