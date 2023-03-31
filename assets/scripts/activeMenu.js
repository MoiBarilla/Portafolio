export function scrollMenuActive() {
    const scrollActive = () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
    
        sections.forEach(e => {
            const sectionHeight = e.offsetHeight;
            const sectionTop = e.offsetTop - 200;
            const sectionId = e.getAttribute('id');
            const sectionClass = document.querySelector(`.menu nav a[href*= ${sectionId} ]`);
            
            if ( (scrollY > sectionTop) && (scrollY <= (sectionTop + sectionHeight)) ) {
                sectionClass.classList.add('active');
            } else {
                sectionClass.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', scrollActive);
}