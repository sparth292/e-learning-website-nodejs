// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Animate Page Load
window.addEventListener('DOMContentLoaded', () => {
    // Animate Video Player
    gsap.from('.glass', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.2
    });

    // Animate Syllabus Items
    gsap.from('.border-l-2', {
        duration: 0.8,
        x: -50,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.5
    });
});

// Quiz Interaction
const quizForm = document.querySelector('.glass:nth-child(2)');
const submitButton = quizForm.querySelector('button');
const radioInputs = quizForm.querySelectorAll('input[type="radio"]');

submitButton.addEventListener('click', () => {
    const selectedAnswer = Array.from(radioInputs).find(input => input.checked);
    
    if (!selectedAnswer) {
        // Shake animation if no answer selected
        gsap.to(submitButton, {
            x: [-10, 10, -10, 10, 0],
            duration: 0.5,
            ease: 'power2.out'
        });
        return;
    }

    // Correct answer animation (Qubit is correct)
    if (selectedAnswer.nextElementSibling.textContent.trim() === 'Qubit') {
        gsap.to(submitButton, {
            backgroundColor: '#00ff00',
            scale: 1.1,
            duration: 0.3,
            yoyo: true,
            repeat: 1
        });

        // Update progress bar
        const progressBar = document.querySelector('.progress-bar');
        gsap.to(progressBar, {
            '--progress': '70%',
            duration: 1,
            ease: 'power2.out'
        });
    } else {
        // Wrong answer animation
        gsap.to(submitButton, {
            backgroundColor: '#ff0000',
            scale: 1.1,
            duration: 0.3,
            yoyo: true,
            repeat: 1
        });
    }
});

// Hover animations for quiz options
radioInputs.forEach(input => {
    const label = input.parentElement;
    
    label.addEventListener('mouseenter', () => {
        gsap.to(label, {
            x: 10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    label.addEventListener('mouseleave', () => {
        gsap.to(label, {
            x: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Dark Mode Toggle (same as main.js)
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    
    gsap.to('body', {
        backgroundColor: document.documentElement.classList.contains('dark') ? '#050505' : '#ffffff',
        color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000',
        duration: 0.5
    });
});

// Mock Video Player Interaction
const videoPlayer = document.querySelector('.aspect-w-16');
let isPlaying = false;

videoPlayer.addEventListener('click', () => {
    if (!isPlaying) {
        // Replace loader with play button
        videoPlayer.innerHTML = `
            <div class="w-full h-full flex items-center justify-center cursor-pointer">
                <svg class="w-24 h-24 text-cyber-blue opacity-75 hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        `;
        isPlaying = true;
    }
}); 