document.addEventListener('DOMContentLoaded', function() {
    const passwordReq = document.querySelector('.password-requirements p');
    const reqList = document.querySelector('.requirements-list');
    const arrowDown = document.querySelector('.arrow-down');
    const arrowUp = document.querySelector('.arrow-up');
    const registrationSection = document.querySelector('.registration-section');
    const registerForm = document.getElementById('register-form');

    passwordReq.addEventListener('click', function() {
        reqList.style.display = reqList.style.display === 'none' ? 'block' : 'none';
        arrowDown.style.display = arrowDown.style.display === 'none' ? 'inline' : 'none';
        arrowUp.style.display = arrowUp.style.display === 'none' ? 'inline' : 'none';
    });

    // Check if form has been submitted before
    if (!localStorage.getItem('formSubmitted')) {
        // Show registration section after 10 seconds
        setTimeout(function() {
            registrationSection.style.display = 'flex';
        }, 5000);
    }

    // Close registration section when clicking outside
    registrationSection.addEventListener('click', function(event) {
        if (event.target === registrationSection) {
            registrationSection.style.display = 'none';
        }
    });

    // Handle form submission
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Process form submission here
        
        // Set flag in localStorage
        localStorage.setItem('formSubmitted', 'true');
        
        // Close the registration section
        registrationSection.style.display = 'none';
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.news-container');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let slideIndex = 0;

    function showSlide(index) {
        const slideWidth = document.querySelector('.news-item').offsetWidth + 30; // 30 for margins
        container.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    prevBtn.addEventListener('click', () => {
        slideIndex = Math.max(slideIndex - 1, 0);
        showSlide(slideIndex);
    });

    nextBtn.addEventListener('click', () => {
        slideIndex = Math.min(slideIndex + 1, container.children.length - 3);
        showSlide(slideIndex);
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.news-container');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let slideIndex = 0;
    const totalSlides = container.children.length - 3;
    let slideInterval;

    function showSlide(index) {
        const slideWidth = document.querySelector('.news-item').offsetWidth + 30; // 30 for margins
        container.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 3000); // Change slide every 5 seconds
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopSlideShow();
        startSlideShow();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopSlideShow();
        startSlideShow();
    });

    // Start the slideshow
    startSlideShow();

    // Pause slideshow on hover
    container.addEventListener('mouseenter', stopSlideShow);
    container.addEventListener('mouseleave', startSlideShow);
});





const testimonials = document.querySelectorAll('.testimonials-box');
const prevBtn = document.querySelector('.prev-testimonial');
const nextBtn = document.querySelector('.next-testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

// Initialize the first testimonial
showTestimonial(currentTestimonial);















































 document.addEventListener('DOMContentLoaded', function() {
    const loginOverlay = document.getElementById('login-overlay');
    
    // Show the overlay when the page loads
    setTimeout(() => {
        loginOverlay.style.display = 'block';
    }, 4000); // Adjust the delay as needed (currently set to 1 second)

    // Hide the overlay when clicking outside the login form
    loginOverlay.addEventListener('click', function(event) {
        if (event.target === loginOverlay) {
            loginOverlay.style.display = 'none';
        }
    });

    // Add a function to hide the overlay (to be called from the login form)
    window.hideLoginOverlay = function() {
        loginOverlay.style.display = 'none';
    };
});







// document.addEventListener('DOMContentLoaded', function() {
//     const menuIcon = document.querySelector('.menu-icon');
//     const closeIcon = document.querySelector('.close-icon');
//     const navLinks = document.querySelector('.nav-links');
//     const dropdowns = document.querySelectorAll('.dropdown');
  
//     menuIcon.addEventListener('click', function() {
//       navLinks.classList.add('active');
//     });
  
//     closeIcon.addEventListener('click', function() {
//       navLinks.classList.remove('active');
//     });
  
//     dropdowns.forEach(dropdown => {
//       dropdown.addEventListener('click', function() {
//         this.classList.toggle('active');
//       });
//     });
//   });
















document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
  
    menuIcon.addEventListener('click', function() {
      navLinks.classList.add('active');
    });
  
    closeIcon.addEventListener('click', function() {
      navLinks.classList.remove('active');
      // Close all dropdowns when closing the menu
      dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    });
  
    dropdowns.forEach(dropdown => {
      const dropbtn = dropdown.querySelector('.dropbtn');
      
      dropbtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (window.innerWidth <= 768) {
          // Close other dropdowns
          dropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
              otherDropdown.classList.remove('active');
            }
          });
          
          // Toggle current dropdown
          dropdown.classList.toggle('active');
        }
      });
    });
  });

  


  
  
  