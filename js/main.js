// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Animation
const navbar = document.querySelector('nav');
gsap.to(navbar, {
    scrollTrigger: {
        start: 'top top',
        end: '+=50',
        toggleClass: { targets: navbar, className: 'glass' }
    }
});

// Hero Section Animation
gsap.from('.hero h1', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

gsap.from('.hero p', {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.5
});

gsap.from('.hero button', {
    duration: 1,
    scale: 0.5,
    opacity: 0,
    ease: 'back.out(1.7)',
    delay: 1,
    stagger: 0.2
});

// Course Cards Data
const courses = [
    {
        title: 'Quantum Computing Basics',
        category: 'Technology',
        level: 'Intermediate',
        duration: '8 weeks',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3',
        progress: 75
    },
    {
        title: 'Neural Interface Design',
        category: 'Neuroscience',
        level: 'Advanced',
        duration: '12 weeks',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-4.0.3',
        progress: 30
    },
    {
        title: 'Cybersecurity Fundamentals',
        category: 'Security',
        level: 'Beginner',
        duration: '6 weeks',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3',
        progress: 90
    }
];

// Generate Course Cards
function generateCourseCards() {
    const courseGrid = document.querySelector('#courses .grid');
    courseGrid.innerHTML = courses.map(course => `
        <div class="course-card glass p-6 rounded-xl relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-cover rounded-lg mb-4">
            <h3 class="text-xl font-orbitron font-bold mb-2">${course.title}</h3>
            <div class="flex justify-between mb-2">
                <span class="text-cyber-blue">${course.category}</span>
                <span class="text-cyber-pink">${course.level}</span>
            </div>
            <div class="text-sm text-gray-400 mb-4">${course.duration}</div>
            <div class="progress-bar" style="--progress: ${course.progress}%"></div>
            <button class="mt-4 w-full py-2 bg-dark border border-cyber-blue/50 rounded-lg font-orbitron text-sm hover:bg-cyber-blue/10 transition-all duration-300">
                Enroll Now
            </button>
        </div>
    `).join('');

    // Animate Course Cards
    gsap.from('.course-card', {
        scrollTrigger: {
            trigger: '#courses',
            start: 'top center'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    
    // Animate the transition
    gsap.to('body', {
        backgroundColor: document.documentElement.classList.contains('dark') ? '#050505' : '#ffffff',
        color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000',
        duration: 0.5
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: target,
                offsetY: 80
            },
            ease: 'power2.inOut'
        });
    });
});

// Mobile Menu Toggle
const mobileMenuButton = document.querySelector('nav button');
const mobileMenu = document.querySelector('nav .hidden');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    generateCourseCards();
}); 