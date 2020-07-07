// JS

// export for others scripts to use
import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = window.jQuery = $;

import 'bootstrap/dist/js/bootstrap.min';
import 'popper.js/dist/popper.min';
import 'slick-carousel';
import 'slick-lightbox';
import './js/index';

$('.catalog-filter__list select').change(function(){
    let text = $(this).find('option:selected').text();
    let $aux = $('<select/>').append($('<option/>').text(text));
    $(this).after($aux);
    $(this).width(function () {
        return $aux.width()
    });
    $aux.remove()
}).change();

$('.form-search__input').on('focus', function (evt) {
    $('#header__nav').addClass('search-open');
});

jQuery(function($){
    $(document).mouseup(function (e){
        let div = $(".form-search");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('#header__nav').removeClass('search-open');
        }
    });
});

$('.form-search').click(function () {
    $('#header__nav').addClass('search-open-mobil')
});

$('.form-search__bg-close').click(function () {
    $('.header__nav').removeClass('search-open-mobil');
});

$('.navbar-toggler').click(function () {
    $('html').toggleClass('overflow-hidden');
    $('#wrapper').toggleClass('menu-open')
});

$('.dropdown-toggle').on('hide.bs.dropdown', function () {
    return false;
});

$('.dropdown-toggle .dropdown-menu').on({'click': function(e) {
        e.stopPropagation();
    }
});

$(".dropdown-menu li a").click(function(){
    $(this).parents(".dropdown").find('.btn').val($(this).data('value')).html($(this).html());
});

$(".phone-icon-mob").click(function () {
   $('#header__nav').addClass('phone-mobil-active');
});

$('.phone-mobil-container_bg, .phone-mobil-container button').click(function () {
    $('#header__nav').removeClass('phone-mobil-active');
});


$(document).on("click.bs.dropdown.data-api", ".noclose", function (e) { e.stopPropagation() });

let header = $('#header');
let scrollPrev = 0;

$(window).scroll(function() {

    let scrolled = $(window).scrollTop();

    if ( scrolled > 80 && scrolled > scrollPrev ) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }

    if ( scrolled > 150) {
        header.addClass('header__home-page');
    } else {
        header.removeClass('header__home-page');
    }

    scrollPrev = scrolled;
});

function imgSize() {
    $('.product-image__block img').css({
        'position': 'absolute',
        'min-width': '100%',
        'bottom': '0',
    });
}

function slickNum() {
    let $status = $('.pagingInfo');
    let $slickElement = $('.home-section-firstSlide__slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(`0${i}`);
    });

    $slickElement.slick({
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        autoplay: true,
        autoplaySpeed: 15000,
        arrows: false,
        fade: true,
        cssEase: 'ease-in-out',
        speed: 500,
        dots: true
    });

    imgSize();
}

(function slickAdd() {
    $('.catalog-slider__list').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrow: true,
        lazyLoad: 'progressive',
        dots: false,
        adaptiveHeight: false,
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

    $('.product-image').each(function() {
        let slider = $(this);
        slider.slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe: false,
        });

        let sLightbox = $(this);
        sLightbox.slickLightbox({
            src: 'data-src',
            itemSelector: '.product-image__wrapper span',
            lazy: true,
        });
    });

    slickNum()
})()





// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'


