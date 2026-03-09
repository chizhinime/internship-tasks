const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');

// Create overlay for mobile
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

// Toggle sidebar function
function toggleSidebar() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Mobile: slide sidebar in/out
        sidebar.classList.toggle('mobile-open');
        overlay.classList.toggle('active');
        
        // Prevent body scroll when sidebar is open
        if (sidebar.classList.contains('mobile-open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    } else {
        // Desktop/Tablet: collapse/expand
        sidebar.classList.toggle('collapsed');
    }
}

// Toggle button click
toggleBtn.addEventListener('click', toggleSidebar);

// Close sidebar when clicking overlay (mobile)
overlay.addEventListener('click', () => {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Handle window resize
window.addEventListener('resize', () => {
    const isMobile = window.innerWidth <= 768;
    const wasMobile = window.innerWidth > 768;
    
    if (!isMobile) {
        // Switching from mobile to desktop
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset to default desktop state
        if (window.innerWidth <= 1024) {
            sidebar.classList.add('collapsed');
        } else {
            sidebar.classList.remove('collapsed');
        }
    }
    
    if (wasMobile && isMobile) {
        // Switching to mobile
        sidebar.classList.remove('collapsed');
    }
});

// Set initial state based on screen size
if (window.innerWidth <= 1024 && window.innerWidth > 768) {
    sidebar.classList.add('collapsed');
}

// Active link handling (for demo purposes)
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// Optional: Close sidebar when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('mobile-open')) {
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});
