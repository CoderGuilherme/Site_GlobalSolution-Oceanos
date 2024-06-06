     // Get all navigation links
     const navLinks = document.querySelectorAll('.navegacao--menu a');

     // Function to highlight active section based on scroll position
     function highlightActiveLink() {
         const scrollPosition = window.scrollY;

         // Iterate over each section to find the active one
         document.querySelectorAll('section').forEach(section => {
             const sectionTop = section.offsetTop;
             const sectionHeight = section.clientHeight;

             if (scrollPosition >= sectionTop - sectionHeight / 3 && scrollPosition < sectionTop + sectionHeight - sectionHeight / 3) {
                 // Remove 'active' class from all links
                 navLinks.forEach(link => {
                     link.classList.remove('active');
                 });

                 // Get the corresponding navigation link and add 'active' class to it
                 const navLink = document.querySelector(`.navegacao--menu a[href="#${section.id}"]`);
                 if (navLink) {
                     navLink.classList.add('active');
                 }
             }
         });
     }

     // Call the function on scroll
     window.addEventListener('scroll', highlightActiveLink);