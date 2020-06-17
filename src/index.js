// JS

// export for others scripts to use
import $ from 'jquery';
import jQuery from 'jquery';
import 'slick-carousel';
window.$ = $;
window.jQuery = jQuery;

import 'bootstrap/dist/js/bootstrap.min'
import 'popper.js/dist/popper.min'
import './js/index'

$('.catalog-filter__list select').change(function(){
    let text = $(this).find('option:selected').text();
    let $aux = $('<select/>').append($('<option/>').text(text));
    $(this).after($aux);
    $(this).width(function () {
        return $aux.width()
    });
    $aux.remove()
}).change();

$('.form-search__input').on('focus blur', function (evt) {
    $('#header__nav').toggleClass('search-open', evt.type === 'focus');
});

$('.form-search').click(function () {
    $('#header__nav').addClass('search-open-mobil')
});

$('.form-search__bg-close').click(function () {
    $('.header__nav').removeClass('search-open-mobil');
});

// $('.form-search-mobil__block button').click(function () {
//     $('.header__nav').removeClass('search-open-mobil');
// });

$('.phone-icon-mob').click(function () {

});

$('.navbar-toggler').click(function () {
    $('html').toggleClass('overflow-hidden')
});

$('.dropdown-toggle').on('hide.bs.dropdown', function () {
    return false;
});

$('.dropdown-toggle .dropdown-menu').on({'click': function(e) {
        console.log('123');
        e.stopPropagation();
    }
});

$(".dropdown-menu li a").click(function(){
    $(this).parents(".dropdown").find('.btn').val($(this).data('value')).html($(this).html());
});

$('.catalog-slider__list').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrow: true,
    lazyLoad: 'progressive',
    dots: false,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                variableWidth: false,
                infinite: true,
            }
        },
        {
            breakpoint: 767.98,
            settings: {
                variableWidth: false,
                slidesToScroll: 1,
                slidesToShow: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
            }
        }
    ]
});

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'


