document.addEventListener('DOMContentLoaded', function() {
	const elements = document.querySelectorAll('.fade-in');

	function checkPosition() {
		elements.forEach(element => {
			const position = element.getBoundingClientRect();
			if (position.top < window.innerHeight && position.bottom >= 0) {
				element.classList.add('visible');
			}
		});
	}

	window.addEventListener('scroll', checkPosition);
	checkPosition(); // Verifica a posição inicial
});

// scripts.js
let angle = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
    angle -= 90;
    document.querySelector('.carousel').style.transform = `rotateY(${angle}deg)`;
    
    carouselItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === (currentIndex % 4 + 4) % 4) {
            item.classList.add('active');
        }
    });

    currentIndex++;
}

setInterval(updateCarousel, 6000); // Change slide every 3 seconds

// Initialize the first item as active
carouselItems[currentIndex].classList.add('active');