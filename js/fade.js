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