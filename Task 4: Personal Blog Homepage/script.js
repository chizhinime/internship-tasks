// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileToggle.querySelector('i').classList.remove('fa-times');
        mobileToggle.querySelector('i').classList.add('fa-bars');
    });
});

// Search Toggle
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');

searchToggle.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
});

// Category Filter Functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const categoryPills = document.querySelectorAll('.category-pill');
const posts = document.querySelectorAll('.post-card');

function filterPosts(category) {
    posts.forEach(post => {
        if (category === 'all' || post.dataset.category === category) {
            post.classList.remove('hidden');
        } else {
            post.classList.add('hidden');
        }
    });

    // Show/hide no results message
    const visiblePosts = document.querySelectorAll('.post-card:not(.hidden)');
    let noResults = document.querySelector('.no-results');
    
    if (visiblePosts.length === 0) {
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.innerHTML = `
                <i class="fa-regular fa-face-frown"></i>
                <h3>No posts found</h3>
                <p>Try adjusting your filter or search criteria</p>
            `;
            document.getElementById('postsGrid').appendChild(noResults);
        }
    } else if (noResults) {
        noResults.remove();
    }

    // Reset to first page of pagination
    currentPage = 1;
    updatePagination();
}

// Filter buttons click
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.dataset.filter;
        filterPosts(category);

        // Update hero category pills
        categoryPills.forEach(pill => {
            if (pill.dataset.category === category) {
                pill.classList.add('active');
            } else {
                pill.classList.remove('active');
            }
        });
    });
});

// Hero category pills click
categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
        categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        
        const category = pill.dataset.category;
        
        // Update filter buttons
        filterBtns.forEach(btn => {
            if (btn.dataset.filter === category) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        filterPosts(category);
    });
});

// Search Functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function searchPosts() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // If search is empty, show current category filter
        const activeFilter = document.querySelector('.filter-btn.active');
        filterPosts(activeFilter.dataset.filter);
        return;
    }

    posts.forEach(post => {
        const title = post.dataset.title.toLowerCase();
        const category = post.dataset.category;
        const content = post.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            post.classList.remove('hidden');
        } else {
            post.classList.add('hidden');
        }
    });

    // Show/hide no results message
    const visiblePosts = document.querySelectorAll('.post-card:not(.hidden)');
    let noResults = document.querySelector('.no-results');
    
    if (visiblePosts.length === 0) {
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.innerHTML = `
                <i class="fa-regular fa-face-frown"></i>
                <h3>No results found</h3>
                <p>No posts match "${searchTerm}"</p>
            `;
            document.getElementById('postsGrid').appendChild(noResults);
        }
    } else if (noResults) {
        noResults.remove();
    }
}

searchBtn.addEventListener('click', searchPosts);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchPosts();
    }
});

// Pagination
const pageBtns = document.querySelectorAll('.page-btn');
const postsPerPage = 6;
let currentPage = 1;

function updatePagination() {
    const visiblePosts = document.querySelectorAll('.post-card:not(.hidden)');
    const totalPages = Math.ceil(visiblePosts.length / postsPerPage);
    
    // Hide all posts
    visiblePosts.forEach((post, index) => {
        if (index >= (currentPage - 1) * postsPerPage && index < currentPage * postsPerPage) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });

    // Update pagination buttons
    pageBtns.forEach((btn, index) => {
        if (index < totalPages) {
            btn.style.display = 'flex';
            if (index + 1 === currentPage) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        } else {
            btn.style.display = 'none';
        }
    });

    // Show/hide next button
    const nextBtn = document.querySelector('.page-btn.next');
    if (nextBtn) {
        if (currentPage >= totalPages) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'flex';
        }
    }
}

pageBtns.forEach((btn, index) => {
    if (!btn.classList.contains('next')) {
        btn.addEventListener('click', () => {
            currentPage = index + 1;
            updatePagination();
        });
    }
});

// Next button
const nextBtn = document.querySelector('.page-btn.next');
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        const visiblePosts = document.querySelectorAll('.post-card:not(.hidden)');
        const totalPages = Math.ceil(visiblePosts.length / postsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
        }
    });
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    alert(`Thanks for subscribing with: ${email}. You'll receive our newsletter soon!`);
    newsletterForm.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Active link highlighting based on scroll position
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initialize pagination
updatePagination();

// Load more animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.post-card, .featured-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.5s ease';
    observer.observe(el);
});

// Dynamic year in footer
document.querySelector('.footer-bottom p').innerHTML = 
    `&copy; ${new Date().getFullYear()} DevBlog. All rights reserved.`;

// Close search bar when clicking outside
document.addEventListener('click', (e) => {
    if (!searchBar.contains(e.target) && !searchToggle.contains(e.target)) {
        searchBar.classList.remove('active');
    }
});

// Prevent clicks inside search bar from closing it
searchBar.addEventListener('click', (e) => {
    e.stopPropagation();
});
