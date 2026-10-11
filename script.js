// TOM | TOU - Simple Form Handling
document.addEventListener('DOMContentLoaded', function() {
    // Email capture form
    const emailForm = document.getElementById('emailForm') || document.querySelector('.email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = document.getElementById('emailInput');
            const email = emailInput.value.trim();
            
            if (email) {
                // Simple validation
                if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    // For now, just show success message - in reality this would connect to a backend
                    alert('Thank you! Check your email for instant access.');
                    emailInput.value = '';
                    // Could also store locally or send to a webhook
                    console.log('Email captured:', email);
                } else {
                    alert('Please enter a valid email address');
                }
            } else {
                alert('Please enter your email address');
            }
        });
    }
    
    // Partner application form
    const partnerForm = document.getElementById('partnerForm') || document.querySelector('.partner-form');
    if (partnerForm) {
        partnerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('partnerName').value.trim();
            const email = document.getElementById('partnerEmail').value.trim();
            const business = document.getElementById('partnerBusiness').value.trim();
            
            if (name && email && business) {
                if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    alert('Thank you for applying! We\'ll review your application and get back to you within 2 business days.');
                    partnerForm.reset();
                    console.log('Partner application submitted:', { name, email, business });
                } else {
                    alert('Please enter a valid email address');
                }
            } else {
                alert('Please fill in all fields');
            }
        });
    }
    
    // Add some interactive effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        stat.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});