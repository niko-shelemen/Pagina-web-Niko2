document.addEventListener('DOMContentLoaded', function() {
    
    // Validación del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí podrías añadir una lógica más compleja (ej: enviar a un servidor)
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            contactForm.reset();
        });
    }

    // Validación del formulario de pago (ejemplo básico)
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const cardName = document.getElementById('card-name').value;
            const cardNumber = document.getElementById('card-number').value;
            const cardExpiry = document.getElementById('card-expiry').value;
            const cardCvc = document.getElementById('card-cvc').value;

            // Simple validación de que los campos no estén vacíos
            if (cardName && cardNumber && cardExpiry && cardCvc) {
                alert('¡Pago procesado con éxito! Tu pedido está en camino.');
                paymentForm.reset();
            } else {
                alert('Por favor, completa todos los campos de pago.');
            }
        });
    }
});