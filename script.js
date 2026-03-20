const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.mobile-nav-links a');

// Toggle Menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = hamburger.classList.contains('active') ? 'hidden' : 'auto';
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});










let currentSlideIndex = 0;
const slides = document.querySelectorAll('.premium-hero');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');

    currentSlideIndex = index;
}

function autoSwap() {
    let next = (currentSlideIndex + 1) % slides.length;
    showSlide(next);
}

/* 🔥 FIXED TIMING */
let slideInterval = setInterval(autoSwap, 3500);

/* MANUAL CONTROL */
function currentSlide(index) {
    clearInterval(slideInterval);
    showSlide(index);

    /* 🔥 SAME TIMING (IMPORTANT) */
    slideInterval = setInterval(autoSwap, 3500);
}









/* section 2 */

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});








/* section 3 */

const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Intersection Observer to trigger when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            startCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statsObserver.observe(document.querySelector('.stats-section'));







/* team js */

const teamCards = document.querySelectorAll('.team-card');

const teamObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Staggered fade in
            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }, index * 150); 
            teamObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

teamCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease-out";
    teamObserver.observe(card);
});






/* road map */

const consoleFeed = document.getElementById('console-feed');
const logMessages = [
    "> INBOUND CONNECTION: 192.168.1.1",
    "> ENCRYPTION_LAYER_3 ACTIVE",
    "> PACKET INSPECTION COMPLETE",
    "> THREAT_LEVEL: 0% - SECURE",
    "> FIREWALL STATUS: OPTIMAL",
    "> NEURAL_ENGINE SCANNING...",
    "> BYPASS ATTEMPT NEUTRALIZED",
    "> NODE_12: AUTHENTICATED"
];

function addLog() {
    const randomMsg = logMessages[Math.floor(Math.random() * logMessages.length)];
    const p = document.createElement('p');
    p.className = 'log-line';
    p.innerText = randomMsg;
    
    consoleFeed.appendChild(p);

    // Keep only the last 7 lines to prevent overflow
    if (consoleFeed.children.length > 7) {
        consoleFeed.removeChild(consoleFeed.children[0]);
    }
}

// Trigger log updates every 2.5 seconds
setInterval(addLog, 2500);





/* testimonial js */

const testimonials = [
    {
        quote: '"The neural-link integration has reduced our lateral movement threats to zero within the first quarter."',
        name: "Marcus Thorne",
        role: "Chief Technology Officer, Global Bank"
    },
    {
        quote: '"Unparalleled visibility. We can now track packet data at a granular level we never thought possible."',
        name: "Sarah Chen",
        role: "Lead Architect, TechFlow Systems"
    },
    {
        quote: '"CyberShield isn\'t just a tool; it\'s our primary defense layer. The automated response is lightning fast."',
        name: "David Ross",
        role: "Operations Manager, SecureCloud Inc"
    }
];

const quoteEl = document.getElementById('active-quote');
const nameEl = document.getElementById('active-name');
const roleEl = document.getElementById('active-role');
const selectors = document.querySelectorAll('.selector-item');

selectors.forEach(item => {
    item.addEventListener('click', () => {
        const index = item.getAttribute('data-index');
        
        // Update Active Class
        selectors.forEach(s => s.classList.remove('active'));
        item.classList.add('active');

        // Trigger Glitch and Swap
        quoteEl.classList.add('glitch-active');
        
        setTimeout(() => {
            quoteEl.innerText = testimonials[index].quote;
            nameEl.innerText = testimonials[index].name;
            roleEl.innerText = testimonials[index].role;
            quoteEl.classList.remove('glitch-active');
        }, 300);
    });
});




/* faq js */

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        
        // Close other items (Optional - remove if you want multiple open)
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) otherItem.classList.remove('active');
        });

        item.classList.toggle('active');
    });
});