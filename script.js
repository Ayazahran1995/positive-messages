const messages = [
    { text: "You are stronger than you feel today.", image: "images/strong.jpg" },
    { text: "Small steps still move you forward.", image: "images/steps.jpg" },
    { text: "It's okay to not be okay. Tomorrow is a new day.", image: "images/newday.jpg" },
    { text: "You are enough, just as you are.", image: "images/enough.jpg" },
    { text: "Be kind to yourself. You deserve it.", image: "images/kind.jpg" }
];

// Function to update the message and image
function newMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('positive-message').textContent = messages[randomIndex].text;
    document.getElementById('positive-image').src = messages[randomIndex].image;
}

// Function to close the widget
function closeWidget() {
    document.getElementById("widget").style.display = "none";
}

// Make the widget draggable
dragElement(document.getElementById("widget"));

function dragElement(elm) {
    let posX = 0, posY = 0, mouseX = 0, mouseY = 0;
    elm.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        mouseX = e.clientX;
        mouseY = e.clientY;
        document.onmouseup = closeDrag;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        posX = mouseX - e.clientX;
        posY = mouseY - e.clientY;
        mouseX = e.clientX;
        mouseY = e.clientY;
        elm.style.top = (elm.offsetTop - posY) + "px";
        elm.style.left = (elm.offsetLeft - posX) + "px";
    }

    function closeDrag() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
