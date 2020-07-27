const slider = document.querySelectorAll('.product-image__block');
let isDown = false;
let startX;
let scrollLeft;

slider.forEach(function (elem) {
    elem.addEventListener('mousedown', (e) => {
        isDown = true;
        elem.classList.add('active');
        startX = e.pageX - elem.offsetLeft;
        scrollLeft = elem.scrollLeft;
    });

    elem.addEventListener('mouseleave', () => {
        isDown = false;
        elem.classList.remove('active');
    });

    elem.addEventListener('mouseup', () => {
        isDown = false;
        elem.classList.remove('active');
    });

    elem.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - elem.offsetLeft;
        const walk = (x - startX) * 3;
        elem.scrollLeft = scrollLeft - walk;
    });
});