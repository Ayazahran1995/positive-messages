const widget = document.querySelector('.widget');
let isDragging = false, xOffset = 0, yOffset = 0;

widget.addEventListener("mousedown", (e) => {
    isDragging = true;
    xOffset = e.clientX - widget.getBoundingClientRect().left;
    yOffset = e.clientY - widget.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        widget.style.left = `${e.clientX - xOffset}px`;
        widget.style.top = `${e.clientY - yOffset}px`;
        widget.style.position = "absolute";
    }
});

document.addEventListener("mouseup", () => isDragging = false);
