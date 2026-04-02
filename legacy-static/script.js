/*=============== EXPANDED LIST ===============*/

const navExpand = document.getElementById("nav-expand"),
  navExpandList = document.getElementById("nav-expand-list"),
  navExpandIcon = document.getElementById("nav-expand-icon");

navExpand.addEventListener("click", () => {
  // Expand list
  navExpandList.classList.toggle("show-list");

  // Rotate icon
  navExpandIcon.classList.toggle("rotate-icon");
});

document.querySelector(".nav__expand-list").addEventListener("click", () => {
  navExpandList.classList.toggle("show-list");
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__list a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*================== DARK LIGHT THEME ==================*/

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic

if(selectedTheme) {
    //If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button

themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== Typewriter Effect ===============*/

const typedText = document.querySelector(".typed-txt");
const texts = ["Om Prajapati.", "MERN Developer.", "YouTuber."];
let currentIndex = 0;
const typingDelay = 100; // Delay between each character when typing
const erasingDelay = 50; // Delay between each character when erasing
const newTextDelay = 2000; // Delay before starting to erase
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[currentIndex];

    if (isDeleting) {
        // Remove characters
        typedText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add characters
        typedText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    // Determine the delay for the next iteration
    let typeSpeed = isDeleting ? erasingDelay : typingDelay;

    // If word is complete
    if (!isDeleting && charIndex === currentText.length) {
        // Make pause at end
        typeSpeed = newTextDelay;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        // Move to next word
        currentIndex = (currentIndex + 1) % texts.length;
    }

    setTimeout(type, typeSpeed);
}

// Start the typing effect when page loads
document.addEventListener("DOMContentLoaded", () => {
  type();
});

/*=============== Show More/Less Functionality ===============*/
const showMoreBtn = document.querySelector('.show-more-btn');
const showMoreText = document.querySelector('.show-more-text');
const hiddenProject1 = document.querySelector('.hidden-project-1');
const hiddenProject2 = document.querySelector('.hidden-project-2');
const hiddenProject3 = document.querySelector('.hidden-project-3');

// Only add event listener if the button exists
if (showMoreBtn && showMoreText) {
    showMoreBtn.addEventListener('click', () => {
        // Only toggle elements that exist
        if (hiddenProject1) {
            hiddenProject1.classList.toggle('show');
        }
        if (hiddenProject2) {
            hiddenProject2.classList.toggle('show');
        }
        if (hiddenProject3) {
            hiddenProject3.classList.toggle('show');
        }
        
        showMoreBtn.classList.toggle('active');
        
        // Check which projects are currently shown
        const project1Shown = hiddenProject1 ? hiddenProject1.classList.contains('show') : false;
        const project2Shown = hiddenProject2 ? hiddenProject2.classList.contains('show') : false;
        const project3Shown = hiddenProject3 ? hiddenProject3.classList.contains('show') : false;
        
        // Count how many projects exist and are shown
        const existingProjects = [hiddenProject1, hiddenProject2, hiddenProject3].filter(Boolean);
        const shownProjects = [project1Shown, project2Shown, project3Shown].filter(Boolean);
        
        if (existingProjects.length > 0 && shownProjects.length === existingProjects.length) {
            showMoreText.textContent = 'Show Less';
        } else {
            showMoreText.textContent = 'Show More';
        }
    });
}

/*=============== RESUME DOWNLOAD ===============*/

document.addEventListener('DOMContentLoaded', function() {
  const resumeDownloadBtn = document.querySelector('.resume-download-btn');
  
  // Single event listener with enhanced download handling
  resumeDownloadBtn.addEventListener('click', function() {
      try {
          // Add loading state
          resumeDownloadBtn.style.opacity = '0.7';
          resumeDownloadBtn.style.cursor = 'wait';
          
          // Change button text to show loading
          const originalText = resumeDownloadBtn.querySelector('.resume-download-txt').textContent;
          resumeDownloadBtn.querySelector('.resume-download-txt').textContent = 'Downloading...';
          
          // Simulate download process (you can remove setTimeout in production)
          setTimeout(() => {
              // Reset button state
              resumeDownloadBtn.style.opacity = '1';
              resumeDownloadBtn.style.cursor = 'pointer';
              resumeDownloadBtn.querySelector('.resume-download-txt').textContent = originalText;
              
              // Trigger the download
              const resumeFilePath = '/Om Prajapati Resume.pdf';
              const downloadLink = document.createElement('a');
              downloadLink.href = resumeFilePath;
              downloadLink.download = 'Om Prajapati Resume.pdf';
              document.body.appendChild(downloadLink);
              downloadLink.click();
              document.body.removeChild(downloadLink);
          }, 1000);
          
      } catch (error) {
          console.error('Download failed:', error);
          
          // Reset button state
          resumeDownloadBtn.style.opacity = '1';
          resumeDownloadBtn.style.cursor = 'pointer';
          resumeDownloadBtn.querySelector('.resume-download-txt').textContent = 'Download Failed';
          
          // Reset to original text after 2 seconds
          setTimeout(() => {
              resumeDownloadBtn.querySelector('.resume-download-txt').textContent = 'Download My Resume';
          }, 2000);
      }
  });
});

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact_form'),
      contactMessage = document.getElementById('contact-msg');

const sendEmail = (e) => {
    e.preventDefault();

    // servideID - templateID - #form - publickey
    emailjs.sendForm('service_20t8xda','template_tz7eczq','.contact-form','hGv1SZyfLxAHFkxU0')
    .then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅';

        // Remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        // Clear input fields
        contactForm.reset();

    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌';
    })
}

contactForm.addEventListener('submit', sendEmail);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset: true // Animations repeat
})

sr.reveal(`.nav, .show-more-container`, {origin: 'bottom'});
sr.reveal(`.projects-card, .services-card, .contact-info, .contact-form, .links-group`, {origin: 'bottom', interval: 200});
sr.reveal(`.title-container`, {origin: 'top'});
sr.reveal(`.home-txt-container, .about-img-container, .resume-txt-content`, {origin: 'left'});
sr.reveal(`.home-img, .about-info-container, .resume-qrcode-content, .dark-theme-div`, {origin: 'right'});
