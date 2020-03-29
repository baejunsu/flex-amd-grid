function shiftLeft() {
    const boxes = document.querySelectorAll(".gallery-item");
    const tmpNode = boxes[0];
    boxes[0].className = " gallery-item  move-out-from-left gallery-item-last";
    setTimeout(function() {
        boxes[0].className = " gallery-item gallery-item-last move-in-from-left";
        boxes[1].className = " gallery-item gallery-item-first";
        boxes[2].className = " gallery-item gallery-item-previous";
        boxes[3].className = " gallery-item gallery-item-selected";
        boxes[4].className = " gallery-item gallery-item-next ";
        boxes[0].remove();
        document.querySelector(".gallery-container").appendChild(tmpNode);
    }, 350);
}

function shiftRight() {
    const boxes = document.querySelectorAll(".gallery-item");
    boxes[4].className = "gallery-item move-out-from-right";
    setTimeout(function() {
        const tmpNode = boxes[4];
        tmpNode.remove();
        document.querySelector(".gallery-container").prepend(tmpNode);
        tmpNode.className = "gallery-item gallery-item-first move-in-from-right";
        boxes[0].className = "gallery-item gallery-item-previous";
        boxes[1].className = "gallery-item gallery-item-selected";
        boxes[2].className = "gallery-item gallery-item-next";
        boxes[3].className = "gallery-item gallery-item-last ";
    }, 350);
}