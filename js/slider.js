function shiftLeft() {
    const boxes = document.querySelectorAll(".gallery-item");
    const tmpNode = boxes[0];
    boxes[0].className = " gallery-item gallery-item-last";
    setTimeout(function() {
        boxes[1].className = " gallery-item gallery-item-first";
        boxes[2].className = " gallery-item gallery-item-previous";
        boxes[3].className = " gallery-item gallery-item-selected";
        boxes[4].className = " gallery-item gallery-item-next";
        boxes[0].remove();
        document.querySelector(".gallery-container").appendChild(tmpNode);
    }, 500);
}

function shiftRight() {
    const boxes = document.querySelectorAll(".gallery-item");
    boxes[4].className = "gallery-item move-out-from-right";
    setTimeout(function() {
        const tmpNode = boxes[4];
        boxes[4].remove();
        document.querySelector(".gallery-container").appendChild(tmpNode);
        let parentObj = document.querySelector(".gallery-container");
        parentObj.insertBefore(tmpNode, parentObj.firstChild);
        tmpNode.className = "gallery-item gallery-item-first move-out-from-right";
        boxes[0].className = "gallery-item gallery-item-previous";
        boxes[1].className = "gallery-item gallery-item-selected";
        boxes[2].className = "gallery-item gallery-item-next";
        boxes[3].className = "gallery-item gallery-item-last ";
    }, 300);
}