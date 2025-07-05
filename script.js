 window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('loader').style.opacity = '0';
                document.getElementById('loader').style.visibility = 'hidden';
            }, 800);
        });

        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            contactForm.reset();
        });

        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'linear-gradient(to right, #1a202c, #2d3748)';
                header.style.padding = '10px 0';
            } else {
                header.style.background = 'linear-gradient(to right, #1a202c, #2d3748)';
                header.style.padding = '15px 0';
            }
        });

        function animateOnScroll() {
            const elements = document.querySelectorAll('.card, .section-title, .hero-content');
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight * 0.8;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animate');
                    if (element.classList.contains('skill-category')) {
                        const skillBars = element.querySelectorAll('.skill-progress');
                        skillBars.forEach(bar => {
                            const width = bar.getAttribute('data-width');
                            bar.style.width = `${width}%`;
                        });
                    }
                }
            });
        }
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);
    
