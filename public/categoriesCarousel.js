$('.carousel').slick({
	dots: false,
	infinite: false,
	speed: 1000,
	slidesToShow: 6,
	slidesToScroll: 6,
	responsive: [{
			breakpoint: 1100,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 6,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});
