function removeElement() {
    
    const element = document.querySelector('.convertflow-cta.cf-overlay');
    
    
    if (element) {
        setTimeout(() => {
            element.remove();
            console.log('Element with class "convertflow-cta cf-overlay" has been removed.');
        }, 200); 
    }
}


const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
       
        removeElement();
    });
});


observer.observe(document.body, { childList: true, subtree: true });


removeElement();