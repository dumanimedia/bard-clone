"use strict";
const sidebarTogglerButton = document.querySelector('.sidebar-toggler-btn');
const bardWrapperElement = document.querySelector('#bard__wrapper');
if (sidebarTogglerButton && bardWrapperElement) {
    sidebarTogglerButton.addEventListener('click', () => {
        bardWrapperElement.classList.toggle('nav-active');
    });
}
//# sourceMappingURL=script.js.map