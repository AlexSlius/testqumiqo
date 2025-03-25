export const getScrollbarWidth = () => {
    const container = document.createElement('div');
    const inner = document.createElement('div');

    container.appendChild(inner);
    document.body.appendChild(container);

    container.style.overflow = 'scroll';

    const scrollbarWidth = container.offsetWidth - inner.offsetWidth;

    document.body.removeChild(container);

    return scrollbarWidth;
}