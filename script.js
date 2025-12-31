



/**
 * Opens WhatsApp with a pre-filled message.
 * Ensure the phone number includes the country code without '+' or spaces.
 */
function orderNow() {
    // 91 is the country code for India. Adjust if the number is from another country.
    const phoneNumber = "919607366052"; 
    const message = "Hello MF Enterprises, I would like to inquire about your products.";
    
    // Using the official WhatsApp API link format
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}
document.querySelector('.order-btn').addEventListener('click', orderNow)
/**
 * Smooth Scrolling for Navigation Links
 * Finds all links starting with # and scrolls to the target element.
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        }
    });
});