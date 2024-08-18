document.addEventListener('DOMContentLoaded', () => {

    // Orbital items
    const orbitalItems = document.querySelectorAll('.orbital-item');

    orbitalItems.forEach(item => {
        
        item.addEventListener('click', () => {
            
            // get target
            const tech = item.getAttribute('data-tech');
            // get card
            const card = document.querySelector(`.card[data-tech="${tech}"]`);
            // get orbital container
            const orbitalContainer = document.querySelector('.orbital-container');
            // get Modal - Card Container
            const cardsContainer = document.querySelector('.modal-card');
            // get list - Card Content
            const cardContent = cardsContainer.querySelector('modal-content');

            // hidden - orbital container
            orbitalContainer.classList.add('hidden-orbital-container');
            
            // get direccion for animation
            let direction = Math.random() < 0.5 ? 'left' : 'right';
            
            // enable modal
            if (cardsContainer.classList.contains('desable-modal-left') || cardsContainer.classList.contains('desable-modal-right')) {

                cardsContainer.classList.remove('desable-modal-left');
                cardsContainer.classList.remove('desable-modal-right');
                cardsContainer.classList.add('enable-modal');
                card.style.zIndex = '200';
                card.addEventListener('click', (event) => event.stopPropagation());
            };
            
            // desable modal
            if (cardsContainer.classList.contains('enable-modal')) {
                cardsContainer.addEventListener('click', function () {

                    cardsContainer.classList.remove('enable-modal');
                    cardsContainer.classList.remove('desable-modal-left');
                    cardsContainer.classList.remove('desable-modal-right');

                    cardsContainer.classList.add(`desable-modal-${direction}`);
                    card.style.zIndex = 0;
                    
                    // show - orbital container
                    orbitalContainer.classList.remove('hidden-orbital-container');
                });
            };
        });
    });
});