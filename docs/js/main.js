$(function () {

    $(".rateYo").rateYo({
        starWidth: "35px",
        normalFill: "#D7D1C7",
        ratedFill: "#FFB648",
        // rating: 4.5,
        // readOnly: true
    });

    var mixer = mixitup('.blog__cards')



    $('.button__item-btn').on('click', function () {
        $('.button__item-btn').removeClass('button__item-btn--active')
        $(this).addClass('button__item-btn--active')
    })


    
    
});



