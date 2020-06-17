let dropdownHeader = document.getElementById("myselectPhone");
dropdownHeader.addEventListener("DOMSubtreeModified", function () {
    // document.getElementById("myTextPhone").innerHTML = `<a href="tel:${dropdownHeader.dataset.value}">${dropdownHeader.dataset.value}</a>`;
    console.log(dropdownHeader.dataset.value)
});
