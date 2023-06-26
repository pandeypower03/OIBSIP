
const navItems = document.querySelectorAll('.nav ul');

window.addEventListener('scroll', function() {

  const scrollPosition = window.scrollY;
  

  navItems.forEach(function(item) {
  
    const sectionId = item.querySelector('a').getAttribute('href');
    
    const section = document.querySelector(sectionId);
    

    const sectionTop = section.offsetTop;
    
    
    const sectionHeight = section.offsetHeight;
    
   
    if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
    
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});
