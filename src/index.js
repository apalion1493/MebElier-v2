// JS

// export for others scripts to use
import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;
// import { tns } from 'tiny-slider'

// import 'tiny-slider/dist/min/tiny-slider';
import 'bootstrap/dist/js/bootstrap.min'
import 'popper.js/dist/popper.min'
import './js/index'


$('select').change(function(){
    let text = $(this).find('option:selected').text();
    let $aux = $('<select/>').append($('<option/>').text(text));
    $(this).after($aux);
    $(this).width(function () {
        return $aux.width()
    });
    $aux.remove()
}).change();

$('.form-search__input').on('focus blur', function (evt) {
    $(this).parent().parent().toggleClass('search-open', evt.type === 'focus');
});

$('.form-search').click(function () {
    $(this).parent().addClass('search-open-mobil')
});

jQuery(function($){
    $(document).mouseup(function (e){
        let div = $(".form-search");
        if (!div.is(e.target) && div.has(e.target).length === 0 && !$('#form-search-mobil').is(e.target)) {
            div.parent().removeClass('search-open-mobil');
        }
    });
});

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'


