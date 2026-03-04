// 1. MODAL LOGIC (Global Scope)
function openModal(fileUrl) {
    const modal = document.getElementById('certModal');
    const frame = document.getElementById('certFrame');
    const fallback = document.getElementById('mobile-fallback');
    const downloadLink = document.getElementById('download-link');
    if (modal && frame) {
        frame.src = fileUrl;
        modal.style.display = "block";

        if (window.innerWidth < 768) {
            fallback.style.display = "block";
        } else {
            fallback.style.display = "none";
        }
    }
}

function closeModal() {
    const modal = document.getElementById('certModal');
    const frame = document.getElementById('certFrame');
    if (modal && frame) {
        modal.style.display = "none";
        frame.src = "";
    }
}

// Close modal if user clicks outside the box
window.onclick = function(event) {
    const modal = document.getElementById('certModal');
    if (event.target == modal) {
        closeModal();
    }
}

// 2. DOM CONTENT LOADED LOGIC
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const root = document.documentElement;
    
    // Theme Switcher Logic
    if (toggleBtn) {
        // Force an initial state if none exists
        if (!root.getAttribute('data-theme')) {
            root.setAttribute('data-theme', 'dark');
        }

        toggleBtn.addEventListener('click', function() {
            // Get the current theme from the <html> element
            const currentTheme = htmlTag.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            root.setAttribute('data-theme', newTheme);
            
            // Update button text for feedback
            toggleBtn.textContent = newTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
            
            console.log("Active Theme:", newTheme);
        });
    }
});