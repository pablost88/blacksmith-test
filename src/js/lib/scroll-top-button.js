(function() {
	const scrollTopButton = document.getElementById('footer-scroll-top');

	function scrollToTop(el) {
		window.scrollTo({
			behavior: 'smooth',
			top: 0
		});
	}

	if (typeof window.ontouchstart === 'undefined') {
		scrollTopButton.addEventListener('click', scrollToTop)
	} else {
		scrollTopButton.addEventListener('touchstart', scrollToTop)
	}
})();