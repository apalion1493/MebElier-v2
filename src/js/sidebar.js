// SIDEBAR

import FloatSidebar from "float-sidebar";

let sidebar = document.querySelector('.sidebar');
let content = document.querySelector('.content-sideBar');

let floatSidebar = FloatSidebar({
    sidebar: sidebar,
    relative: content,
    topSpacing: 90,
    bottomSpacing: 40
});

sidebar.addEventListener('click', function(e) {
    let target = e.target;

    if (target.matches('.sidebar__section')) {
        target.classList.toggle('is-opened');
    }

    floatSidebar.forceUpdate();
})