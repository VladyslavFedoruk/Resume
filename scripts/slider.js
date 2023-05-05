$('.portfolio_slider-list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [{
        breakpoint: 540,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});