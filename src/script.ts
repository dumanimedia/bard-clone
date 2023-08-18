const sidebarTogglerButton = document.querySelector(
  '.sidebar-toggler-btn'
) as HTMLImageElement;
const bardWrapperElement = document.querySelector(
  '#bard__wrapper'
) as HTMLDivElement;

if (sidebarTogglerButton && bardWrapperElement) {
  sidebarTogglerButton.addEventListener('click', () => {
    bardWrapperElement.classList.toggle('nav-active');
  });
}
