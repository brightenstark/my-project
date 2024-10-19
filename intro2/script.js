document.addEventListener("DOMContentLoaded", () => {
    const panels = document.querySelectorAll('.panel, .in');
    panels.forEach(panel => {
        panel.style.opacity = 0;
        panel.style.transform = 'translateY(20px)';
        setTimeout(() => {
            panel.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            panel.style.opacity = 1;
            panel.style.transform = 'translateY(0)';
        }, 100);
    });
});
