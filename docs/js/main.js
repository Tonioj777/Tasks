$(function () {

    $(".rateYo").rateYo({
        starWidth: "35px",
        normalFill: "#D7D1C7",
        ratedFill: "#FFB648",
        // rating: 4.5,
        // readOnly: true
    });


    // -------------------------------------------------------------------
    var mixer = mixitup('.blog__list')

    $('.button__item-btn').on('click', function () {
        $('.button__item-btn').removeClass('button__item-btn--active')
        $(this).addClass('button__item-btn--active')
    })

    // -----------------------------------------------------------------------

    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        waitForAnimate: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
    })

    $('.slider__arrows-prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.slider__arrows-next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    // ----------------------------------------------------------------------

    $('.faq__acc-link').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('faq__acc-link--active')
        $(this).children('.faq__desc').slideToggle()
    })


});
// ---------------------------------------

var map;
ymaps.ready(init);
function init() {
    map = new ymaps.Map('map', {
        center: [45.352016, 36.472924],
        zoom: 16,
    })
    map.controls.remove('trafficControl')
    map.controls.remove('geolocationControl')
    map.controls.remove('rulerControl')
    map.behaviors.disable('scrollZoom')
    map.controls.remove('searchControl')
    let placemark = new ymaps.Placemark([45.352016, 36.472925],)
    map.geoObjects.add(new ymaps.Placemark([45.352016, 36.472925]))
}
